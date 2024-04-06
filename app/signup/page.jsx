"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PiEyeClosed,PiEyeBold } from "react-icons/pi";
import { useState } from "react"
import Modal from "./components/Modal"
import { FcGoogle } from "react-icons/fc"

export default function Component() {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex items-center min-h-screen px-4">
      <div className="mx-auto max-w-[400px] space-y-4">
        <div className="text-center">
          <h1 className="text-5xl py-4 font-bold">Signup</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter your email below to Signup to your account</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Name :</Label>
            <Input id="email" placeholder="Hello world" required type="email" 
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email :</Label>
            <Input id="email" placeholder="m@example.com" required type="email" 
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password :</Label>
            </div>
            <div className="relative">
              <Input

                id="password"
                required
                type={showPassword ? "text" : "password"}
                placeholder="********"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              >
                {showPassword ? (
                  <PiEyeBold className="h-5 w-5 text-gray-400" />
                ) : (
                  <PiEyeClosed className="h-5 w-5 text-gray-400" />
                )}
              </span>
            </div>
          </div>
          <Button onClick={toggleModal} className="w-full">
          Signup
          </Button>
          <Button className="w-full gap-2" variant="outline" >
           <span><FcGoogle className="w-5 h-5"/> </span>
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account? &nbsp;
          <Link className="underline" href="/login">
            Login
          </Link>
        </div>
      </div>
      <Modal isOpen={isOpen} user={user} onClose={toggleModal} />
    </div>
  )
}

