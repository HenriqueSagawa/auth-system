'use client'

import { getUserData, removeUserData } from "@/services/saveData"
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { FaEye, FaEyeSlash, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function Profile() {

    const router = useRouter()

    const data = getUserData();

    const [isVisible, setVisible] = useState(false);

    function handleVisible() {
        setVisible(!isVisible);
    }

    function hiddenPassword(password: string) {
        return password.split("").map(password => "*").join("");
    }

    if (!data) {
        return router.push("/login");
    }

    return (
        <div className="p-12 w-full">
            <div className="w-full bg-slate-200 rounded p-7 flex flex-col gap-3">
                <Link href="/" className="flex items-center gap-1"><FaArrowLeft/>Voltar</Link>
                <h1 className="text-2xl font-semibold">Bem vindo, {data.name}</h1>
                <p>Bem vindo a sua página pessoal, aqui estão suas informações:</p>

                <p><strong>Nome:</strong> {data.name}</p>
                <p><strong>Nome de usuário:</strong> {data.username}</p>
                <p><strong>Email:</strong> {data.email}</p>
                <p className="flex flex-row items-center gap-2"><strong>Senha: </strong> {isVisible ? (data.password) : (hiddenPassword(data.password))} <button onClick={handleVisible}>{isVisible ? <FaEye /> : <FaEyeSlash />}</button></p>


                <button className="px-3 py-1 w-fit bg-red-600 text-white font-semibold rounded hover:opacity-90" onClick={() => {
                    removeUserData()
                    window.location.reload()
                }}>Sair</button>
            </div>

        </div>
    )
}