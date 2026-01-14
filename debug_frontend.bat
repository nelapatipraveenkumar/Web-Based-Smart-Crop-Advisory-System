@echo off
echo ==========================================
echo DEBUG MODE - Frontend Start
echo ==========================================

cd frontend
echo Current Directory: %CD%

echo.
echo [1] Checking for node_modules...
if exist node_modules (
    echo node_modules FOUND.
) else (
    echo node_modules MISSING.
    echo Please run clean_frontend.bat first.
    pause
    exit /b
)

echo.
echo [2] Checking for Vite...
if exist node_modules\.bin\vite.cmd (
    echo Vite binary FOUND.
) else (
    echo Vite binary MISSING.
    echo Installation is incomplete.
    pause
    exit /b
)

echo.
echo [3] Attempting to start server...
call npm run dev

echo.
echo ==========================================
echo SERVER CRASHED OR STOPPED
echo Read the error message above.
echo ==========================================
pause
