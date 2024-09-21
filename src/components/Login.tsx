import { Input, Button, Checkbox, Link } from "@nextui-org/react";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api';
import { useAuth } from '../context/AuthContext';
import logo from "../assets/images/logo.png";
import { VscEye, VscEyeClosed } from "react-icons/vsc";


const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setToken } = useAuth();
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted');
        console.log('Username:', username);
        console.log('Password:', password);
    
        try {
            const token = await login(username, password);
            setToken(token);
            alert('Login successful');
            navigate('/register');
        } catch (error) {
            alert('Login failed');
            console.error('Login error:', error);
        }
    };

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <div className="flex items-center justify-center min-h-screen bg-indigo-50">
            <div className="w-[25rem] h-[30rem] border-box rounded-2xl bg-white shadow-2xl p-[25px]">
                <div className="mx-auto mt-4 pb-4">
                    <img src={logo} className="h-8" alt="Logo" />
                    <p className="text-mg font-medium text-slate-500 pt-2 pb-4 animate-pulse">Welcome to crmhub</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <Input
                        isClearable
                        onChange={(e) => setUsername(e.target.value)}
                        type="email"
                        label="Username"
                        placeholder="Enter your username"
                        labelPlacement="outside"
                        className="text-gray"
                        size="md"
                    /><br />

                    <Input
                        label="Password"
                        placeholder="Enter your password"
                        labelPlacement="outside"
                        onChange={(e) => setPassword(e.target.value)}
                        endContent={
                            <button
                                type="button"
                                onClick={toggleVisibility}
                                aria-label="Toggle password visibility"
                                className="focus:outline-none"
                            >
                                {isVisible ? (
                                    <VscEyeClosed className="text-2xl text-default-400" />
                                ) : (
                                    <VscEye className="text-2xl text-default-400" />
                                )}
                            </button>
                        }
                        type={isVisible ? "text" : "password"}
                        size="md"
                    />
                    <Checkbox defaultSelected color="secondary" className="mt-4">Remember Me</Checkbox>
                    <Button
                        type="submit"
                        className="w-full bg-violet-500 mt-4"
                        color="primary"
                    >
                        Sign in
                    </Button>
                    
                    <p className="text-xs text-slate-400 text-center mt-4">
                        New on our platform? <Link href="/register" className="text-violet-500">Create an account</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
