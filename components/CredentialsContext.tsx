import { createContext } from "react";

interface Credentials{
    storedCredentials: {token: string, id: string},
    setStoredCredentials: (credentials: any) => void
}

export const CredentialsContext = createContext<Credentials>(
    {
        storedCredentials: {token: "", id: ""},
        setStoredCredentials: (credentials: any) => {}
    }
);