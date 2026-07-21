import { motion } from 'framer-motion'
import { FaLeaf, FaCoffee, FaCookieBite, FaStar } from 'react-icons/fa'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useState } from 'react'
import Loader from '../components/Loader'

const productCards = [
  { title: 'Frappes', description: 'Batidos cremosos con hielo, café y toppings naturales.', price: '$95', image: '/images/product-card.svg' },
  { title: 'Café Americano', description: 'Aroma intenso con cuerpo tostado para comenzar el día.', price: '$55', image: '/images/product-card.svg' },
  { title: 'Latte', description: 'Espuma sedosa y delicado sabor a café espresso.', price: '$75', image: '/images/product-card.svg' },
  { title: 'Capuccino', description: 'Espuma cremosa con notas de cacao y canela.', price: '$80', image: '/images/product-card.svg' },
  { title: 'Chocolate', description: 'Chocolate caliente con malvaviscos y encanto relajante.', price: '$70', image: '/images/product-card.svg' },
  { title: 'Té', description: 'Selección de tés herbales para calmar y reconfortar.', price: '$60', image: '/images/product-card.svg' },
  { title: 'Pan artesanal', description: 'Recién horneado con ingredientes naturales y sabor auténtico.', price: '$40', image: '/images/product-card.svg' },
  { title: 'Postres', description: 'Caprichos dulces para compartir entre amigos.', price: '$65', image: '/images/product-card.svg' },
]

const testimonials = [
  { name: 'Mariana', text: 'Un lugar mágico con café delicioso y una vibra natural. ¡Me encanta el estilo dinosaurio!', stars: 5, photo: '/images/testimonial-avatar.svg' },
  { name: 'Carlos', text: 'Los frappes son increíbles y el ambiente es muy acogedor. Recomendado para cualquier amante del café.', stars: 5, photo: '/images/testimonial-avatar.svg' },
  { name: 'Jessica', text: 'Servicio impecable, sabores auténticos y diseño muy cuidado. Ideal para trabajar o relajarse.', stars: 4, photo: '/images/testimonial-avatar.svg' },
]

const galleryImages = [
  '/images/gallery-coffee-1.svg',
  '/images/gallery-coffee-2.svg',
  '/images/gallery-coffee-3.svg',
  '/images/gallery-coffee-4.svg',
  '/images/gallery-coffee-5.svg',
  '/images/gallery-coffee-6.svg',
  '/images/gallery-coffee-1.svg',
  '/images/gallery-coffee-3.svg',
]

function HomePage() {
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState(null)
  const [formData, setFormData] = useState({ nombre: '', correo: '', telefono: '', mensaje: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus(null)

    const { nombre, correo, telefono, mensaje } = formData
    if (!nombre || !correo || !telefono || !mensaje) {
      setStatus({ type: 'error', message: 'Por favor completa todos los campos.' })
      return
    }

    setSubmitting(true)

    try {
      const endpoint = '/.netlify/functions/contact'

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const text = await response.text()
      let result
      try {
        result = JSON.parse(text)
      } catch (parseError) {
        throw new Error(`Respuesta inesperada del servidor: ${text.slice(0, 200)}`)
      }

      if (!response.ok) {
        throw new Error(result.error || 'Ocurrió un error al enviar el mensaje.')
      }

      setStatus({ type: 'success', message: result.message })
      setFormData({ nombre: '', correo: '', telefono: '', mensaje: '' })
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#10170F] text-white">
      <section id="inicio" className="relative bg-cover bg-center px-4 pb-20 pt-32 text-white" style={{ backgroundImage: 'url(/images/hero-bg.svg)' }}>
        <div className="absolute inset-0 bg-[#0f1b0f]/80" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 py-24 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl rounded-[2rem] border border-white/10 bg-white/10 p-10 backdrop-blur-xl shadow-2xl">
            <span className="inline-flex rounded-full bg-beige/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.35em] text-beige">Cafetería artesanal</span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-6xl">Frapessaurio: café premium con espíritu dinosaurio.</h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-200">Disfruta de frappes cremosos, desayunos artesanales y un ambiente cálido inspirado en la naturaleza.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#productos" className="inline-flex items-center justify-center rounded-full bg-[#A78A59] px-8 py-4 text-sm font-semibold text-[#10170F] transition hover:bg-[#c79a68]">Conoce nuestro menú</a>
              <a href="#contacto" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/20">Contáctanos</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="nosotros" className="bg-[#121B13] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-sm uppercase tracking-[0.3em] text-beige">Sobre nosotros</span>
              <h2 className="mt-4 text-4xl font-bold text-white">La historia detrás de Frapessaurio</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">Frapessaurio nace de la pasión por el café artesanal y el deseo de crear un espacio que sienta como hogar. Aquí combinamos ingredientes naturales, recetas cuidadas y una atmósfera inspirada en la naturaleza y los dinosaurios amistosos.</p>
              <p className="mt-4 text-lg leading-8 text-slate-300">Cada bebida está diseñada para ofrecer una experiencia cálida, reconfortante y con un toque de aventura. Nuestro objetivo es que cada cliente se sienta bienvenido y conectado con la esencia del lugar.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#202b20]/90 shadow-2xl">
              <img src="/images/about-cafe.svg" alt="Imagen de cafetería artesanal" className="h-full w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="productos" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-beige">Nuestros favoritos</span>
            <h2 className="mt-4 text-4xl font-bold text-white">Productos</h2>
            <p className="mt-3 max-w-2xl mx-auto text-slate-300">Descubre la magia de nuestros frappes, cafés y bocados artisanales que despiertan tus sentidos.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {productCards.map((product) => (
              <motion.article key={product.title} whileHover={{ y: -10 }} className="rounded-[2rem] border border-white/10 bg-[#1D2920]/90 p-5 shadow-2xl transition duration-300">
                <img src={product.image} alt={product.title} className="h-56 w-full rounded-3xl object-cover" />
                <div className="mt-6">
                  <h3 className="text-2xl font-semibold text-white">{product.title}</h3>
                  <p className="mt-3 text-slate-300">{product.description}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-lg font-bold text-beige">{product.price}</span>
                    <button className="rounded-full bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20">Ver</button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#162115] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-[#1f2a20]/90 p-10 shadow-2xl">
              <span className="text-sm uppercase tracking-[0.35em] text-beige">Nuestra misión</span>
              <h3 className="mt-4 text-3xl font-bold text-white">Crear experiencias memorables</h3>
              <p className="mt-4 text-slate-300">Inspirar a cada cliente con bebidas artesanales, sabores naturales y un ambiente acogedor donde la comunidad se encuentra y comparte.</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-[#1f2a20]/90 p-10 shadow-2xl">
              <span className="text-sm uppercase tracking-[0.35em] text-beige">Nuestra visión</span>
              <h3 className="mt-4 text-3xl font-bold text-white">Ser referencia de cafeterías artesanales</h3>
              <p className="mt-4 text-slate-300">Ser un destino favorito que combine diseño moderno, calidad premium y una identidad única inspirada en dinosaurios y naturaleza.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-beige">Nuestros clientes</span>
            <h2 className="mt-4 text-4xl font-bold text-white">Marcas que confían en nosotros</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {['DinoTec', 'Verde Studio', 'Café Nativo', 'Jardín Urbano'].map((brand) => (
              <div key={brand} className="rounded-[2rem] border border-white/10 bg-[#1f2a20]/90 p-8 text-center shadow-2xl">
                <FaLeaf className="mx-auto h-12 w-12 text-beige" />
                <h3 className="mt-6 text-xl font-semibold text-white">{brand}</h3>
                <p className="mt-3 text-slate-300">Colaboración en eventos y catering de café premium.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="bg-[#10170F] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-beige">Galería</span>
            <h2 className="mt-4 text-4xl font-bold text-white">Un vistazo a nuestro espacio</h2>
          </div>
          <Swiper modules={[Autoplay, Pagination, Navigation]} spaceBetween={20} slidesPerView={1} navigation pagination={{ clickable: true }} autoplay={{ delay: 3500 }} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="rounded-[2rem] px-4 pb-8">
            {galleryImages.map((src, index) => (
              <SwiperSlide key={index} className="rounded-[2rem] overflow-hidden">
                <img src={src} alt={`Galería ${index + 1}`} className="h-96 w-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section id="testimonios" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-beige">Testimonios</span>
            <h2 className="mt-4 text-4xl font-bold text-white">Lo que dicen nuestros visitantes</h2>
          </div>
          <Swiper modules={[Autoplay, Pagination]} spaceBetween={24} slidesPerView={1} pagination={{ clickable: true }} autoplay={{ delay: 4000 }} className="rounded-[2rem] bg-[#1e2a20]/80 p-8 shadow-2xl">
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name} className="rounded-[2rem]">
                <div className="grid gap-8 lg:grid-cols-[140px_minmax(0,1fr)] lg:items-center">
                  <img src={testimonial.photo} alt={testimonial.name} className="h-36 w-36 rounded-full object-cover" />
                  <div>
                    <div className="flex items-center gap-2 text-beige">
                      {Array.from({ length: testimonial.stars }).map((_, index) => (
                        <FaStar key={index} />
                      ))}
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold text-white">{testimonial.name}</h3>
                    <p className="mt-3 text-slate-300">{testimonial.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section id="contacto" className="bg-[#152012] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="rounded-[2rem] border border-white/10 bg-[#1f2a20]/90 p-10 shadow-2xl">
              <span className="text-sm uppercase tracking-[0.35em] text-beige">Contáctanos</span>
              <h2 className="mt-4 text-4xl font-bold text-white">¿Listo para tu próxima bebida?</h2>
              <p className="mt-4 text-slate-300">Escribe tu mensaje y te responderemos pronto. En Frapessaurio hacemos envíos rápidos y reservamos tu mesa con gusto.</p>
              <div className="mt-10 space-y-6 text-slate-300">
                <div>
                  <h3 className="text-lg font-semibold text-white">Dirección</h3>
                  <p>Calle Dino 123, Ciudad Verde</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Horario</h3>
                  <table className="mt-3 w-full text-left text-sm text-slate-300">
                    <tbody>
                      {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'].map((day) => (
                        <tr key={day} className="border-b border-white/10">
                          <td className="py-3 font-medium text-white">{day}</td>
                          <td className="py-3">{day === 'Viernes' ? '8:00 - 22:00' : day === 'Sábado' ? '9:00 - 22:00' : day === 'Domingo' ? '9:00 - 18:00' : '8:00 - 20:00'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="rounded-[2rem] border border-white/10 bg-[#1f2a20]/90 p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <label className="block">
                  <span className="text-sm font-medium text-white">Nombre</span>
                  <input name="nombre" value={formData.nombre} onChange={handleChange} type="text" required aria-label="Nombre" className="mt-2 w-full rounded-3xl border border-white/10 bg-[#121a12] px-4 py-3 text-white outline-none transition focus:border-beige focus:ring-2 focus:ring-beige/30" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-white">Correo</span>
                  <input name="correo" value={formData.correo} onChange={handleChange} type="email" required aria-label="Correo electrónico" className="mt-2 w-full rounded-3xl border border-white/10 bg-[#121a12] px-4 py-3 text-white outline-none transition focus:border-beige focus:ring-2 focus:ring-beige/30" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-white">Teléfono</span>
                  <input name="telefono" value={formData.telefono} onChange={handleChange} type="tel" required aria-label="Teléfono" className="mt-2 w-full rounded-3xl border border-white/10 bg-[#121a12] px-4 py-3 text-white outline-none transition focus:border-beige focus:ring-2 focus:ring-beige/30" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-white">Mensaje</span>
                  <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} required rows="5" aria-label="Mensaje" className="mt-2 w-full rounded-3xl border border-white/10 bg-[#121a12] px-4 py-3 text-white outline-none transition focus:border-beige focus:ring-2 focus:ring-beige/30"></textarea>
                </label>
                {status && (
                  <p className={`rounded-3xl px-4 py-3 text-sm ${status.type === 'success' ? 'bg-emerald-500/15 text-emerald-200' : 'bg-rose-500/15 text-rose-200'}`}>{status.message}</p>
                )}
                <button type="submit" disabled={submitting} className="inline-flex w-full items-center justify-center rounded-full bg-beige px-6 py-4 text-sm font-semibold text-[#10170F] transition hover:bg-[#d4b47a] disabled:cursor-not-allowed disabled:bg-white/20">
                  {submitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b140c] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="text-sm uppercase tracking-[0.35em] text-beige">Multimedia</span>
              <h2 className="mt-4 text-4xl font-bold text-white">Vive la experiencia Frapessaurio</h2>
              <p className="mt-4 max-w-2xl text-slate-300">Conoce nuestras especialidades, ambiente y más en este video que captura la esencia de nuestra cafetería.</p>
              <ol className="mt-8 list-decimal space-y-3 pl-5 text-slate-300">
                <li>Selecciona granos de calidad.</li>
                <li>Molido fresco y preciso.</li>
                <li>Preparación cuidadosa con técnica artesanal.</li>
                <li>Servir con cariño y detalle.</li>
              </ol>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#1f2a20]/90 shadow-2xl">
              <iframe className="h-80 w-full" src="https://www.youtube.com/embed/eG0p9TS1zXg" title="Video promocional Frapessaurio" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#121B13] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <span className="text-sm uppercase tracking-[0.35em] text-beige">Mapa</span>
              <h2 className="mt-4 text-4xl font-bold text-white">Encuéntranos fácilmente</h2>
              <p className="mt-4 max-w-2xl text-slate-300">Visítanos en nuestro local y disfruta de una atmósfera verde, cómoda y llena de aroma a café artesanal.</p>
              <ul className="mt-8 space-y-3 text-slate-300">
                <li className="flex items-start gap-3"><span className="mt-1 inline-flex h-2 w-2 rounded-full bg-beige" />Café artesanal con ingredientes locales.</li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-flex h-2 w-2 rounded-full bg-beige" />Ambiente cómodo y moderno.</li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-flex h-2 w-2 rounded-full bg-beige" />Perfecto para reuniones y trabajo remoto.</li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#1f2a20]/90 shadow-2xl">
              <iframe title="Mapa de Frapessaurio" className="h-96 w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.52064455058!2d-99.18661568467658!3d19.407487586882476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff37ef05db4b%3A0x59a05cedbdb6e0f5!2sMuseo%20Nacional%20de%20Antropolog%C3%ADa!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx" allowFullScreen loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
