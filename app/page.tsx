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
    setRisultato(null);

    setTimeout(() => {
      if (
        link.toLowerCase().includes("samsung") ||
        link.toLowerCase().includes("galaxy")
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
              <span className="text-green-400">bene</span>{" "}
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

        <section className="grid md:grid-cols-2 gap-10 items-start py-20">

          <div>

            <h2 className="text-4xl font-bold leading-tight">
              Il tuo consulente acquisti intelligente
            </h2>

            <p className="mt-6 text-lg text-blue-100">
              Incolla un link Amazon e Spendibene AI confronterà automaticamente prodotti, recensioni e rapporto qualità/prezzo.
            </p>

            <div className="mt-8 bg-white rounded-3xl p-4 shadow-2xl">

              <input
                value={link}
                onChange={(e) => setLink(e.target.value)}
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

                <div className="mt-6 text-center">

                  <p className="text-black font-bold">
                    🤖 Analisi AI in corso...
                  </p>

                  <div className="w-full bg-gray-300 rounded-full h-4 mt-4 overflow-hidden">

                    <div className="bg-green-500 h-4 animate-pulse w-full">

                    </div>

                  </div>

                </div>
              )}

              {risultato && (

                <div className="mt-6 bg-white text-black p-6 rounded-xl">

                  <div className="flex gap-2 items-center">

                    <h3 className="font-bold text-2xl">
                      Prodotto rilevato
                    </h3>

                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                      🏆 Miglior qualità/prezzo
                    </span>

                  </div>

                  <div className="mt-4">

                    <p className="text-xl font-semibold">
                      {risultato.nome}
                    </p>

                    <p className="mt-2">
                      Prezzo: {risultato.prezzo}
                    </p>

                    <p>
                      Spendibene Score:
                      <span className="text-green-600 font-bold">
                        {" "}
                        {risultato.score}
                      </span>
                    </p>

                    <p className="text-green-600 font-bold mt-2">
                      💰 Potresti risparmiare €37
                    </p>

                  </div>

                  <div className="mt-6">

                    <h4 className="font-bold">
                      👍 Pro
                    </h4>

                    <ul className="ml-4 mt-2">
                      <li>• Batteria lunga durata</li>
                      <li>• Buona fotocamera</li>
                      <li>• Display AMOLED</li>
                    </ul>

                  </div>

                  <div className="mt-6">

                    <h4 className="font-bold">
                      👎 Contro
                    </h4>

                    <ul className="ml-4 mt-2">
                      <li>• Audio migliorabile</li>
                      <li>• Ricarica lenta</li>
                    </ul>

                  </div>

                  <div className="mt-6">

                    <h4 className="font-bold">
                      📊 Confronto rapido
                    </h4>

                    <div className="bg-gray-100 rounded-xl p-3 mt-2">
                      Samsung Galaxy A16 — Score 8.4
                    </div>

                    <div className="bg-gray-100 rounded-xl p-3 mt-2">
                      Xiaomi Redmi Note 14 — Score 8.8
                    </div>

                    <div className="bg-gray-100 rounded-xl p-3 mt-2">
                      Motorola G85 — Score 8.1
                    </div>

                  </div>

                  <div className="mt-6">

                    <h4 className="font-bold">
                      ✅ Alternative consigliate
                    </h4>

                    <ul className="mt-2">
                      <li>✅ Xiaomi Redmi Note 14</li>
                      <li>✅ Motorola G85</li>
                    </ul>

                  </div>

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