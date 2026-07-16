# Frapessaurio

Cafetería institucional con frontend en React + Vite + Tailwind CSS y backend en Node.js + Express + Nodemailer.

## Estructura del proyecto

- `client/`: Aplicación frontend
- `server/`: API backend

## Configuración del backend

1. Copia `.env.example` a `.env`
2. Completa las variables:

```
PORT=5000
EMAIL_USER=tu-correo@gmail.com
EMAIL_PASS=tu-app-password-de-gmail
EMAIL_TO=arielgalvanjuarez14@gmail.com
```

> Usa una contraseña de aplicación de Gmail o un SMTP válido. Si usas Gmail, habilita la autenticación en dos pasos y crea una contraseña de aplicación.

3. Instala dependencias y ejecuta el servidor:

```bash
cd server
npm install
npm run dev
```

## Configuración del frontend

1. Instala dependencias:

```bash
cd client
npm install
```

2. Inicia la aplicación:

```bash
npm run dev
```

## Despliegue

- Frontend: Netlify o Vercel
- Backend: Render, Railway o Heroku

## API de contacto

`POST http://localhost:5000/api/contact`

Body JSON:

```json
{
  "nombre": "Tu nombre",
  "correo": "correo@ejemplo.com",
  "telefono": "1234567890",
  "mensaje": "Texto del mensaje"
}
```

## Notas

- El formulario envía un correo a la dirección especificada en `.env`
- No se utiliza base de datos
- Las rutas independientes son:
  - `/aviso-de-privacidad`
  - `/terminos`
