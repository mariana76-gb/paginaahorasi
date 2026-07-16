import { Github, Instagram, Facebook, MapPin, MessageCircle, Phone } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-[#22281F] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-cream">Frapessaurio</h3>
          <p className="max-w-md text-sm text-slate-300">
            Café artesanal, momentos cálidos y dinosaurios amigables. Visítanos para disfrutar de sabores únicos y una experiencia acogedora.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-cream">Contacto</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-beige" />
              +52 55 1234 5678
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-beige" />
              hola@frapessaurio.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-beige" />
              Calle Dino 123, Ciudad Verde
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-cream">Sigue nuestra aventura</h4>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/10">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/10">
              <Facebook className="h-4 w-4" /> Facebook
            </a>
            <a href="https://www.google.com/maps" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/10">
              <MapPin className="h-4 w-4" /> Maps
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
        <p>© 2026 Frapessaurio. Todos los derechos reservados.</p>
        <div className="mt-3 flex flex-wrap justify-center gap-4 text-slate-300">
          <a href="/aviso-de-privacidad" className="hover:text-beige">Aviso de privacidad</a>
          <a href="/terminos" className="hover:text-beige">Términos y condiciones</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
