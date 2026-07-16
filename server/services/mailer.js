import nodemailer from 'nodemailer'

export function createTransporter({ emailHost, emailPort, emailSecure, emailUser, emailPass }) {
  if (!emailUser || !emailPass) {
    throw new Error('Falta EMAIL_USER o EMAIL_PASS en la configuración del servidor.')
  }

  const transportConfig = {
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  }

  if (emailHost) {
    transportConfig.host = emailHost
    transportConfig.port = emailPort ? Number(emailPort) : 465
    transportConfig.secure = emailSecure === 'true' || emailSecure === true
  } else {
    transportConfig.service = 'gmail'
  }

  return nodemailer.createTransport(transportConfig)
}

export function buildContactMail({ nombre, correo, telefono, mensaje, ip }) {
  const date = new Date().toLocaleString('es-ES', { timeZone: 'America/Mexico_City' })

  return {
    subject: 'Nuevo mensaje desde Frapessaurio',
    text: `Nuevo mensaje desde la página de Frapessaurio\n\nNombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}\nMensaje: ${mensaje}\n\nFecha: ${date}\nIP: ${ip || 'No disponible'}`,
    html: `
      <h1>Nuevo mensaje desde Frapessaurio</h1>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Correo:</strong> ${correo}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Mensaje:</strong><br/>${mensaje.replace(/\n/g, '<br/>')}</p>
      <hr />
      <p><strong>Fecha:</strong> ${date}</p>
      <p><strong>IP:</strong> ${ip || 'No disponible'}</p>
    `,
  }
}
