function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#07161E] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-[#0f2c3d]/90 p-10 shadow-2xl">
        <h1 className="text-4xl font-bold text-white">Aviso de privacidad</h1>
        <p className="mt-6 text-slate-300">En Ajolotes MX valoramos tu confianza. Los datos que compartes en el formulario de contacto se usan solo para responder tus preguntas y no se comparten con terceros.</p>
        <ol className="mt-8 list-decimal space-y-4 pl-5 text-slate-300">
          <li>Recabamos nombre, correo, teléfono y mensaje para poder responder tu consulta.</li>
          <li>No utilizamos tu información para fines comerciales fuera de este sitio.</li>
          <li>Mantenemos medidas básicas de seguridad para proteger tu información.</li>
          <li>Si deseas eliminar tus datos, contáctanos a ajolotes@informacion.org.</li>
        </ol>
        <p className="mt-8 text-sm text-slate-400">Última actualización: julio de 2026.</p>
      </div>
    </main>
  )
}

export default PrivacyPage
