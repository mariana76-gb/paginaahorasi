function PrivacyPage() {
  return (
    <main className="min-h-screen bg-pastelSoft px-4 py-20 text-pastelText sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-pastelGreen/20 bg-pastelWhite p-10 shadow-soft">
        <h1 className="text-4xl font-bold text-pastelText">Aviso de privacidad</h1>
        <p className="mt-6 text-pastelText/75">En Ajolotes MX valoramos tu confianza. Los datos que compartes en el formulario de contacto se usan solo para responder tus preguntas y no se comparten con terceros.</p>
        <ol className="mt-8 list-decimal space-y-4 pl-5 text-pastelText/75">
          <li>Recabamos nombre, correo, teléfono y mensaje para poder responder tu consulta.</li>
          <li>No utilizamos tu información para fines comerciales fuera de este sitio.</li>
          <li>Mantenemos medidas básicas de seguridad para proteger tu información.</li>
          <li>Si deseas eliminar tus datos, contáctanos a ajolotes@informacion.org.</li>
        </ol>
        <p className="mt-8 text-sm text-pastelText/60">Última actualización: julio de 2026.</p>
      </div>
    </main>
  )
}

export default PrivacyPage
