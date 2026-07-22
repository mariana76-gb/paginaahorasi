import { Instagram, Facebook, MapPin, MessageCircle, Phone } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-[#071a22] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-[#A7E7E0]">Ajolotes MX</h3>
          <p className="max-w-md text-sm text-slate-300">
            Información dedicada al ajolote mexicano, su hábitat, sus secretos de regeneración y la conservación de su ecosistema.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-[#A7E7E0]">Contacto</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#83c9c2]" />
              ajolotes@informacion.org
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-[#83c9c2]" />
              Protejamos juntos el ajolote
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#83c9c2]" />
              Cuenca del Lago de Xochimilco, México
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-[#A7E7E0]">Síguenos</h4>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/10">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/10">
              <Facebook className="h-4 w-4" /> Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
        <p>© 2026 Ajolotes MX. Todos los derechos reservados.</p>
        <div className="mt-3 flex flex-wrap justify-center gap-4 text-slate-300">
          <a href="/aviso-de-privacidad" className="hover:text-[#83c9c2]">Aviso de privacidad</a>
          <a href="/terminos" className="hover:text-[#83c9c2]">Términos y condiciones</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
