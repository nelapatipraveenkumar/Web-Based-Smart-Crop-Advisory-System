@echo off
echo ==========================================
echo   FIXING PEST DETECTION
echo ==========================================

echo [1] Creating 'uploads' folder...
if not exist "backend\uploads" mkdir "backend\uploads"

echo [2] Installing missing libraries...
cd backend
call npm install multer
cd ..

echo [3] Force Restarting Server...
taskkill /F /IM node.exe >nul 2>&1
cd backend
start "Smart Agri Server" cmd /k "node server.js"

echo.
echo DONE. Please refresh your browser and try again.
pause
