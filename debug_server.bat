@echo off
echo ==========================================
echo DEBUG MODE - Backend Server
echo ==========================================

cd backend
echo Current Directory: %CD%

echo.
echo [1] Checking for node_modules...
if exist node_modules (
    echo node_modules FOUND.
) else (
    echo node_modules MISSING. Installing...
    call npm install
)

echo.
echo [2] Checking Database Config...
type .env

echo.
echo [3] Starting Server (node server.js)...
node server.js

echo.
echo ==========================================
echo SERVER CRASHED
echo If you see "Access denied", check your password in .env
echo ==========================================
pause
