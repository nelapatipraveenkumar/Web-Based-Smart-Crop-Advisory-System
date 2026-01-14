@echo off
echo ==============================================
echo   SMART AGRICULTURE SYSTEM (DIRECT MODE)
echo ==============================================

echo [1] Checking Port 3000...
netstat -ano | findstr :3000
if %errorlevel%==0 (
    echo Port 3000 is busy. Killing old process...
    taskkill /F /IM node.exe >nul 2>&1
)

echo.
echo [2] Starting Node.js Server...
cd backend
echo Running 'node server.js'...

:: Run server in this window to see errors
node server.js

echo.
echo ==============================================
echo SERVER STOPPED UNEXPECTEDLY
echo Please read the error message above.
echo ==============================================
pause
