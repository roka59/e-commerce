import { API_URL } from "../constrants";

async function submitAction(data) {
    const url = `${API_URL}/api/v1/auth/register`;
    const response = await fetch(url, {
        method: 'post',
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return response;
}
export default submitAction;