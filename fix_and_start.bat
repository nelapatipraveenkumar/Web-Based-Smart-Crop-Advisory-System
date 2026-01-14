
@echo off
echo ===================================================
echo      Smart Agriculture System - Repair & Start
echo ===================================================

echo [1/4] Installing Backend Dependencies...
cd backend
call npm install
if %errorlevel% neq 0 (
    echo FAILED to install backend dependencies.
    pause
    exit /b
)

echo [2/4] Starting Backend Server...
start "Smart Agri Backend" cmd /k "npm start"

cd ..

echo [3/4] Installing Frontend Dependencies...
cd frontend
call npm install
if %errorlevel% neq 0 (
    echo FAILED to install frontend dependencies.
    pause
    exit /b
)

echo [4/4] Starting Frontend Server...
start "Smart Agri Frontend" cmd /k "npm run dev"

echo ===================================================
echo SYSTEMS STARTED!
echo Please wait about 10-15 seconds.
echo Then minimize these windows and check your browser.
echo URL: http://localhost:5173
echo ===================================================
pause
