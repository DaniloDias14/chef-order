"use client";

import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from "react";
import { useRouter } from "next/navigation"; // Importação correta
import Cookies from "js-cookie";

export class Usuario {
  constructor(
    public codigo: number,
    public name: string,
  ) {}
}

interface AuthContextType {
  usuario: Usuario | null;
  token: string | null;
  login: (usuario: Usuario, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter(); // Execução correta do hook

  useEffect(() => {
    const usuarioRecover = Cookies.get("usuario");
    const tokenRecover = Cookies.get("token");

    if (usuarioRecover && tokenRecover) {
      try {
        setUsuario(JSON.parse(usuarioRecover));
        setToken(tokenRecover);
      } catch (e) {
        console.error("Erro ao recuperar sessão:", e);
      }
    }
  }, []);

  const login = (usuario: Usuario, token: string) => {
    setUsuario(usuario);
    setToken(token);
    Cookies.set("usuario", JSON.stringify(usuario), { expires: 7 });
    Cookies.set("token", token, {
      expires: 7,
      secure: true,
      sameSite: "strict",
    });
    router.push("/home"); // Redireciona após login
  };

  const logout = () => {
    setUsuario(null);
    setToken(null);
    Cookies.remove("usuario");
    Cookies.remove("token");
    router.push("/"); // Volta para a Landing Page
  };

  return (
    <AuthContext.Provider value={{ usuario, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth deve ser usado dentro do AuthProvider!");
  return context;
};
