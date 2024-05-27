var express = require('express');


var authService = require('../services/authService');
var emailServices = require('../services/emailServices.js')
var router = express.Router();


/* GET register page. */
router.post('/register', async function (req, res, next) {
    try {
        const userData = req.body;
        const existingUserEmail = await authService.getOne({ email: userData.email });
        const existingUserMobile = await authService.getOne({ mobile: userData.mobile });
        const messages = []
        if (existingUserEmail) {
            messages.push(`Email ${userData.email} is already registered`)
        }
        if (existingUserMobile) {
            messages.push(`Mobile ${userData.mobile} is already registered`)
        }
        if (messages.length > 0) {
            return res.status(400).json({ error: { messages: messages } })
        }
        const newClient = await authService.register(userData);
        await emailServices.sendRegisterEmail(newClient);

        const token = await authService.createToken(newClient.id)
        res.json({ token, sucess: { message: 'Sucessfully registered!' } });

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: { messages: ['Something went wrong. Please try after a while!'] } });
    }
})

router.post('/signin', async function (req, res, next) {
    try {
        const userData = req.body;
        const existingUserEmail = await authService.getOne({ email: userData.email });
        if (!existingUserEmail) {
            return res.status(404).json({ error: { messages: [`Email ${userData.email} is not registered`] } });
        }

        const passwordMatches = await authService.signIn(userData);
        if (!passwordMatches) {
            return res.status(401).json({ error: { messages: [`Email and password doen not match. Try Again!`] } });
        }
        const token = await authService.createToken(existingUserEmail.id)

        res.json({
            token,
            sucess: { message: 'Sucessfully signed in!' }
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: { messages: ['Something went wrong. Please try after a while!'] } });
    }
})
module.exports = router;
