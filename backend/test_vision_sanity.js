require('dotenv').config();
const axios = require('axios');

const apiKey = process.env.GROQ_API_KEY;

async function testVision() {
    try {
        console.log("Testing Vision Capability of llama-4-maverick...");
        // 1x1 Red Pixel Base64
        const base64Image = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";
        const dataUrl = `data:image/png;base64,${base64Image}`;

        const response = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
            model: "meta-llama/llama-4-maverick-17b-128e-instruct",
            messages: [
                {
                    role: "user",
                    content: [
                        { type: "text", text: "What color is this image? usage: ONE WORD." },
                        { type: "image_url", image_url: { url: dataUrl } }
                    ]
                }
            ],
            temperature: 0.1,
            max_tokens: 20
        }, {
            headers: { 'Authorization': `Bearer ${apiKey}` }
        });

        console.log("Response:", response.data.choices[0].message.content);

    } catch (err) {
        console.error("❌ Failed:", err.message);
        if (err.response) console.error(JSON.stringify(err.response.data));
    }
}

testVision();
