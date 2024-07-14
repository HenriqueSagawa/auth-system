import { Form } from "@/app/components/Form";
import { Input } from "@/app/components/Input";
import { Meteors } from "@/app/components/Meteors";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-slate-900">
            <Meteors />
            <Form>
                <h1 className="text-3xl font-semibold">Sign Up</h1>
                <Input placeholder="Nome" type="text" />
                <Input placeholder="Nome de usuário" type="text" />
                <Input placeholder="Email" type="email" />
                <Input placeholder="Senha" type="password" />
                <button className="w-full bg-cyan-700 py-3 rounded hover:opacity-90 active:opacity-80">Cadastrar</button>
                <p className="text-right text-sm text-slate-400 w-full">Já possui conta? <Link href="/login" className="text-blue-600">Entrar</Link></p>
            </Form>
        </div>
    )
}