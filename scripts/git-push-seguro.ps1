# Usa este script en lugar de "git push" directo
param(
  [string]$Mensaje = ""
)

$tracked = git ls-files node_modules 2>$null
if ($tracked) {
  Write-Host "ERROR: node_modules esta en Git. Ejecuta primero:" -ForegroundColor Red
  Write-Host "  git reset --hard origin/main" -ForegroundColor Yellow
  exit 1
}

$staged = git diff --cached --name-only
if ($staged -match '^node_modules/' -or $staged -match '^\.next/') {
  Write-Host "ERROR: Tienes node_modules o .next en staging." -ForegroundColor Red
  Write-Host "  git reset HEAD node_modules .next" -ForegroundColor Yellow
  exit 1
}

if ($Mensaje) {
  git add src package.json package-lock.json tsconfig.json next.config.ts postcss.config.mjs eslint.config.mjs vercel.json .vercelignore .gitignore public README.md scripts .githooks 2>$null
  git status --short
  git commit -m $Mensaje
}

git push origin main
if ($LASTEXITCODE -eq 0) {
  Write-Host "Push exitoso." -ForegroundColor Green
}
