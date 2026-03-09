import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="sticky top-0 h-screen w-64 bg-zinc-900 text-zinc-50 flex flex-col border-r border-zinc-800 shrink-0">
      {/* Logo */}
      <div className="p-6 text-2xl font-bold border-b border-zinc-800">
        Chef<span className="text-orange-500">Order</span>
      </div>

      {/* Navegação */}
      <nav className="flex-1 p-4 space-y-2">
        <Link
          href="dashboard"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-zinc-800 transition-colors duration-200 text-zinc-300 hover:text-white"
        >
          <span className="font-medium">Dashboard</span>
        </Link>

        <Link
          href="pedidos"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-zinc-800 transition-colors duration-200 text-zinc-300 hover:text-white"
        >
          <span className="font-medium">Pedidos</span>
        </Link>

        <Link
          href="configuracoes"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-zinc-800 transition-colors duration-200 text-zinc-300 hover:text-white"
        >
          <span className="font-medium">Configurações</span>
        </Link>
      </nav>
    </aside>
  );
}
