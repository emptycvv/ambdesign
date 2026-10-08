@echo off
title AMB Design - Marcenaria Sob Medida
echo ===================================================
echo   Iniciando AMB Design - Marcenaria Sob Medida
echo ===================================================
echo.

if not exist node_modules (
    echo [INFO] Instalando dependencias do projeto...
    call npm install
    echo.
)

echo [INFO] Iniciando servidor de desenvolvimento Vite...
echo [INFO] Acesse no navegador: http://localhost:3000
echo.

call npm run dev -- --open --port 3000
pause
