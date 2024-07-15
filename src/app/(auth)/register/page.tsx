"use client";

import { Form } from "@/app/components/Form";
import { Input } from "@/app/components/Input";
import { Meteors } from "@/app/components/Meteors";
import Link from "next/link";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { registerUser, getUser } from "@/services/register";
import { saveUserData } from "@/services/saveData";
import { useRouter } from 'next/navigation'
import { getUserData } from "@/services/saveData"

export default function RegisterPage() {

    const router = useRouter();

    if(getUserData()) {
        router.push("/profile");
    }

    const [isVisible, setIsVisible] = useState(false);

    function handleVisibility() {
        setIsVisible(!isVisible);
    }

    const User = z.object({
        name: z.string(),
        username: z.string(),
        email: z.string().email({ message: "Email inválido" }),
        password: z.string().min(8, { message: "Senha inválida" }),
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
        if (await getUser(data.username)) {
            alert("Usuário já existe");
        } else {
            registerUser(data);
            saveUserData(data);
            router.push("/profile");
        }
    };

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-slate-900">
            <Meteors />
            <Form onSubmit={handleSubmit(onSubmit)} >
                <h1 className="text-3xl font-semibold">Sign Up</h1>
                <Input register={register("name")} placeholder="Nome" type="text" />
                <Input register={register("username")} placeholder="Nome de usuário" type="text" />
                <Input className={errors.email && "border border-red-600"} register={register("email")} placeholder="Email" type="email" />
                {errors.email && (<p className="text-sm text-red-600 w-full text-left">{errors.email.message}</p>)}
                <div className="cursor-pointer relative flex justify-between items-center w-full">
                    <Input className={errors.password && "border border-red-600"} register={register("password")} placeholder="Senha" type={isVisible ? "text" : "password"} />
                    <span className="absolute right-3" onClick={handleVisibility}>{isVisible ? (<FaEye size={20} />) : (<FaEyeSlash size={20} />)}</span>
                </div>
                {errors.password && (<p className="text-sm text-red-600 w-full text-left">{errors.password.message}</p>)}
                <button type="submit" className="w-full bg-cyan-700 py-3 rounded hover:opacity-90 active:opacity-80">Cadastrar</button>
                <p className="text-right text-sm text-slate-400 w-full">Já possui conta? <Link href="/login" className="text-blue-600">Entrar</Link></p>
            </Form>
        </div>
    )
}