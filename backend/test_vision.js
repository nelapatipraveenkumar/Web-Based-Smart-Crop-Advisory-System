require('dotenv').config();
const axios = require('axios');

const apiKey = process.env.GROQ_API_KEY;
console.log("Testing Groq Vision with Key:", apiKey ? "Present" : "Missing");

async function testVision() {
    try {
        console.log("Sending request to Groq...");
        // Use a tiny transparent pixel or a public URL if possible. 
        // Groq Vision often needs a URL or base64. 
        // Let's use a dummy base64 of a small red dot.
        const base64Image = "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
        const dataUrl = `data:image/png;base64,${base64Image}`;

        const response = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
            model: "llama-3.2-11b-vision-preview", // Testing the model used in server.js
            messages: [
                {
                    role: "user",
                    content: [
                        { type: "text", text: "What is this?" },
                        { type: "image_url", image_url: { url: dataUrl } }
                    ]
                }
            ],
            temperature: 0.1,
            max_tokens: 50
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        console.log("✅ Success!");
        console.log("Response:", response.data.choices[0].message.content);

    } catch (err) {
        console.error("❌ Failed:", err.message);
        if (err.response) {
            console.error("Status:", err.response.status);
            console.error("Data:", JSON.stringify(err.response.data, null, 2));
        }
    }
}

testVision();
