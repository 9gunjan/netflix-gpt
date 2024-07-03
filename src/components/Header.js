import React from 'react'
import { LOGO } from '../utils/constants'

const Header = () => {
  return (
    <div className='absolute px-32 py-4 z-10 bg-gradient-to-b from-black'>
      <img className='w-48'
        src = {LOGO}
        alt = "Netflix logo"
      />
    </div>
  )
}

export default Header