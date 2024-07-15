"use server"

import { User } from "@/models/User";
import prisma from "../../prisma/prisma";

export async function registerUser(user: User) {
    try {
        await prisma?.user.create({
            data: user
        })
    } catch (err) {
        console.error(err);
    }
    
}

export async function getUser(username: string) {
    const result = await prisma?.user.findFirst({
        where: { username: username },
    });
    return result;
}