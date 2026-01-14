require('dotenv').config();
const axios = require('axios');
const apiKey = process.env.GROQ_API_KEY;

async function testVision() {
    try {
        console.log("Testing Vision (5x5 Red Image)...");
        // 5x5 Red Image
        const base64Image = "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
        const dataUrl = `data:image/png;base64,${base64Image}`;

        const response = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
            model: "meta-llama/llama-4-maverick-17b-128e-instruct",
            messages: [
                {
                    role: "user",
                    content: [
                        { type: "text", text: "What color is this exact image? Return ONE word." },
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
