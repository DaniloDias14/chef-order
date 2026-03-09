"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full -mt-8">
      {/* --- REGIÃO 1: HERO --- */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-white overflow-hidden">
        {/* Fundo geométrico */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="dots"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1" cy="1" r="1" fill="black" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block py-1 px-4 mb-6 text-xs font-bold tracking-widest text-orange-600 uppercase bg-orange-100 rounded-full">
            Sistema para Restaurantes
          </span>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-zinc-900 mb-6">
            CHEF<span className="text-orange-500">.</span>ORDER
          </h1>

          <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed mb-10">
            Um sistema moderno para organizar pedidos, cozinha e atendimento em
            restaurantes. Simples para usar, rápido para operar e pensado para
            ambientes de alta demanda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="px-10 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-all transform hover:-translate-y-1 text-center"
            >
              Começar Agora
            </Link>

            <Link
              href="/sobre"
              className="px-10 py-4 bg-white border border-zinc-200 text-zinc-900 font-bold rounded-xl hover:bg-zinc-50 transition-all text-center"
            >
              Conhecer Sistema
            </Link>
          </div>
        </div>
      </section>

      {/* --- REGIÃO 2: SOBRE O SISTEMA --- */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-zinc-900 tracking-tight">
                Organização para a cozinha moderna
              </h2>

              <p className="text-lg text-zinc-600 leading-relaxed">
                Restaurantes precisam de velocidade e clareza. O Chef Order foi
                projetado para organizar pedidos de forma direta, permitindo que
                a equipe visualize o fluxo de produção em tempo real.
              </p>

              <p className="text-lg text-zinc-600 leading-relaxed">
                A proposta é simples: menos confusão, menos papel, mais
                produtividade dentro da cozinha e no atendimento.
              </p>
            </div>

            <div className="relative p-2 bg-white border border-zinc-200 rounded-3xl shadow-xl">
              <div className="aspect-square bg-zinc-100 rounded-2xl flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-24 h-24 text-orange-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 8c-2.5 0-4 1.5-4 3s1.5 3 4 3 4 1.5 4 3-1.5 3-4 3M12 5v3m0 10v3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- REGIÃO 3: FUNCIONALIDADES --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 mb-4">
              O que o sistema oferece
            </h2>
            <div className="h-1 w-20 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Gestão de Pedidos",
                desc: "Organize pedidos de forma clara para atendimento e cozinha.",
              },
              {
                title: "Painel da Cozinha",
                desc: "Visualização rápida do que precisa ser preparado.",
              },
              {
                title: "Controle Simples",
                desc: "Interface direta para reduzir erros operacionais.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 border border-zinc-100 rounded-3xl hover:border-orange-300 transition-all hover:shadow-xl hover:shadow-orange-100"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-2xl mb-6 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6M9 16h6M9 8h6M5 6h14M5 18h14"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-zinc-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- REGIÃO 4: CTA FINAL --- */}
      <section className="py-24 bg-orange-500 text-white rounded-[3rem] mx-4 mb-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para organizar seu restaurante?
          </h2>

          <p className="text-orange-100 text-lg mb-10">
            Comece a utilizar o Chef Order e leve mais controle para sua
            operação diária.
          </p>

          <Link
            href="/login"
            className="inline-block px-10 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-zinc-100 transition-all"
          >
            Criar Conta
          </Link>
        </div>
      </section>
    </div>
  );
}
