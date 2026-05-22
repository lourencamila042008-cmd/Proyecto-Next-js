# Ejecuta una sola vez: activa el hook que bloquea node_modules
git config core.hooksPath .githooks
Write-Host "Hook activado. node_modules y .next ya no podran commitearse." -ForegroundColor Green
