export default function Home() {
  return (
    <div className="min-h-screen bg-blue-700 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between py-6">
          <div>
            <h1 className="text-5xl font-bold">
              Spendi
              <span className="text-green-400">bene</span>{" "}
              <span className="text-2xl">AI</span>
            </h1>

            <p className="text-xl mt-3 italic">
              Confronta, scegli, spendi bene!
            </p>
          </div>

          <div className="text-6xl">
            🔍💶✓
          </div>
        </header>

        <section className="grid md:grid-cols-2 gap-10 items-center py-20">
          <div>
            <h2 className="text-4xl font-bold leading-tight">
              Il tuo consulente acquisti intelligente
            </h2>

            <p className="mt-6 text-lg text-blue-100">
              Incolla un link Amazon e Spendibene AI confronterà
              automaticamente prodotti, recensioni e rapporto qualità/prezzo.
            </p>

            <div className="mt-8 bg-white rounded-3xl p-4 shadow-2xl">
              <input
                placeholder="Incolla qui un link Amazon..."
                className="w-full p-4 rounded-xl text-black outline-none"
              />

              <button className="w-full mt-4 bg-green-500 rounded-2xl p-4 text-xl font-bold">
                Analizza prodotto
              </button>
            </div>
          </div>

          <div className="bg-white text-black rounded-3xl p-8 shadow-2xl">
            <h3 className="font-bold text-2xl">
              Cosa fa Spendibene AI
            </h3>

            <ul className="space-y-4 mt-6">
              <li>✅ Analizza link Amazon</li>
              <li>✅ Trova 2 alternative intelligenti</li>
              <li>✅ Confronta 3 prodotti</li>
              <li>✅ Legge recensioni e pro/contro</li>
              <li>✅ Calcola Spendibene Score</li>
              <li>✅ Ti aiuta a spendere meglio</li>
            </ul>
          </div>
        </section>

        <footer className="text-center text-blue-100 py-10">
          © Spendibene AI — Confronta, scegli, spendi bene!
        </footer>
      </div>
    </div>
  );
}