require('dotenv').config();
const axios = require('axios');

const apiKey = process.env.GROQ_API_KEY;

async function listModels() {
    try {
        console.log("Fetching available models from Groq...");
        const response = await axios.get('https://api.groq.com/openai/v1/models', {
            headers: { 'Authorization': `Bearer ${apiKey}` }
        });

        console.log("Available Models:");
        response.data.data.forEach(m => {
            // Check for vision or llama-3.2
            if (m.id.includes('vision') || m.id.includes('llama-3.2')) {
                console.log(` - ${m.id}`);
            }
        });

    } catch (err) {
        console.error("❌ Failed to list models:", err.message);
    }
}

listModels();
