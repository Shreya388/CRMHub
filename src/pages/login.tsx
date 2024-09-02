import { Input, Button, Checkbox, Chip } from "@nextui-org/react"
import { useState } from "react";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";

export default function Login() {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative w-[25rem] h-[30rem] border-box rounded-lg shadow-lg pt-4 pb-4 pl-4 pr-4">
            <h1 className="text-3xl mx-20">Hello There</h1><br />
            <p className="text-xs text-slate-400 pt-4 pb-4">Please sign-in to your account and start the adventure</p>
            <Input
              isRequired
              isClearable
              type="email"
              label="Email or Username"
              placeholder=" "
              labelPlacement="outside"
              onClear={() => console.log("input cleared")}
              className="text-gray"
            /><br />
            
            <Input
              label="Password"
              placeholder=" "
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
            <br />
            <Checkbox defaultSelected color="secondary">Remember Me</Checkbox>
            <br /><br />
            <Button className="w-full bg-violet-500	" color="primary">Sign in</Button>
            <p className="text-xs text-slate-400 text-center mt-4">New on our platform? Create an account</p>
        </div>
        </div>
    )
}