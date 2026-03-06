'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const handleLogin = async (formData:FormData) => {

    const email = formData.get("email");
    const senha = formData.get("senha");

    console.log(`Autenticado com email: ${email}`)

    router.push("/home")
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-orange-100 selection:text-orange-600 flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* 1️⃣ Efeito de fundo (Fiel à LandPage) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-orange-600/40 to-transparent rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo/Marca */}
        <div className="text-center mb-8">
           <h2 className="text-2xl font-black tracking-tighter uppercase italic">
            Chef<span className="text-orange-500">Order</span>
          </h2>
        </div>

        {/* Card de Login */}
        <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 p-8 md:p-10 rounded-[40px] shadow-2xl">
          <header className="mb-8">
            <h1 className="text-3xl font-black tracking-tight mb-2 text-white">Entrar no Sistema</h1>
            <p className="text-zinc-500 text-sm font-medium">Acesse sua cozinha digital para gerenciar pedidos.</p>
          </header>

          <form action={handleLogin} className="space-y-6">
            {/* Campo E-mail */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">
                E-mail
              </label>
              <input
                name="email"
                type="email"
                placeholder="seu@email.com"
                className="w-full px-5 py-4 bg-zinc-950 border border-zinc-800 rounded-2xl text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-orange-600/50 focus:border-orange-500 transition-all"
                required
              />
            </div>

            {/* Campo Senha */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                  Senha
                </label>
                <Link href="/forgot-password" className="text-[10px] font-bold text-orange-500 hover:text-orange-400 uppercase tracking-wider">
                  Esqueceu?
                </Link>
              </div>
              <input
                name="senha"
                type="password"
                placeholder="••••••••"
                className="w-full px-5 py-4 bg-zinc-950 border border-zinc-800 rounded-2xl text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-orange-600/50 focus:border-orange-500 transition-all"
                required
              />
            </div>

            {/* Botão Submit */}
            <button 
              type="submit"
              className="w-full py-5 bg-orange-600 hover:bg-orange-500 text-white font-black rounded-2xl transition-all transform hover:scale-[1.02] hover:shadow-[0_0_30px_-10px_rgba(234,88,12,0.5)] active:scale-95"
            >
              Acessar Painel
            </button>
          </form>

          {/* Rodapé do Card */}
          <div className="mt-8 pt-8 border-t border-zinc-800 text-center">
            <p className="text-zinc-500 text-sm font-medium">
              Ainda não tem conta?{' '}
              <Link href="/registro" className="text-white font-bold hover:text-orange-500 transition-colors">
                Cadastre-se agora
              </Link>
            </p>
          </div>
        </div>

        {/* Footer info */}
        <p className="mt-8 text-center text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em]">
          ChefOrder © {currentYear} • Sistema de Alta Performance
        </p>
      </div>
    </div>
  );
}