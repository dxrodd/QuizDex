# Subir Pokémon Quiz a GitHub Pages

1. Crea un repositorio llamado `pokemon-quiz` (o el nombre que quieras).
2. Sube TODO el contenido de esta carpeta a la raíz del repositorio.
3. GitHub → Settings → Pages.
4. Build and deployment → Source: `Deploy from a branch`.
5. Branch: `main` y carpeta `/ (root)`.
6. Guarda y espera a que GitHub publique la web.

## Versus online

Antes de publicar, abre `versus-config.js` y cambia:

`wss://TU-SERVIDOR-PVP.onrender.com/ws`

por la URL WebSocket de tu servidor, por ejemplo:

`wss://pokemon-quiz-versus.onrender.com/ws`

Haz commit del cambio.

GitHub Pages aloja la PWA; el servidor Versus se ejecuta en el repositorio separado.
