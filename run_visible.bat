@echo off
echo ==========================================
echo   FINAL FORCE RESTART
echo ==========================================

echo [1] Stopping Server...
taskkill /F /IM node.exe >nul 2>&1

echo [2] Cleaning Port 3000...
for /f "tokens=5" %%a in ('netstat -aon ^| find ":3000" ^| find "LISTENING"') do taskkill /f /pid %%a >nul 2>&1

echo [3] Starting Server (Visible Mode)...
cd backend
echo Running node server.js...
node server.js

pause
