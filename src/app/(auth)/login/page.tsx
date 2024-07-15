"use client";

import Link from "next/link";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Meteors } from "@/app/components/Meteors";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from 'next/navigation'
import { findUser } from "@/services/login";
import { getUserData } from "@/services/saveData"
import { saveUserData } from "@/services/saveData";

export default function LoginPage() {

    const router = useRouter();

    const data = getUserData();

    if (getUserData()) {
        router.push("/profile");
    }

    const User = z.object({
        username: z.string(),
        password: z.string(),
    });

    type User = z.infer<typeof User>

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<User>({
        resolver: zodResolver(User)
    })

    const onSubmit: SubmitHandler<User> = async (data) => {
        const user = await findUser(data.username);

        if (user && user.password === data.password) {
            saveUserData(user);
            router.push("/profile");
        } else {
            alert("Usuário ou senha inválido");
        }
    };

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-slate-900">
            <Meteors />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-3xl font-semibold">Login</h1>
                <Input register={register("username")} type="email" placeholder="Nome de usuário" />
                <Input register={register("password")}  type="password" placeholder="Senha" />
                <button className="w-full bg-cyan-700 py-3 rounded hover:opacity-90 active:opacity-80">Entrar</button>
                <p className="text-right text-sm text-slate-400 w-full">Não possui conta? <Link href="/register" className="text-blue-600">Cadastre-se</Link></p>
            </Form>
        </div>
    )
}