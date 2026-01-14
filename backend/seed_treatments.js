const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath);

/*
DATASET CLASSES (15):
1. Pepper__bell___Bacterial_spot
2. Pepper__bell___healthy
3. Potato___Early_blight
4. Potato___Late_blight
5. Potato___healthy
6. Tomato_Bacterial_spot
7. Tomato_Early_blight
8. Tomato_Late_blight
9. Tomato_Leaf_Mold
10. Tomato_Septoria_leaf_spot
11. Tomato_Spider_mites_Two_spotted_spider_mite
12. Tomato__Target_Spot
13. Tomato__Tomato_YellowLeaf__Curl_Virus
14. Tomato__Tomato_mosaic_virus
15. Tomato_healthy
*/

const treatments = [
    // --- PEPPER ---
    {
        disease: 'Pepper__bell___Bacterial_spot',
        diagnosis: 'Bacterial Spot (Pepper)',
        treatment: 'Apply copper-based fungicides. Remove infected plant parts. Avoid overhead watering to reduce spread.'
    },
    {
        disease: 'Pepper__bell___healthy',
        diagnosis: 'Healthy Pepper Plant',
        treatment: 'No treatment needed. Maintain consistent watering and monitor for pests.'
    },

    // --- POTATO ---
    {
        disease: 'Potato___Early_blight',
        diagnosis: 'Early Blight (Potato)',
        treatment: 'Apply fungicides containing Mancozeb or Chlorothalonil. Rotate crops every 2-3 years. Remove infected debris.'
    },
    {
        disease: 'Potato___Late_blight',
        diagnosis: 'Late Blight (Potato)',
        treatment: 'Serious! Use specific fungicides like Metalaxyl or Cymoxanil. Destroy infected tubers immediately to prevent spread.'
    },
    {
        disease: 'Potato___healthy',
        diagnosis: 'Healthy Potato Plant',
        treatment: 'Ensure soil drainage is good. Monitor for beetles or aphids.'
    },

    // --- TOMATO ---
    {
        disease: 'Tomato_Bacterial_spot',
        diagnosis: 'Bacterial Spot (Tomato)',
        treatment: 'Copper sprays (e.g., Kocide) can help. Remove infected leaves. Mulch soil to prevent splash-back.'
    },
    {
        disease: 'Tomato_Early_blight',
        diagnosis: 'Early Blight (Tomato)',
        treatment: 'Prune bottom leaves to improve airflow. Apply Copper or Chlorothalonil fungicide every 7-10 days.'
    },
    {
        disease: 'Tomato_Late_blight',
        diagnosis: 'Late Blight (Tomato)',
        treatment: 'Highly destructive. Apply specialized fungicides (e.g. Curzate, Revus). worst case, remove plants.'
    },
    {
        disease: 'Tomato_Leaf_Mold',
        diagnosis: 'Leaf Mold (Tomato)',
        treatment: 'Improve ventilation (reduce humidity). Apply fungicides if necessary. Water at the base, not leaves.'
    },
    {
        disease: 'Tomato_Septoria_leaf_spot',
        diagnosis: 'Septoria Leaf Spot (Tomato)',
        treatment: 'Remove lower leaves. Apply fungicide (Chlorothalonil). Clean up garden debris in winter.'
    },
    {
        disease: 'Tomato_Spider_mites_Two_spotted_spider_mite',
        diagnosis: 'Spider Mites (Tomato)',
        treatment: 'Spray with Neem Oil or insecticidal soap. Introduction of predatory mites can also help.'
    },
    {
        disease: 'Tomato__Target_Spot',
        diagnosis: 'Target Spot (Tomato)',
        treatment: 'Apply fungicides (Chlorothalonil/Mancozeb). Improve airflow by staking plants.'
    },
    {
        disease: 'Tomato__Tomato_YellowLeaf__Curl_Virus',
        diagnosis: 'Yellow Leaf Curl Virus',
        treatment: 'No cure. Remove infected plants immediately. Control whiteflies (vectors) with Neem Oil or sticky traps.'
    },
    {
        disease: 'Tomato__Tomato_mosaic_virus',
        diagnosis: 'Tomato Mosaic Virus',
        treatment: 'No cure. Remove plants. Wash hands/tools thoroughly (highly contagious). Do not smoke near plants.'
    },
    {
        disease: 'Tomato_healthy',
        diagnosis: 'Healthy Tomato Plant',
        treatment: 'Great job! Continue regular watering and nutrient management.'
    },
    // --- RICE ---
    {
        disease: 'Rice___Bacterial_leaf_blight',
        diagnosis: 'Bacterial Leaf Blight (Rice)',
        treatment: 'Use Copper hydroxide. Drain the field (reduce water level). Use resistant varieties (e.g., IR64).'
    },
    {
        disease: 'Rice___Brown_spot',
        diagnosis: 'Brown Spot (Rice)',
        treatment: 'Improve soil fertility (add Potassium/Zinc). Foliar spray of Mancozeb. Seed treatment with Carbendazim.'
    },
    {
        disease: 'Rice___Leaf_blast',
        diagnosis: 'Rice Blast',
        treatment: 'Spray Tricyclazole or Edifenphos. Avoid excess Nitrogen fertilizer. Maintain standing water.'
    },
    {
        disease: 'Rice___healthy',
        diagnosis: 'Healthy Rice Plant',
        treatment: 'Maintain water level. Apply balanced NPK fertilizers.'
    },

    // --- WHEAT ---
    {
        disease: 'Wheat___Brown_rust',
        diagnosis: 'Brown Rust (Wheat)',
        treatment: 'Apply Propiconazole or Tebuconazole. Use resistant varieties (e.g. Sonalika).'
    },
    {
        disease: 'Wheat___Yellow_rust',
        diagnosis: 'Yellow Rust (Wheat)',
        treatment: 'Spray Propiconazole immediately upon spotting yellow stripes. avoid late sowing.'
    },
    {
        disease: 'Wheat___healthy',
        diagnosis: 'Healthy Wheat Plant',
        treatment: 'Ensure proper irrigation during crown root initiation.'
    }
];

db.serialize(() => {
    // Re-create Table
    db.run("DROP TABLE IF EXISTS pest_treatments");
    db.run(`CREATE TABLE pest_treatments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        disease_key TEXT UNIQUE,
        diagnosis_name TEXT,
        treatment_plan TEXT
    )`);

    // Insert Data
    const stmt = db.prepare("INSERT INTO pest_treatments (disease_key, diagnosis_name, treatment_plan) VALUES (?, ?, ?)");

    treatments.forEach(t => {
        stmt.run(t.disease, t.diagnosis, t.treatment);
    });

    stmt.finalize();
    console.log(`Database seeded with ${treatments.length} treatment plans.`);
});

db.close();
