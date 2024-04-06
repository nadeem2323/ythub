"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PiEyeClosed,PiEyeBold } from "react-icons/pi";
import { useState } from "react"
import { FcGoogle } from "react-icons/fc";
export default function Component() {

  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex items-center min-h-screen px-4">
      <div className="mx-auto max-w-[400px] space-y-4">
        <div className="text-center">
          <h1 className="text-5xl py-4 font-bold">Login</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter your email below to login to your account</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email:</Label>
            <Input id="email" placeholder="m@example.com" required type="email" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password:</Label>
              <Link className="ml-auto inline-block text-sm underline" href="#">
                Forgot your password?
              </Link>
            </div>
            <div className="relative">
              <Input

                id="password"
                required
                type={showPassword ? "text" : "password"}
                placeholder="********"
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
          <Button className="w-full" type="submit">
            Login
          </Button>
          <Button className="w-full gap-2" variant="outline" >
           <span><FcGoogle className="w-5 h-5"/> </span>
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don't have an account?&nbsp;
          <Link className="underline" href="/signup">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}

