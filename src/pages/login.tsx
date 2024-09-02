import { Input, Button, Checkbox, Chip } from "@nextui-org/react"
import { useState } from "react";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
// import logo from "../assets/images/logo.svg";
import logo from "../assets/images/logo.png";

export default function Login() {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <div className="flex items-center justify-center min-h-screen bg-indigo-50">
            <div className="w-[25rem] h-[30rem] border-box rounded-2xl bg-white shadow-2xl p-[25px]">
                <div className="mx-auto mt-4 pb-4">
                    <img src={logo} className="h-8" />
                    <p className="text-mg font-medium text-slate-500 pt-2 pb-4">Welcome to crmhub</p>
                    {/* <p className="text-md font-medium text-slate-600 pb-4">Please sign-in to your account</p> */}
                </div>
                <Input
                    isRequired
                    isClearable
                    type="email"
                    label="Email"
                    placeholder="Enter your email address"
                    labelPlacement="outside"
                    onClear={() => console.log("input cleared")}
                    className="text-gray"
                    size="md"
                /><br />

                <Input
                    label="Password"
                    placeholder="Enter your email address"
                    labelPlacement="outside"
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                            {isVisible ? (
                                <VscEyeClosed className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                                <VscEye className="text-2xl text-default-400 pointer-events-none" />
                            )}
                        </button>
                    }
                    type={isVisible ? "text" : "password"}
                    size="md"
                />
                <Checkbox defaultSelected color="secondary" className="mt-4">Remember Me</Checkbox>
                <Button className="w-full bg-violet-500	mt-4" color="primary">Sign in</Button>
                <p className="text-xs text-slate-400 text-center mt-4">New on our platform? Create an account</p>
            </div>
        </div>
    )
}