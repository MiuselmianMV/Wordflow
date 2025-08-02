import React from "react";
import LoginForm from "../components/Auth/LoginForm.jsx";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#f0fdf4] to-[#d9f99d]">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>
                <LoginForm />
            </div>
        </div>
    );
}
