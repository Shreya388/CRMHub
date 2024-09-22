import { Input, Button, Checkbox, Link } from "@nextui-org/react";
import logo from "../assets/images/logo.png";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { register } from '../api';
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await register(username, password, email);
            console.log('Registration successful');
            navigate('/');
        } catch (error) {
            console.log('Registration failed');
            console.error('Registration error', error);
        }
    };

    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-indigo-50">
                <div className="w-[25rem] h-[35rem] border-box rounded-2xl bg-white shadow-2xl p-[25px]">
                    <div className="mx-auto mt-4 pb-4">
                        <img src={logo} className="h-8" alt="Logo" />
                        <p className="text-mg font-medium text-slate-500 pt-2 pb-4 animate-pulse">Welcome to crmhub</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <Input
                            isClearable
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            label="Username"
                            placeholder="Enter your username"
                            labelPlacement="outside"
                            className="text-gray"
                            size="md"
                        /><br />

                        <Input
                            isClearable
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            label="Email"
                            placeholder="Enter your Email"
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
        </div>
    );
};

export default Register;
