'use client'

import { User } from "@/models/User";


export function saveUserData(userData: User) {
    localStorage.setItem('userData', JSON.stringify(userData));
}

export function getUserData() {
    return getStorageValue("userData", null);

}

export function removeUserData() {
    localStorage.removeItem('userData');
}

function getStorageValue(key: any, defaultValue: any) {
    // getting stored value
    if (typeof window !== "undefined") {
        const saved = localStorage.getItem(key);
        const initial = saved !== null ? JSON.parse(saved) : defaultValue;
        return initial;
    }
}