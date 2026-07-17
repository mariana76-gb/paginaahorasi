# Frapessaurio

Cafetería institucional con frontend en React + Vite + Tailwind CSS y backend serverless en Netlify Functions.

## Estructura del proyecto

- `client/`: Aplicación frontend y funciones de Netlify

## Configuración del frontend

1. Instala dependencias:

```bash
cd client
npm install
```

2. Construye la aplicación para producción:

```bash
npm run build
```

3. Publica en Netlify usando la carpeta `client/dist`.

## Despliegue en Netlify

- `publish` debe apuntar a `client/dist`
- `functions` debe apuntar a `client/netlify/functions`
- Asegúrate de configurar estas variables en Netlify:
  - `SMTP_HOST`
  - `SMTP_PORT`
  - `SMTP_SECURE`
  - `SMTP_USER`
  - `SMTP_PASS`
  - `SMTP_FROM`
  - `CONTACT_TO`

## API de contacto

La función está disponible en:

`/.netlify/functions/contact`

El formulario envía un POST JSON con:

```json
{
  "nombre": "Tu nombre",
  "correo": "correo@ejemplo.com",
  "telefono": "1234567890",
  "mensaje": "Texto del mensaje"
}
```

## Notas

- No se requiere backend local.
- El correo se envía usando `nodemailer` dentro de la función Netlify.
- El SPA usa un catch-all redirect en `netlify.toml` para que todas las rutas funcionen en el frontend.
