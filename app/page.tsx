"use client";

import { useState } from "react";

export default function Home() {
  const [link, setLink] = useState("");

  const [risultato, setRisultato] = useState<{
    nome: string;
    prezzo: string;
    score: string;
  } | null>(null);

  const [caricamento, setCaricamento] = useState(false);

  const analizzaProdotto = () => {
    if (!link) {
      alert("Incolla un link Amazon");
      return;
    }

    if (!link.includes("amazon")) {
      alert("Questo non sembra un link Amazon");
      return;
    }

    setCaricamento(true);

    setTimeout(() => {
      if (
        link.toLowerCase().includes("samsung")
      ) {
        setRisultato({
          nome: "Samsung Galaxy A16",
          prezzo: "€189",
          score: "8.4/10"
        });
      } else {
        setRisultato({
          nome: "Prodotto Amazon rilevato",
          prezzo: "€99",
          score: "7.5/10"
        });
      }

      setCaricamento(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-blue-700 text-white p-8">
      <div className="max-w-6xl mx-auto">

        <header className="flex items-center justify-between py-6">
          <div>
            <h1 className="text-5xl font-bold">
              Spendi
              <span className="text-green-400">
                bene
              </span>{" "}
              <span className="text-2xl">
                AI
              </span>
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
              Incolla un link Amazon e
              Spendibene AI confronterà
              automaticamente prodotti,
              recensioni e rapporto
              qualità/prezzo.
            </p>

            <div className="mt-8 bg-white rounded-3xl p-4 shadow-2xl">

              <input
                value={link}
                onChange={(e) =>
                  setLink(e.target.value)
                }
                placeholder="Incolla qui un link Amazon..."
                className="w-full p-4 rounded-xl text-black outline-none"
              />

              <button
                onClick={analizzaProdotto}
                className="w-full mt-4 bg-green-500 rounded-2xl p-4 text-xl font-bold"
              >
                Analizza prodotto
              </button>

              {caricamento && (
                <div className="mt-4 text-center text-black">
                  🔍 Analisi in corso...
                </div>
              )}

              {risultato && !caricamento && (
                <div className="mt-6 bg-white text-black p-4 rounded-xl">

                  <h3 className="font-bold text-xl">
                    Prodotto rilevato
                  </h3>

                  <p>{risultato.nome}</p>

                  <p>
                    Prezzo:
                    {" "}
                    {risultato.prezzo}
                  </p>

                  <p>
                    Spendibene Score:
                    {" "}
                    {risultato.score}
                  </p>

                </div>
              )}

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