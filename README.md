# Pokémon Quiz — GitHub Pages

## Publicar

1. Crea un repositorio público en GitHub, por ejemplo `pokemon-quiz`.
2. Sube TODO el contenido de esta carpeta a la raíz.
3. GitHub → **Settings → Pages**.
4. En **Build and deployment**:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. Guarda y espera a la publicación.

## Conectar Versus

Edita `versus-config.js`:

`wss://TU-SERVIDOR-PVP.onrender.com/ws`

y sustitúyelo por la URL real de tu servidor Render.

Ejemplo:

`wss://pokemon-quiz-versus.onrender.com/ws`

Después haz commit/push de `versus-config.js`.

GitHub Pages sirve la PWA por HTTPS; por eso el Versus usa `wss://`.

## Importante

GitHub Pages es alojamiento estático y no ejecuta `server.js`. El backend Versus debe ejecutarse en un servicio Node.js independiente.
