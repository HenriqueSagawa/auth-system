"use server";

import { User } from "@/models/User";
import prisma from "../../prisma/prisma";

export async function findUser(username: string) {
    const result = await prisma?.user.findFirst({
        where: { username: username },
    });
    return result;
}