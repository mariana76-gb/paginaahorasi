import { motion } from 'framer-motion'
import { FaFish, FaLeaf, FaWater, FaStar } from 'react-icons/fa'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useState } from 'react'

const factCards = [
  {
    title: 'Regeneración única',
    description: 'Los ajolotes pueden regenerar extremidades, cola e incluso partes del corazón y cerebro.',
    image: '/images/ajolote-facts-1.svg',
  },
  {
    title: 'Son neotenicos',
    description: 'Conservan sus branquias externas y rasgos juveniles durante toda su vida adulta.',
    image: '/images/ajolote-facts-2.svg',
  },
  {
    title: 'Viven en Xochimilco',
    description: 'Este anfibio endémico habita los canales y chinampas de la cuenca del Valle de México.',
    image: '/images/ajolote-facts-3.svg',
  },
]

const habitatItems = [
  {
    icon: 'water',
    title: 'Agua limpia',
    description: 'Sus cuerpos dependen de canales frescos y bien oxigenados.',
  },
  {
    icon: 'leaf',
    title: 'Vegetación nativa',
    description: 'Los ajolotes encuentran refugio y alimento en plantas acuáticas locales.',
  },
  {
    icon: 'fish',
    title: 'Comunidad frágil',
    description: 'La conservación del área protege a muchas especies aliadas del ajolote.',
  },
]

const testimonials = [
  {
    name: 'Lucía',
    text: 'Aprendí muchísimo sobre el ajolote y ahora comprendo por qué es tan importante cuidarlo.',
    stars: 5,
  },
  {
    name: 'Diego',
    text: 'El diseño es fresco y la información es clara. Me encantó la sección de regeneración.',
    stars: 5,
  },
  {
    name: 'Ana',
    text: 'Un sitio muy bonito para conocer más sobre este animal mexicano tan especial.',
    stars: 4,
  },
]

function HomePage() {
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState(null)
  const [formData, setFormData] = useState({ nombre: '', correo: '', mensaje: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus(null)

    const { nombre, correo, mensaje } = formData
    if (!nombre || !correo || !mensaje) {
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
      setFormData({ nombre: '', correo: '', mensaje: '' })
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    } finally {
      setSubmitting(false)
    }
  }

  const renderIcon = (icon) => {
    if (icon === 'water') return <FaWater className="h-6 w-6 text-pastelGreen" />
    if (icon === 'leaf') return <FaLeaf className="h-6 w-6 text-pastelGreen" />
    return <FaFish className="h-6 w-6 text-pastelGreen" />
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-pastelSoft text-pastelText">
      <section id="inicio" className="relative overflow-hidden px-4 pb-20 pt-32 text-pastelText sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,234,208,0.18),_transparent_45%)]" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-8">
            <span className="inline-flex rounded-full bg-pastelGreen/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-pastelGreen">Guía del ajolote</span>
            <h1 className="text-4xl font-extrabold leading-tight text-pastelText sm:text-6xl">Conoce al ajolote mexicano y por qué merece protección.</h1>
            <p className="max-w-xl text-lg leading-8 text-pastelText/80">Explora sus increíbles capacidades de regeneración, su hábitat natural y las acciones que podemos tomar para protegerlo. Una página creada para celebrar y aprender sobre este anfibio emblemático.</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#datos" className="inline-flex items-center justify-center rounded-full bg-pastelGreen px-8 py-4 text-sm font-semibold text-pastelWhite transition hover:bg-pastelGreen/90">Ver datos</a>
              <a href="#contacto" className="inline-flex items-center justify-center rounded-full border border-pastelGreen/40 bg-pastelWhite/70 px-8 py-4 text-sm font-semibold text-pastelText transition hover:bg-pastelPink/60">Ayuda al ajolote</a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-2xl rounded-[2rem] border border-pastelGreen/20 bg-pastelWhite p-4 shadow-soft backdrop-blur-xl lg:p-6">
            <img src="/images/ajolote-hero.svg" alt="Ilustración de ajolote" className="h-full w-full rounded-[1.75rem] object-cover" />
          </div>
        </div>
      </section>

      <section id="nosotros" className="bg-pastelWhite/80 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-sm uppercase tracking-[0.35em] text-pastelGreen">Sobre el ajolote</span>
              <h2 className="mt-4 text-4xl font-bold text-pastelText">¿Qué hace al ajolote tan especial?</h2>
              <p className="mt-6 text-lg leading-8 text-pastelText/75">El ajolote mexicano es un anfibio neoténico que permanece en estado larvario durante toda su vida y conserva branquias externas. Es famoso por su capacidad de regenerar miembros completos y órganos internos.</p>
              <p className="mt-4 text-lg leading-8 text-pastelText/75">Originario de la cuenca de Xochimilco, su supervivencia está en peligro debido a la pérdida de hábitat, especies invasoras y contaminación. Conocerlo es el primer paso para protegerlo.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="rounded-[2rem] border border-pastelGreen/20 bg-pastelWhite p-8 shadow-soft">
              <div className="space-y-4 text-pastelText">
                <div className="rounded-3xl bg-pastelWhite p-6">
                  <h3 className="text-2xl font-semibold text-pastelText">Regeneración</h3>
                  <p className="mt-3 text-pastelText/75">El ajolote puede regenerar extremidades, médula espinal, corazón y partes del cerebro.</p>
                </div>
                <div className="rounded-3xl bg-pastelWhite p-6">
                  <h3 className="text-2xl font-semibold text-pastelText">Endémico</h3>
                  <p className="mt-3 text-pastelText/75">Solo existe naturalmente en los canales de Xochimilco y algunos lagos cercanos.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="datos" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-pastelGreen">Datos curiosos</span>
            <h2 className="mt-4 text-4xl font-bold text-pastelText">Lo que debes saber</h2>
            <p className="mx-auto mt-3 max-w-2xl text-pastelText/75">Tres razones por las que el ajolote es un animal asombroso y vulnerable.</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {factCards.map((fact) => (
              <motion.article key={fact.title} whileHover={{ y: -10 }} className="rounded-[2rem] border border-pastelGreen/20 bg-pastelWhite p-8 shadow-soft transition duration-300">
                <img src={fact.image} alt={fact.title} className="h-64 w-full rounded-[1.5rem] object-cover" />
                <div className="mt-8 space-y-4">
                  <h3 className="text-2xl font-semibold text-pastelText">{fact.title}</h3>
                  <p className="text-pastelText/75">{fact.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="habitat" className="bg-pastelWhite/80 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="text-sm uppercase tracking-[0.35em] text-pastelGreen">Hábitat</span>
              <h2 className="mt-4 text-4xl font-bold text-pastelText">El hogar del ajolote</h2>
              <p className="mt-4 max-w-2xl text-pastelText/75">Los canales de Xochimilco y las chinampas forman un ecosistema acuático frágil. Mantenerlos limpios y libres de especies invasoras es clave para que los ajolotes sobrevivan.</p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {habitatItems.map((item) => (
                  <div key={item.title} className="rounded-[2rem] border border-pastelGreen/20 bg-pastelWhite p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pastelGreen/20">{renderIcon(item.icon)}</div>
                    <h3 className="mt-5 text-xl font-semibold text-pastelText">{item.title}</h3>
                    <p className="mt-3 text-pastelText/75">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-pastelGreen/20 bg-pastelWhite p-8 shadow-soft">
              <img src="/images/ajolote-facts-2.svg" alt="Hábitat del ajolote" className="h-full w-full rounded-[1.5rem] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="galeria" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-pastelGreen">Galería</span>
            <h2 className="mt-4 text-4xl font-bold text-pastelText">Momentos del ajolote</h2>
            <p className="mx-auto mt-3 max-w-2xl text-pastelText/75">Ilustraciones inspiradas en su curiosa apariencia y su entorno acuático.</p>
          </div>
          <Swiper modules={[Autoplay, Pagination, Navigation]} spaceBetween={20} slidesPerView={1} navigation pagination={{ clickable: true }} autoplay={{ delay: 3500 }} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="rounded-[2rem] px-4 pb-8">
            {factCards.map((fact) => (
              <SwiperSlide key={fact.title} className="rounded-[2rem] overflow-hidden">
                <img src={fact.image} alt={fact.title} className="h-96 w-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section id="testimonios" className="bg-pastelWhite/80 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-pastelGreen">Testimonios</span>
            <h2 className="mt-4 text-4xl font-bold text-pastelText">Nuestros visitantes opinan</h2>
          </div>
          <Swiper modules={[Autoplay, Pagination]} spaceBetween={24} slidesPerView={1} pagination={{ clickable: true }} autoplay={{ delay: 4000 }} className="rounded-[2rem] bg-pastelWhite p-8 shadow-soft">
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name} className="rounded-[2rem]">
                <div className="grid gap-8 lg:grid-cols-[140px_minmax(0,1fr)] lg:items-center">
                  <div className="flex h-36 w-36 items-center justify-center rounded-full bg-pastelGreen/20 text-3xl text-pastelGreen">{testimonial.name[0]}</div>
                  <div>
                    <div className="flex items-center gap-2 text-pastelGreen">
                      {Array.from({ length: testimonial.stars }).map((_, index) => (
                        <FaStar key={index} />
                      ))}
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold text-pastelText">{testimonial.name}</h3>
                    <p className="mt-3 text-pastelText/75">{testimonial.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section id="contacto" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="rounded-[2rem] border border-pastelGreen/20 bg-pastelWhite p-10 shadow-soft">
              <span className="text-sm uppercase tracking-[0.35em] text-pastelGreen">Conservación</span>
              <h2 className="mt-4 text-4xl font-bold text-pastelText">Ayuda a proteger al ajolote</h2>
              <p className="mt-4 text-pastelText/75">Comparte información útil, promueve hábitats saludables y conoce acciones que ayudan a la conservación del ajolote mexicano.</p>
              <div className="mt-10 space-y-6 text-pastelText/75">
                <div>
                  <h3 className="text-lg font-semibold text-pastelText">¿Cómo apoyar?</h3>
                  <ul className="mt-4 list-disc space-y-3 pl-5 text-pastelText/75">
                    <li>Mantener limpios los canales y cuerpos de agua.</li>
                    <li>Evitar especies invasoras y plásticos en el agua.</li>
                    <li>Apoyar proyectos de conservación local.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="rounded-[2rem] border border-pastelGreen/20 bg-pastelWhite p-8 shadow-soft">
              <form onSubmit={handleSubmit} className="space-y-6">
                <label className="block">
                  <span className="text-sm font-medium text-pastelText">Nombre</span>
                  <input name="nombre" value={formData.nombre} onChange={handleChange} type="text" required aria-label="Nombre" className="mt-2 w-full rounded-3xl border border-pastelGreen/20 bg-pastelWhite px-4 py-3 text-pastelText outline-none transition focus:border-pastelGreen focus:ring-2 focus:ring-pastelGreen/30" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-pastelText">Correo</span>
                  <input name="correo" value={formData.correo} onChange={handleChange} type="email" required aria-label="Correo electrónico" className="mt-2 w-full rounded-3xl border border-pastelGreen/20 bg-pastelWhite px-4 py-3 text-pastelText outline-none transition focus:border-pastelGreen focus:ring-2 focus:ring-pastelGreen/30" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-pastelText">Mensaje</span>
                  <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} required rows="5" aria-label="Mensaje" className="mt-2 w-full rounded-3xl border border-pastelGreen/20 bg-pastelWhite px-4 py-3 text-pastelText outline-none transition focus:border-pastelGreen focus:ring-2 focus:ring-pastelGreen/30"></textarea>
                </label>
                {status && (
                  <p className={`rounded-3xl px-4 py-3 text-sm ${status.type === 'success' ? 'bg-emerald-500/15 text-emerald-200' : 'bg-rose-500/15 text-rose-200'}`}>{status.message}</p>
                )}
                <button type="submit" disabled={submitting} className="inline-flex w-full items-center justify-center rounded-full bg-pastelPink px-6 py-4 text-sm font-semibold text-pastelText transition hover:bg-pastelPink/90 disabled:cursor-not-allowed disabled:bg-pastelWhite/60">
                  {submitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
