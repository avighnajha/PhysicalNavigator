# API configuration

Copy `.env.example` to `.env` in the Expo app directory and set newly rotated keys. Restart Expo after changing them. Never commit `.env`.

Expo EXPO_PUBLIC values are included in the app bundle and can be extracted. Apply Google API restrictions and platform restrictions suitable for each API and separate Maps and Firebase keys. Use a backend proxy for web-service APIs that cannot be safely restricted for the mobile client. Environment variables remove credentials from source control; they do not make client keys secret.

Rotate or revoke every previously committed key. Old commits still contain the exposed values until a separately coordinated history cleanup.
