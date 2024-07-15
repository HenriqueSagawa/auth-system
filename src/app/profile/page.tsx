'use client'

import { getUserData, removeUserData } from "@/services/saveData"
import { useEffect } from "react";
import { useRouter } from 'next/navigation'

export default function Profile() {

    const router = useRouter()

    const data = getUserData();

    if (!data) {
        return router.push("/login");
    }

    return (
        <div>
            <h1>Profile Page</h1>
            <p>Welcome to your profile page!</p>

            <p>{data.username}</p>

            <button onClick={() => {
                removeUserData()
                window.location.reload()
            }}>Sair</button>
        </div>
    )
}