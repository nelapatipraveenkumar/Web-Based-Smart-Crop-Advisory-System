@echo off
echo ==========================================
echo      HARD RESTART - Agriculture Server
echo ==========================================
echo.
echo [1] Killing ALL Node.js processes...
taskkill /F /IM node.exe

echo.
echo [2] Restarting Server on Port 3000...
cd backend
start "Smart Agri Server" cmd /k "node server.js"

echo.
echo [3] Waiting for startup...
timeout /t 3

echo.
echo done. Please refresh your browser.
pause
