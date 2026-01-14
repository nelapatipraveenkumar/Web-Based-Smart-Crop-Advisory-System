@echo off
echo ===================================================
echo      Smart Agriculture - Frontend Cleanup
echo ===================================================

cd frontend

echo [1/3] Removing corrupted files...
if exist node_modules (
    rmdir /s /q node_modules
)
if exist package-lock.json (
    del package-lock.json
)

echo [2/3] Re-installing dependencies (this may take a few minutes)...
call npm install
if %errorlevel% neq 0 (
    echo.
    echo INSTALLATION FAILED!
    echo Please check your internet connection and try again.
    pause
    exit /b
)

echo [3/3] installation Complete!
echo.
echo You can now run "start_app.bat" to launch the system.
pause
