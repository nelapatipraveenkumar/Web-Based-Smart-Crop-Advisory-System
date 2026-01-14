# 🌱 Smart Agriculture Advisory System

A comprehensive web application designed to assist farmers with modern technology. This system integrates crop advisory, weather alerts, pest detection, market prices, and an AI-powered Chatbot Assistant.

## Features
1.  **🌾 Crop Advisory**: Intelligent recommendations for crops and fertilizers based on season, location, and soil type.
2.  **🌤️ Weather Alerts**: Live temperature updates and farming-specific weather warnings.
3.  **📷 Pest Detection**: Upload crop images to detect diseases/pests and get immediate treatment plans.
4.  **💬 AI Chatbot**: Voice-enabled assistant (Groq Llama-3 / OpenAI) to answer farming queries.
5.  **💰 Market Prices**: Live dashboard of crop prices and market trends.
6.  **⭐ Feedback System**: Integrated user feedback collection.

## Tech Stack
-   **Backend**: Node.js, Express.js
-   **Frontend**: HTML5, CSS3, Vanilla JavaScript (Single Server Architecture)
-   **Database**: MySQL
-   **AI**: Groq API (Llama3-70b), OpenAI API (Optional)

## 🚀 How to Run (For Developers)

Follow these steps to set up the project locally:

### 1. Requirements
- Node.js installed
- MySQL Server installed and running

### 2. Setup
Clone the repository and install dependencies:
```bash
git clone https://github.com/nelapatipraveenkumar/Web-Based-Smart-Crop-Advisory-System.git
cd Web-Based-Smart-Crop-Advisory-System
cd backend
npm install
```

### 3. Environment Configuration
**Important:** This project uses API keys that are not shared in the code.
1.  Navigate to the `backend` folder.
2.  Copy the example file:
    ```bash
    cp .env.example .env
    ```
3.  Open `.env` and fill in your details:
    - `DB_PASSWORD`: Your local MySQL password.
    - `GROQ_API_KEY`: Your Groq API key (for the chatbot).
    - `WEATHER_API_KEY`: OpenWeatherMap API Key.

### 4. Database Setup
The app requires a MySQL database.
1.  Log in to MySQL.
2.  Run the `backend/schema.sql` script to create the database and tables.

### 5. Start the App
Double-click **`START_SMART_AGRI.bat`** (Windows)
OR run:
```bash
node server.js
```
The app will run at `http://localhost:3000`.
