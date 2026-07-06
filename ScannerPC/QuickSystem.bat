@echo off
title Monitor de Hardware
color 0A

console.log("=================================");
console.log("      QUICK SYSTEM DIAGNOSTIC");
console.log("=================================\n");
echo.

cd /d "%~dp0"

node QuickSystem.js

pause