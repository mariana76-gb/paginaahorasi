function TermsPage() {
  return (
    <main className="min-h-screen bg-[#10170F] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-[#1f2a20]/90 p-10 shadow-2xl">
        <h1 className="text-4xl font-bold text-white">Términos y condiciones</h1>
        <p className="mt-6 text-slate-300">Bienvenido a Frapessaurio. Al utilizar este sitio, aceptas nuestros términos de servicio y políticas de uso.</p>
        <ul className="mt-8 space-y-4 text-slate-300">
          <li>El contenido ofrecido es de carácter informativo y promocional.</li>
          <li>La disponibilidad de productos está sujeta a cambios sin previo aviso.</li>
          <li>Nos reservamos el derecho de modificar promociones y precios.</li>
          <li>Para cualquier consulta legal, contáctanos a hola@frapessaurio.com.</li>
        </ul>
        <p className="mt-8 text-sm text-slate-400">© 2026 Frapessaurio. Todos los derechos reservados.</p>
      </div>
    </main>
  )
}

export default TermsPage
