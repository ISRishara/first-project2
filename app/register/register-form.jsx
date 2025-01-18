"use client";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToastAction } from "@/components/ui/toast";
import Link from "next/link";
import { registerUser } from "@/lib/apis/server";
import { useToast } from "@/hooks/use-toast";
//import { Span } from "next/dist/trace";

const DEFAULT_ERROR = {
  error: false,
  message: "",
};

//keep this as the client component (functional component)
export default function RegisterForm() {
  const [error, setError] = useState(DEFAULT_ERROR);
  const[isLoading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmitForm = async (event) => {
    event?.preventDefault();
    const formData = new FormData(event?.currentTarget);
    const name = formData.get("name").toString();
    const email = formData.get("email").toString();
    const password = formData.get("password") ?? "";
    const confirmPassword = formData.get("confirm-password") ?? "";

    //console.log("Submitted!", {name, email, password, confirmPassword});

    //basic frontend validation logic

    //if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        setError(DEFAULT_ERROR);
        setLoading(true);

        const registerResp = await registerUser({ name, email, password });
        setLoading(false);

        if(registerResp?.error) {
          setError({ error: true, message: registerResp. error });
        } else{
          toast({
            variant: "success",
            title: "Registration Successful!",
            description: "Please continue with Login",
            action: <ToastAction altText="Login" className="hover:bg-green-600/900">Login</ToastAction>,
          });
        }

      } else {
        setError({ error: true, message: "Password doesn't match" });
      }
    //}

    //console.log("Error!", error);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="bg-white w-[350px]">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Enter Your information to get started
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmitForm}>
          <CardContent>
            <div className="flex-col space-y-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="john Wick" />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter New Password"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  placeholder="Re-Enter Password"
                />
              </div>

              {/* form errors */}
              <div className="flex justify-center">
                {error?.error && (
                  <span className="text-red-600 text-xs text-center">
                    {error.message}
                  </span>
                )}
              </div>

              <div className="flex justify-center gap-1 text-sm text-gray-500">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-600 hover:underline">
                  Login
                </Link>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              className="flex-1 bg-blue-700 hover:bg-blue-800 focus:ring-4"
              type="submit" disabled={isLoading}
            >
            {isLoading && <Loader2 className="animate-spin" />}
              Register
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
