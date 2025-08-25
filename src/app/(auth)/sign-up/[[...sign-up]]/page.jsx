import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 flex items-center justify-center p-4">
<SignUp />

     
    </div>
  )
};


export default SignUpPage;