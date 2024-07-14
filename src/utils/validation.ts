import { User } from "@/models/User";

let users: User[] = [];

export function validateName(name: string): boolean {
    return name.trim().length > 3;
}

export function validateUsername(username: string): boolean {
    return username.length > 6 && username.length < 15;
}

export function validatePassword(password: string): boolean {
    return password.length > 8;
}

export function validateEmail(email: string): boolean {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

export function findUser(username: string): boolean {
    return users.some(user => user.username === username);
}