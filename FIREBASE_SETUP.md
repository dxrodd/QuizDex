# Configurar cuentas Google y ranking global

1. Crea un proyecto en Firebase.
2. Añade una aplicación Web y copia su configuración en `firebase-config.js`.
3. En Authentication > Sign-in method, activa Google.
4. En Authentication > Settings > Authorized domains, añade `dxrodd.github.io` y tu dominio de pruebas si lo usas.
5. Activa Firestore Database.
6. Copia `firestore.rules` en las reglas de Firestore y publícalas.

La web sigue funcionando sin Firebase: leaderboard y nombre local continúan disponibles.
