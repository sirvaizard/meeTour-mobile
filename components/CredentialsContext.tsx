import { createContext } from "react";

interface Credentials{
    storedCredentials: {token: string, id: number},
    setStoredCredentials: (credentials: any) => void
}

export const CredentialsContext = createContext<Credentials>(
    {
        storedCredentials: {token: "", id: 0},
        setStoredCredentials: (credentials: any) => {}
    }
);