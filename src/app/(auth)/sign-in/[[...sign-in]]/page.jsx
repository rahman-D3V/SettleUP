import { SignIn } from '@clerk/nextjs'
import React from 'react'

const signIn = () => {
  return (
   <div className="flex justify-center items-center mt-25">
      <SignIn/>
    </div>
  )
}

export default signIn