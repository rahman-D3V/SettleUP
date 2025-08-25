import { SignIn } from '@clerk/nextjs'
import React from 'react'

const signIn = () => {
  return (
   <div className="min-h-screen relative bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 flex items-center justify-center p-4">
      <SignIn/>
    </div>
  )
}

export default signIn