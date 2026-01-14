require('dotenv').config();
const axios = require('axios');

const apiKey = process.env.GROQ_API_KEY;

async function testVision() {
    try {
        console.log("Testing llama-3.2-90b-vision-preview...");
        const base64Image = "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
        const dataUrl = `data:image/png;base64,${base64Image}`;

        const response = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
            model: "llama-3.2-90b-vision-preview",
            messages: [
                {
                    role: "user",
                    content: [
                        { type: "text", text: "What is this?" },
                        { type: "image_url", image_url: { url: dataUrl } }
                    ]
                }
            ],
            max_tokens: 10
        }, {
            headers: { 'Authorization': `Bearer ${apiKey}` }
        });

        console.log("✅ Success!");
    } catch (err) {
        console.error("❌ Failed:", err.response ? JSON.stringify(err.response.data) : err.message);
    }
}

testVision();
