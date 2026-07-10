import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AuthContext = createContext();

// Configure axios defaults globally
axios.defaults.baseURL = import.meta.env.VITE_API_URL || "http://localhost:5500";
axios.defaults.withCredentials = true;

let csrfTokenInMemory = "";

// Set up Axios interceptor to dynamically inject the CSRF token
axios.interceptors.request.use(
    (config) => {
        if (csrfTokenInMemory) {
            config.headers["X-CSRF-Token"] = csrfTokenInMemory;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loginStep, setLoginStep] = useState(1); // 1 = Enter Details, 2 = Enter OTP

    // Initialize session check on load
    useEffect(() => {
        const checkSession = async () => {
            try {
                const match = document.cookie.match(/(?:^|; )csrfToken=([^;]*)/);
                if (match) {
                    csrfTokenInMemory = match[1];
                }
                const res = await axios.get("/api/v1/auth/me");
                if (res.data.success) {
                    setUser(res.data.user);
                }
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        checkSession();
    }, []);

    // Register user details and request OTP
    const register = async (name, email, password) => {
        try {
            const res = await axios.post("/api/v1/auth/register", { name, email, password });
            if (res.data.success) {
                toast.success(res.data.message);
                setLoginStep(2); // Go to OTP step
                return true;
            } else {
                toast.error(res.data.message || "Failed to initiate registration");
                return false;
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong during registration");
            return false;
        }
    };

    // Verify OTP and complete registration
    const verifyRegister = async (email, otp) => {
        try {
            const res = await axios.post("/api/v1/auth/verify-register", { email, otp });
            if (res.data.success) {
                csrfTokenInMemory = res.data.csrfToken;
                setUser(res.data.user);
                toast.success(res.data.message);
                setLoginStep(1); // Reset step counter
                return res.data.user;
            } else {
                toast.error(res.data.message || "Invalid OTP");
                return null;
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong during verification");
            return null;
        }
    };

    // Log in directly using email and password
    const login = async (email, password) => {
        try {
            const res = await axios.post("/api/v1/auth/login", { email, password });
            if (res.data.success) {
                csrfTokenInMemory = res.data.csrfToken;
                setUser(res.data.user);
                toast.success(res.data.message);
                return res.data.user;
            } else {
                toast.error(res.data.message || "Invalid credentials");
                return null;
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Invalid email or password");
            return null;
        }
    };

    // Logout session
    const logout = async () => {
        try {
            await axios.post("/api/v1/auth/logout");
            setUser(null);
            csrfTokenInMemory = "";
            toast.success("Logged out successfully");
            window.location.href = "/";
        } catch (error) {
            toast.error("Logout failed. Please try again.");
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, loginStep, setLoginStep, register, verifyRegister, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
