import React, { createContext, useState, ReactNode } from 'react';

// Define los tipos para el contexto
interface UserContextType {
    update: boolean;
    setUpdate: (update: boolean) => void;
}

// Crea el contexto con un valor inicial indefinido
const UserContext = createContext<UserContextType>({} as UserContextType);

// Define el tipo de los props para el proveedor
interface UserProviderProps {
    children: ReactNode;
}

// Define el proveedor del contexto
const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [update, setUpdate] = useState<boolean>(false);

    const data: UserContextType = {
        update, setUpdate
    };

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    );
}

export { UserProvider, UserContext };
