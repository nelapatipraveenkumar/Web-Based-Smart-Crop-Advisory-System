s@echo off
echo ==============================================
echo   SMART AGRICULTURE SYSTEM (PORT 3000)
echo ==============================================
echo.
echo [1] Stopping any old Node processes...
taskkill /F /IM node.exe >nul 2>&1

echo [2] Starting Backend Server on Port 3000...
cd backend
start "Smart Agri Server" cmd /k "npm start"

echo Server window opened.
echo Waiting 5 seconds for startup...
timeout /t 5

echo.
echo [3] Opening Application...
start http://localhost:3000

echo.
echo DONE!
pause
