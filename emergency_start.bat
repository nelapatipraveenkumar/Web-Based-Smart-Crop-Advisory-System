@echo off
echo ==========================================
echo EMERGENCY START - Smart Agriculture
echo ==========================================

cd frontend

echo [1] forcing install of vite...
call npm install vite --save-dev

echo.
echo [2] Starting with npx (internet required)...
call npx vite --force

pause
