import React from 'react';
import Link from 'next/link'; // Importação essencial para Next.js

export default function LandPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-white text-zinc-900 font-sans selection:bg-orange-100 selection:text-orange-600">
      
      {/* 1️⃣ Seção Hero */}
      <section className="relative overflow-hidden bg-zinc-950 pt-24 pb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-orange-600/40 to-transparent rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800 text-orange-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Nova Versão {currentYear} Disponível
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[1.1]">
            O comando da sua cozinha <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-500 to-orange-600">
              na velocidade do pensamento.
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-12 font-medium leading-relaxed">
            Abandone o papel. O ChefOrder centraliza mesas, pedidos e pagamentos em uma interface neutra, rápida e intuitiva.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            {/* Alterado para Link */}
            <Link 
              href="/registro"
              className="w-full sm:w-auto px-10 py-5 bg-orange-600 hover:bg-orange-500 text-white text-center font-black rounded-2xl transition-all transform hover:scale-105 hover:shadow-[0_0_30px_-10px_rgba(234,88,12,0.5)]"
            >
              Começar Agora
            </Link>
            <Link 
              href="/demo"
              className="w-full sm:w-auto px-10 py-5 bg-zinc-900 hover:bg-zinc-800 text-white text-center font-bold rounded-2xl border border-zinc-800 transition-all"
            >
              Ver Demonstração
            </Link>
          </div>
        </div>
      </section>

      {/* 2️⃣ Seção de Problemas */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <h2 className="text-3xl md:text-4xl font-black text-zinc-900 tracking-tight">
              Seu restaurante ainda <br /> sofre com processos lentos?
            </h2>
            <p className="text-zinc-500 max-w-sm font-medium">
              Elimine os gargalos que fazem você perder dinheiro e tempo todos os dias.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { t: "Comandas em papel", d: "Extravios constantes", i: "📄" },
              { t: "Erros nos pedidos", d: "Desperdício na cozinha", i: "❌" },
              { t: "Confusão no caixa", d: "Fechamentos demorados", i: "💰" },
              { t: "Falta de controle", d: "Vendas sem rastro", i: "📉" },
              { t: "Mesas paradas", d: "Giro de clientes baixo", i: "🪑" }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-zinc-50 rounded-[32px] border border-transparent hover:border-zinc-200 transition-all group">
                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{item.i}</div>
                <h4 className="font-bold text-zinc-900 mb-1">{item.t}</h4>
                <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ Seção de Funcionalidades */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Gestão de Mesas", d: "Mapa visual interativo com status de ocupação em tempo real." },
              { t: "Gestão de Cardápio", d: "Categorias, adicionais e preços editáveis em segundos." },
              { t: "Gestão de Pedidos", d: "KDS integrado: a cozinha recebe o pedido no momento do clique." },
              { t: "Recibo Eletrônico", d: "Fechamento de conta digital com envio via QR Code ou Link." },
              { t: "Segurança Total", d: "Dados criptografados e isolados por restaurante com backup diário." },
              { t: "Relatórios", d: "Métricas de performance para entender seus pratos mais vendidos." }
            ].map((f, i) => (
              <div key={i} className="group p-10 bg-zinc-900/50 border border-zinc-800 rounded-[40px] hover:bg-zinc-900 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-orange-600/10 flex items-center justify-center mb-8 border border-orange-600/20 group-hover:bg-orange-600 transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{f.t}</h3>
                <p className="text-zinc-500 leading-relaxed text-sm font-medium">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8️⃣ Planos */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-16 tracking-tight">O plano ideal para o seu tamanho.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            <div className="p-10 rounded-[40px] border border-zinc-100 bg-zinc-50/50">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em]">Starter</span>
              <div className="text-4xl font-black my-4 text-zinc-900">R$ 99<span className="text-sm font-medium text-zinc-400">/mês</span></div>
              <ul className="space-y-4 mb-10 text-sm font-medium text-zinc-600 text-left">
                <li className="flex items-center gap-2">✓ Até 10 mesas</li>
                <li className="flex items-center gap-2">✓ Cardápio Digital</li>
              </ul>
              <Link href="/assinatura/basico" className="block w-full py-4 bg-white border border-zinc-200 rounded-2xl font-bold hover:bg-zinc-900 hover:text-white transition-all text-center">
                Selecionar
              </Link>
            </div>

            <div className="p-12 rounded-[48px] bg-zinc-950 text-white shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Mais Popular</div>
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em]">Pro Chef</span>
              <div className="text-5xl font-black my-4">R$ 199<span className="text-sm font-medium text-zinc-500">/mês</span></div>
              <ul className="space-y-4 mb-10 text-sm font-medium text-zinc-400 text-left">
                <li className="flex items-center gap-2 text-white">✓ Mesas Ilimitadas</li>
                <li className="flex items-center gap-2 text-white">✓ Suporte 24h Prioritário</li>
              </ul>
              <Link href="/assinatura/pro" className="block w-full py-5 bg-orange-600 rounded-2xl font-black hover:bg-orange-500 transition-all transform hover:scale-[1.02] text-center text-white">
                Assinar Agora
              </Link>
            </div>

            <div className="p-10 rounded-[40px] border border-zinc-100 bg-zinc-50/50">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em]">Enterprise</span>
              <div className="text-4xl font-black my-4 text-zinc-900">R$ 349<span className="text-sm font-medium text-zinc-400">/mês</span></div>
              <ul className="space-y-4 mb-10 text-sm font-medium text-zinc-600 text-left">
                <li className="flex items-center gap-2">✓ Múltiplas Unidades</li>
                <li className="flex items-center gap-2">✓ Consultoria de Processos</li>
              </ul>
              <Link href="/assinatura/premium" className="block w-full py-4 bg-white border border-zinc-200 rounded-2xl font-bold hover:bg-zinc-900 hover:text-white transition-all text-center">
                Selecionar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 🔟 Chamada Final (CTA) */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto rounded-[60px] bg-zinc-950 p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/20 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
              Sua cozinha merece <br /> essa evolução.
            </h2>
            <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto font-medium">
              Comece a usar o ChefOrder hoje e transforme a experiência dos seus clientes e da sua equipe.
            </p>
            {/* Alterado para Link */}
            <Link 
              href="/registro"
              className="inline-block px-12 py-6 bg-white text-zinc-950 font-black rounded-3xl hover:bg-orange-600 hover:text-white transition-all duration-300 transform hover:scale-105 uppercase tracking-widest text-sm"
            >
              Criar Conta Agora
            </Link>
            <div className="mt-8 text-zinc-600 text-xs font-bold uppercase tracking-[0.3em]">
              Teste grátis por 7 dias • Sem cartão de crédito
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}