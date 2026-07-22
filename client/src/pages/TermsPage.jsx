function TermsPage() {
  return (
    <main className="min-h-screen bg-[#07161E] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-[#0f2c3d]/90 p-10 shadow-2xl">
        <h1 className="text-4xl font-bold text-white">Términos y condiciones</h1>
        <p className="mt-6 text-slate-300">Bienvenido a Ajolotes MX. Este sitio comparte información educativa sobre ajolotes y su conservación.</p>
        <ul className="mt-8 space-y-4 text-slate-300">
          <li>El contenido es informativo y no sustituye el consejo de especialistas en biología o conservación.</li>
          <li>No nos hacemos responsables por interpretaciones incorrectas de la información presentada.</li>
          <li>Los datos se actualizan con base en fuentes confiables de conservación y divulgación científica.</li>
          <li>Para consultas legales o de derechos, contáctanos a ajolotes@informacion.org.</li>
        </ul>
        <p className="mt-8 text-sm text-slate-400">© 2026 Ajolotes MX. Todos los derechos reservados.</p>
      </div>
    </main>
  )
}

export default TermsPage
