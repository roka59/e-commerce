const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

async function sendRegisterEmail(newClient,) {
    const msg = {
        to: newClient.to, // Change to your recipient
        from: 'aashish.roka64@gmail.com', // Change to your verified sender
        subject: 'Thanks for registering with us',
        template_id: 'd-64f07086522a4d0db906d987661a305f',
        personalizations: [

            {
                to: {
                    email: newClient.email
                },
                dynamic_template_data: {
                    firstName: newClient.firstName,
                    dashboardUrl: "http://localhost:5173/dashboard"
                }
            }
        ]
    }


    await sgMail.send(msg)


}

module.exports = { sendRegisterEmail }