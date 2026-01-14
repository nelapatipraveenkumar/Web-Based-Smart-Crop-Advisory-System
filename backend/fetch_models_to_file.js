require('dotenv').config();
const axios = require('axios');
const fs = require('fs');

const apiKey = process.env.GROQ_API_KEY;

async function listModels() {
    try {
        const response = await axios.get('https://api.groq.com/openai/v1/models', {
            headers: { 'Authorization': `Bearer ${apiKey}` }
        });

        fs.writeFileSync('groq_models.json', JSON.stringify(response.data, null, 2));
        console.log("Saved models to groq_models.json");

    } catch (err) {
        console.error("❌ Failed:", err.message);
    }
}

listModels();
