import { loginUser } from '@/lib/apis/server';
import React, { useState } from 'react';


export default function LoginForm() {

//client component for CSR
const [email,setEmail] = useState("");
const [password, setPassword] = useState("");
const [emailError, setEmailError] = useState("");
const [passwordError, setPasswordError] = useState("");

const validateForm = () => {
  if(!email) {
    setEmailError("Email is required!");
    return false;
  } else{
    setEmailError("");
  }

  if(!password) {
    setPasswordError("password is required!");
    return false;
  } else{
    setPasswordError("");
  }

  

  return true;
}

const handleSubmit = async (e) => {
  e.preventDefault();

  const isValid = validateForm();

  if(isValid) {
  //Login form Data Submission
  const login = await loginUser({email: email, password: password});

  console.log("LOGIN RESPONSE", login);
  }
}

  return (
    
      <div className="w-[380px] mx-auto">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg p-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-center text-xl font-semibold text-gray-900">
              Sign in to your account
            </h3>

            <div>
              {" "}
              {/*email section */}
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-900 block mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange= {(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 ring-1 ring-offset-2 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                placeholder="yourname@gmail.com"
              />

            {emailError && <div className="text-red-600 text-xs mt-2 ml-1">{emailError}</div> }  {/*email Error massage */}

            </div>
            <div>
              {" "}
              {/*password section */}
              <label
                htmlFor="password"
                className="text-sm font-semibold text-gray-900 block mb-2"
              >
                Your Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange= {(e) => setPassword(e.target.value)}
                className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-1 focus:ring-offset-2  focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                placeholder="Enter password"
              />

              
            </div>

            {passwordError && <div className="text-red-600 text-xs mt-2 ml-1">{passwordError}</div> } {/*password Error massage */}

            {/*remember me */}
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex place-items-center h-5">
                  <input type="checkbox" id="remember" />
                </div>

                <div className="text-sm ml-3">
                  <label
                    htmlFor="remember"
                    className="font-medium text-gray-500"
                  >
                    Remember Me
                  </label>
                </div>
              </div>

              <a href="/foget-password" className="text-sm text-blue-700 hover:underline ml-auto font-medium">Foget Password</a>
            </div>

            {/*submit button */}
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">Sign In</button>

            <div className="text-sm font-medium text-gray-500 flex justify-center space-x-2">
              <span>Not Registered?</span>
              <a href="#" className="text-blue-700">Create an account</a>
            </div>
          </form>
        </div>
      </div>
    
  )
}
