import { Instagram, Facebook, MapPin, MessageCircle, Phone } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-pastelWhite px-4 py-12 text-pastelText sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-pastelGreen">Ajolotes MX</h3>
          <p className="max-w-md text-sm text-pastelText/75">
            Información dedicada al ajolote mexicano, su hábitat, sus secretos de regeneración y la conservación de su ecosistema.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-pastelGreen">Contacto</h4>
          <ul className="space-y-3 text-sm text-pastelText/75">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-pastelGreen" />
              ajolotes@informacion.org
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-pastelGreen" />
              Protejamos juntos el ajolote
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-pastelGreen" />
              Cuenca del Lago de Xochimilco, México
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-pastelGreen">Síguenos</h4>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.instagram.com/tequio.run?igsh=MWt3YXZhMXZ5anU0cA%3D%3D&wa_status_inline=true" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-pastelGreen/10 px-4 py-2 text-sm text-pastelText transition hover:bg-pastelGreen/15">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <a href="https://www.facebook.com/santuarioajolote?mibextid=wwXIfr&mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-pastelGreen/10 px-4 py-2 text-sm text-pastelText transition hover:bg-pastelGreen/15">
              <Facebook className="h-4 w-4" /> Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-pastelGreen/20 pt-6 text-center text-sm text-pastelText/65">
        <p>© 2026 Ajolotes MX. Todos los derechos reservados.</p>
        <div className="mt-3 flex flex-wrap justify-center gap-4 text-pastelText/75">
          <a href="/aviso-de-privacidad" className="hover:text-pastelGreen">Aviso de privacidad</a>
          <a href="/terminos" className="hover:text-pastelGreen">Términos y condiciones</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
