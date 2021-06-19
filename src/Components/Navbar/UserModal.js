import React from 'react'
import { BiUserCircle, BiLogOutCircle } from 'react-icons/Bi'
import { IconContext } from 'react-icons'

const UserModal = () => {
  return (
    <IconContext.Provider>
      <div className='z-30 absolute '>
        <ul className='relative top-14 ml-2 right-0 bg-opacity-50 backdrop-filter backdrop-blur-xl p-3 shadow-2xl rounded-xl divide-y-2 text-base place-items-center'>
          <li className='flex place-items-center gap-1 hover:bg-opacity-50'>
            <BiUserCircle />
            <p>Profile</p>
          </li>
          <li className='flex place-items-center gap-1 hover:bg-opacity-50'>
            <BiLogOutCircle className='text-red-400' />
            <p>Sign Out</p>
          </li>
        </ul>
      </div>
    </IconContext.Provider>
  )
}

export default UserModal
