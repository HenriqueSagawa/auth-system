"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
export default function Home() {

  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      {isLogin ? (<p>Bem vindo</p>) : (<Link className="px-5 py-3 bg-purple-600 rounded text-white font-semibold hover:opacity-90 active:opcaity-85" href="/login">Entrar</Link>)}
    </div>
  );
}