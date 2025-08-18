import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
    user: string | null;
    isAuthenticated: boolean;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}

export const useAuthStore = create<AuthState>() (
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            login : async (username, password) => {
                if (username === "nico" && password === "12345"){
                    set({user: username, isAuthenticated: true})
                } else{
                    throw new Error("Invalid Credentials");
                }
            },
            logout: () => set({user: null, isAuthenticated: false}),
        }),
        {
            name: "auth-storage",//==> this is the key for localStorage persistence
        }
    )
);