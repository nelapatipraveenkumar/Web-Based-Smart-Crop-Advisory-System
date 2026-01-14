@echo off
echo ==============================================
echo   SMART AGRICULTURE SYSTEM (Unified Mode)
echo ==============================================
echo.
echo Starting Backend Server...
echo The application handles Frontend & Backend together.
echo.

cd backend
start "Smart Agri Server" cmd /k "npm start"

echo Server started in new window.
echo Waiting for initialization...
timeout /t 5

echo.
echo Opening Application in Browser...
start http://localhost:3000

echo.
echo DONE!
pause
