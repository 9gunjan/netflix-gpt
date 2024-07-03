import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
  const [isSignInForm , setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg"
          alt ="background logo"
        />
      </div>
      <form className='w-3/12 my-36 mx-auto right-0 left-0 absolute p-12 bg-black bg-opacity-80 text-white'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}
        <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' / >
        <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
        <button className='p-2 my-4 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
      <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up now" : "Already registered? Sign In now"}</p>
      </form>
    </div>
  )
} 

export default Login;