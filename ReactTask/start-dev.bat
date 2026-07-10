@echo off
cd /d "%~dp0"
echo Starting ReactTask dev server...
echo.
call npm.cmd run dev
echo.
echo Dev server stopped. If there was an error, read the message above.
pause
