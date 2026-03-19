"use client";

import { useRouter } from "next/navigation";
import { useAuth, Usuario } from "../context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async (formData: FormData) => {
    const email = formData.get("email");
    const senha = formData.get("senha");

    try {
      const usuarioMock = new Usuario(1, "Danilo Dias", "00000000000", true);
      const tokenMock = "jwt-dba2y¨&*@sadgaj!shdga23@Sjhsd$";

      login(usuarioMock, tokenMock);
    } catch (error) {
      alert("Erro ao entrar no sistema!");
    }

    console.log(`autenticado com email: ${email}`);

    router.push("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-10 border border-zinc-200">
        {/* Identidade */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-black tracking-tight text-zinc-900">
            Chef<span className="text-orange-500">Order</span>
          </h1>
          <p className="text-sm text-zinc-500 mt-2">
            Acesse sua conta para continuar
          </p>
        </div>

        <form action={handleLogin} className="space-y-6">
          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700 block">
              E-mail
            </label>

            <input
              name="email"
              type="email"
              placeholder="seu@email.com"
              className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all placeholder:text-zinc-400"
            />
          </div>

          {/* Senha */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-zinc-700 block">
                Senha
              </label>
            </div>

            <input
              name="senha"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all shadow-lg shadow-orange-200 active:scale-[0.98]"
          >
            Acessar
          </button>
        </form>
      </div>
    </div>
  );
}
