"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
export default function Home() {

  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      {isLogin ? (<p>Bem vindo</p>) : (<Link href="/login">Entrar</Link>)}
    </div>
  );
}