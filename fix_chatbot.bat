@echo off
echo ==========================================
echo   FIXING CHATBOT & RESTARTING
echo ==========================================

echo [1] Applying Fixes...
echo Syntax error in server.js repaired.

echo [2] Restarting Server...
taskkill /F /IM node.exe >nul 2>&1
cd backend
start "Smart Agri Server" cmd /k "node server.js"

echo.
echo DONE. Please refresh and try asking the bot again.
pause
