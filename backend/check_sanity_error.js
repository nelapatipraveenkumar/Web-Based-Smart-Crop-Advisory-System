require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const apiKey = process.env.GROQ_API_KEY;

async function testVision() {
    try {
        const base64Image = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";
        const dataUrl = `data:image/png;base64,${base64Image}`;

        await axios.post('https://api.groq.com/openai/v1/chat/completions', {
            model: "meta-llama/llama-4-maverick-17b-128e-instruct",
            messages: [{ role: "user", content: [{ type: "text", text: "Color?" }, { type: "image_url", image_url: { url: dataUrl } }] }]
        }, { headers: { 'Authorization': `Bearer ${apiKey}` } });

    } catch (err) {
        if (err.response) {
            fs.writeFileSync('sanity_error.json', JSON.stringify(err.response.data, null, 2));
            console.log("Error saved to sanity_error.json");
        }
    }
}

testVision();
