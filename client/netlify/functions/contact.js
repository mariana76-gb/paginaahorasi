import nodemailer from 'nodemailer'

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) }
  }

  try {
    const data = JSON.parse(event.body || '{}')
    const { nombre, correo, telefono, mensaje } = data

    if (!nombre || !correo || !telefono || !mensaje) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Faltan campos requeridos.' }) }
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO,
      subject: `Nuevo mensaje de ${nombre} - Frapessaurio`,
      text: `Nombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}\n\nMensaje:\n${mensaje}`,
    }

    await transporter.sendMail(mailOptions)

    return { statusCode: 200, body: JSON.stringify({ message: 'Mensaje enviado correctamente.' }) }
  } catch (err) {
    console.error('Error sending mail:', err)
    return { statusCode: 500, body: JSON.stringify({ error: 'Error al enviar el correo.' }) }
  }
}
