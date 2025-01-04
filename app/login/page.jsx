"use client";

import LoginForm from "./login-form";

//server component
export default function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-black">
      <LoginForm/>
    </div>
  );
}
