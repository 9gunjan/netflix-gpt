import React from 'react'
import { LOGO } from '../utils/constants'
import { auth } from '../utils/firebase'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/errorPage");
    });
    

  }
  return (
    <div className='absolute w-screen px-32 py-4 z-10 bg-gradient-to-b from-black flex justify-between'>
      <img className='w-48'
        src = {LOGO}
        alt = "Netflix logo"
      />
      {user && <div className='flex p-2'>
      <img 
      className='w-12 h-12 m-5 rounded-lg'
      src={user.photoURL}
      alt=""
      />
      <button className='font-bold text-white'
      onClick={handleSignOut}>Sign out</button>
      </div>}
    </div>

  )
}

export default Header