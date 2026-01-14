require('dotenv').config();
const axios = require('axios');
const fs = require('fs');

const apiKey = process.env.GROQ_API_KEY;

async function testVision() {
    try {
        const base64Image = "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
        const dataUrl = `data:image/png;base64,${base64Image}`;

        await axios.post('https://api.groq.com/openai/v1/chat/completions', {
            model: "llama-3.2-11b-vision-preview",
            messages: [{ role: "user", content: [{ type: "image_url", image_url: { url: dataUrl } }] }],
            max_tokens: 10
        }, { headers: { 'Authorization': `Bearer ${apiKey}` } });

    } catch (err) {
        if (err.response) {
            fs.writeFileSync('error_log.json', JSON.stringify(err.response.data, null, 2));
        } else {
            fs.writeFileSync('error_log.txt', err.message);
        }
    }
}

testVision();
