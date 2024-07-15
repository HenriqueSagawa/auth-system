"use server"

import { User } from "@/models/User";
import prisma from "../../prisma/prisma";

export async function registerUser(user: User) {
    await prisma?.user.create({
        data: user
    })
}

export async function getUser(username: string) {
    const result = await prisma?.user.findFirst({
        where: { username: username },
    });
    return result;
}