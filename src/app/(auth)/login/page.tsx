import Link from "next/link";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Meteors } from "@/app/components/Meteors";
export default function LoginPage() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-slate-900">
            <Meteors />
            <Form>
                <h1 className="text-3xl font-semibold">Login</h1>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Senha" />
                <button className="w-full bg-cyan-700 py-3 rounded hover:opacity-90 active:opacity-80">Entrar</button>
                <p className="text-right text-sm text-slate-400 w-full">Não possui conta? <Link href="/register" className="text-blue-600">Cadastre-se</Link></p>
            </Form>
        </div>
    )
}