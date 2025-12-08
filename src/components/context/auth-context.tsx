"use client";
import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import api from '@/lib/axios';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    avatar: string;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
    register: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
    logout: () => void;
    isAuthenticated: boolean;
    userDisplayName: string;
    updateUserDisplayName: (name: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [userDisplayName, setUserDisplayName] = useState("");

    const router = useRouter();

    const logout = useCallback(() => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        setUser(null);
        setUserDisplayName("");
        router.push('/');
    }, [router]);

    const isAuthenticated = !!user;

    // Load user on mount
    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('access_token');
            if (token) {
                try {
                    const { data } = await api.get('/auth/profile');
                    setUser(data);

                    // Initializing Display Name (Local Storage)
                    const savedName = localStorage.getItem(`user_name_${data.email}`);
                    setUserDisplayName(savedName || data.name);

                } catch (error) {
                    console.error("Session invalid", error);
                }
            }
            setLoading(false);
        };
        
        // Listen for auth errors from axios interceptor
        const handleAuthError = (event: Event) => {
            const customEvent = event as CustomEvent;
            console.warn("Auth error:", customEvent.detail?.message);
            logout();
        };
        
        window.addEventListener("authError", handleAuthError);
        checkAuth();
        
        return () => window.removeEventListener("authError", handleAuthError);
    }, [logout]);


    // Function to update user display name
    const updateUserDisplayName = (newName: string) => {
        if (!user) return;

        // Update state
        setUserDisplayName(newName);

        // Persist to localStorage
        localStorage.setItem(`user_name_${user.email}`, newName);
    };


    const login = async (email: string, password: string) => {
        try {
            const { data } = await api.post('/auth/login', { email, password });
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('refresh_token', data.refresh_token);

            const profile = await api.get('/auth/profile');
            setUser(profile.data);

            // Set name on login
            const savedName = localStorage.getItem(`user_name_${profile.data.email}`);
            setUserDisplayName(savedName || profile.data.name);

            router.push('/');
            return { success: true };
        } catch (error: unknown) {
            console.error('Login error:', error);
            if (axios.isAxiosError(error)) {
                return {
                    success: false,
                    error: error.response?.data?.message || "Login failed",
                };
            }

            if (error instanceof Error) {
                return {
                    success: false,
                    error: error.message,
                };
            }

            return {
                success: false,
                error: "Something went wrong",
            };
        }
    };

    const register = async (name: string, email: string, password: string) => {
        try {
            const avatarUrl =  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=128`;
            await api.post('/users', { name, email, password, avatar: avatarUrl });
            return { success: true };
        } catch (error: unknown) {
            console.error('Registration error:', error);
            if (axios.isAxiosError(error)) {
                return {
                    success: false,
                    error: error.response?.data?.message || "Registration failed",
                };
            }
            return {
                success: false,
                error: "Something went wrong",
            };
        }
    };

   

    return (
        <AuthContext.Provider value={{ user, loading, isAuthenticated, login, register, logout, userDisplayName, updateUserDisplayName }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};