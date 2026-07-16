function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#10170F] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-[#1f2a20]/90 p-10 shadow-2xl">
        <h1 className="text-4xl font-bold text-white">Aviso de privacidad</h1>
        <p className="mt-6 text-slate-300">En Frapessaurio respetamos tu privacidad y protegemos tus datos personales. La información que compartes en nuestro formulario de contacto se utiliza únicamente para responder a tus consultas y mejorar tu experiencia.</p>
        <ol className="mt-8 list-decimal space-y-4 pl-5 text-slate-300">
          <li>Recabamos nombre, correo, teléfono y mensaje para responder tu solicitud.</li>
          <li>No compartimos tus datos con terceros sin tu consentimiento.</li>
          <li>Garantizamos la seguridad de la información mediante medidas técnicas y administrativas.</li>
          <li>Si deseas eliminar tus datos, contáctanos a hola@frapessaurio.com.</li>
        </ol>
        <p className="mt-8 text-sm text-slate-400">Última actualización: julio de 2026.</p>
      </div>
    </main>
  )
}

export default PrivacyPage
