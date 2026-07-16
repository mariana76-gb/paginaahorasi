import { createTransporter, buildContactMail } from '../services/mailer.js'

export async function sendContactEmail(req, res) {
  try {
    const { nombre, correo, telefono, mensaje } = req.body

    if (!nombre || !correo || !telefono || !mensaje) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios.' })
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
      return res.status(500).json({ error: 'La configuración de correo no está completa. Verifica EMAIL_USER, EMAIL_PASS y EMAIL_TO en .env.' })
    }

    const transporter = createTransporter({
      emailHost: process.env.EMAIL_HOST,
      emailPort: process.env.EMAIL_PORT,
      emailSecure: process.env.EMAIL_SECURE,
      emailUser: process.env.EMAIL_USER,
      emailPass: process.env.EMAIL_PASS,
    })

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      replyTo: correo,
      ...buildContactMail({
        nombre,
        correo,
        telefono,
        mensaje,
        ip: req.ip,
      }),
    }

    await transporter.sendMail(mailOptions)

    return res.status(200).json({ message: 'Correo enviado correctamente.' })
  } catch (error) {
    console.error('Error sending email:', error)
    return res.status(500).json({ error: 'No se pudo enviar el correo. Intenta de nuevo más tarde.' })
  }
}
