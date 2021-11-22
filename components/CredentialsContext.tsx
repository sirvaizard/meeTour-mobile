import { createContext } from "react";

interface Credentials{
    storedCredentials: {token: string},
    setStoredCredentials: (credentials: any) => void
}

export const CredentialsContext = createContext<Credentials>(
    {
        storedCredentials: {token: ""},
        setStoredCredentials: (credentials: any) => {}
    }
);