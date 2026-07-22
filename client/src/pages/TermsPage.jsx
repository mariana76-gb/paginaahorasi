function TermsPage() {
  return (
    <main className="min-h-screen bg-pastelSoft px-4 py-20 text-pastelText sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-pastelGreen/20 bg-pastelWhite p-10 shadow-soft">
        <h1 className="text-4xl font-bold text-pastelText">Términos y condiciones</h1>
        <p className="mt-6 text-pastelText/75">Bienvenido a Ajolotes MX. Este sitio comparte información educativa sobre ajolotes y su conservación.</p>
        <ul className="mt-8 space-y-4 text-pastelText/75">
          <li>El contenido es informativo y no sustituye el consejo de especialistas en biología o conservación.</li>
          <li>No nos hacemos responsables por interpretaciones incorrectas de la información presentada.</li>
          <li>Los datos se actualizan con base en fuentes confiables de conservación y divulgación científica.</li>
          <li>Para consultas legales o de derechos, contáctanos a ajolotes@informacion.org.</li>
        </ul>
        <p className="mt-8 text-sm text-pastelText/60">© 2026 Ajolotes MX. Todos los derechos reservados.</p>
      </div>
    </main>
  )
}

export default TermsPage
