"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getUserData, removeUserData } from "@/services/saveData"
export default function Home() {

  const data = getUserData();

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (data) {
      setIsLogin(true);
    }
  }, [data])
  return (
    <div className="text-white flex flex-col justify-center items-center w-full h-screen">
      {isLogin ? (
        <p className="text-2xl font-semibold flex flex-col items-center gap-3"><span>Bem vindo, {data.name}</span> <span>Acesse sua página pessoal </span> <Link className="px-5 py-3 bg-purple-600 rounded text-white font-semibold hover:opacity-90 active:opcaity-85" href="/profile">Entrar</Link> </p>
      ) : (<Link className="px-5 py-3 bg-purple-600 rounded text-white font-semibold hover:opacity-90 active:opcaity-85" href="/login">Entrar</Link>)}
    </div>
  );
}