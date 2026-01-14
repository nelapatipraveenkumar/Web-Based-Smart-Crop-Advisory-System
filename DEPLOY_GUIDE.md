# 🚀 Deployment Guide

## Prerequisites
1.  **Node.js**: Install from [nodejs.org](https://nodejs.org/).
2.  **MySQL Server**: Install XAMPP or MySQL Workbench.
    -   Create a user `root` with password `1@Praveenkumar` (or update `.env`).

## Installation
1.  **Copy Project**: Move the folder to your desired location.
2.  **Install Dependencies**:
    ```bash
    cd backend
    npm install
    ```
    *Note: The script `START_SMART_AGRI.bat` can do this automatically.*

## Database Setup
The system automatically creates the database `smart_agri_db` and tables (`advisory_logs`, `feedback`) on the first run.
-   Schema is defined in `backend/schema.sql`.

## API Keys (Optional)
To enable the "Genius" Chatbot:
1.  Get an API Key from [OpenAI](https://platform.openai.com).
2.  Open `backend/.env`.
3.  Set `OPENAI_API_KEY=sk-....`

## Running the App
Double-click `START_SMART_AGRI.bat`.
Access the app at: `http://localhost:3000`
