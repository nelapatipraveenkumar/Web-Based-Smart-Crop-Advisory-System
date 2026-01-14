@echo off
echo ==========================================
echo   SMART AGRICULTURE SYSTEM (FINAL)
echo ==========================================

echo [1] Applying Updates (OpenAI + Fixes)...
taskkill /F /IM node.exe >nul 2>&1

echo [2] Starting Server with AI...
cd backend
start "Smart Agri Server" cmd /k "node server.js"

echo.
echo Server Restarted.
echo IMPORTANT: If you want Real AI, edit backend/.env and add your API Key.
echo.
pause
