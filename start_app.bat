@echo off
echo Starting Smart Agriculture System...

:: Start Backend
start cmd /k "cd backend && npm run dev"

:: Start Frontend
start cmd /k "cd frontend && npm run dev"

echo.
echo Servers are starting in new windows...
echo Backend will be at: http://localhost:5000
echo Frontend will be at: http://localhost:5173
echo.
echo Please wait for "VITE vX.X.X  ready in X ms" in the frontend window.
pause
