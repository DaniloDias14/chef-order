"use client";
import { useEffect } from "react";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import Sidebar from "@/app/components/Sidebar";

export default function SistemaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { usuario } = useAuth();
  const router = useRouter();

  useEffect(() => {
    debugger;
    if (usuario == null) {
      router.push("/login");
    }
  });

  if (usuario == null) return null;

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0">
        <Header />

        <main className="flex-1 p-4 md:p-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
