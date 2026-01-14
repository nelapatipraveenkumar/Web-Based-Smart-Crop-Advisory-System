@echo off
echo ===================================================
echo     SMART AGRICULTURE SYSTEM - LAUNCHER
echo ===================================================
echo.

:: 1. Check Node.js
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is NOT installed. Please install it first.
    pause
    exit
)

:: 2. Install Dependencies if missing
if not exist "backend\node_modules" (
    echo [INFO] Installing required libraries...
    cd backend
    call npm install
    cd ..
)

:: 3. Initial Database Setup
echo [INFO] Syncing Database Schema...
cd backend
call node init_db.js
cd ..

:: 4. Kill Old Processes
taskkill /F /IM node.exe >nul 2>&1

:: 5. Start Server
echo.
echo [INFO] Starting Server on Port 3000...
echo        - Voice Support: ACTIVE
echo        - AI Chatbot: ACTIVE
echo.
echo Opening Browser...

start http://localhost:3000

cd backend
node server.js
pause
