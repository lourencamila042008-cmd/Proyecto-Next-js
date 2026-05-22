# Cómo subir cambios a GitHub (sin errores)

## El error que ves

```
File node_modules/@next/swc-win32-x64-msvc/... is 141.50 MB
exceeds GitHub's file size limit of 100.00 MB
```

**Causa:** hiciste `git add .` y eso incluyó la carpeta `node_modules`. Esa carpeta **nunca** debe ir a GitHub.

---

## Activar protección (hazlo una vez)

En PowerShell, dentro del proyecto:

```powershell
.\scripts\setup-git.ps1
```

A partir de ahí, Git **bloqueará** cualquier commit que intente incluir `node_modules`.

---

## Subir cambios correctamente

### Opción A — Script seguro (recomendado)

```powershell
.\scripts\git-push-seguro.ps1 -Mensaje "descripcion de tu cambio"
```

### Opción B — Manual

```powershell
# 1. Ver qué vas a subir (NO debe aparecer node_modules)
git status

# 2. Agregar SOLO archivos del proyecto
git add src package.json package-lock.json vercel.json public README.md .gitignore

# 3. Commit y push
git commit -m "tu mensaje"
git push
```

---

## NUNCA hagas esto

```powershell
git add .          # INCORRECTO - incluye node_modules
git add -A         # INCORRECTO - igual de peligroso
```

---

## Si ya falló el push

```powershell
git reset --hard origin/main
.\scripts\setup-git.ps1
```

Luego vuelve a hacer tus cambios y sube con el script seguro.

---

## Qué sí va en GitHub

- `src/` (código)
- `public/` (imágenes, robots.txt)
- `package.json` y `package-lock.json`
- `vercel.json`, `.gitignore`
- Archivos de configuración (tsconfig, next.config, etc.)

## Qué NO va

- `node_modules/` → se instala con `npm install`
- `.next/` → se genera con `npm run build`
