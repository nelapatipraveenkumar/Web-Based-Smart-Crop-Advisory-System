require('dotenv').config();
const axios = require('axios');

const apiKey = process.env.GROQ_API_KEY;

async function listModels() {
    try {
        console.log("Fetching available models from Groq...");
        const response = await axios.get('https://api.groq.com/openai/v1/models', {
            headers: { 'Authorization': `Bearer ${apiKey}` }
        });

        console.log("Response Data:", JSON.stringify(response.data, null, 2));

    } catch (err) {
        console.error("❌ Failed to list models:", err.message);
    }
}

listModels();
