import React from 'react'
import { BiSearchAlt } from 'react-icons/Bi'
import { AiOutlineCloseCircle } from 'react-icons/Ai'
import { IconContext } from 'react-icons'

const MobileSearchModal = ({ setisInputMode }) => {
  return (
    <IconContext.Provider>
      <div className='inset-0 h-screen justify-center z-30 absolute flex bg-gray-500 bg-opacity-20 backdrop-filter backdrop-blur-lg'>
        <button
          onClick={() => {
            setisInputMode(false)
          }}
        >
          <AiOutlineCloseCircle className='absolute top-5 right-5 text-3xl' />
        </button>
        <div
          id='searchbar'
          className='flex w-80 mt-20 h-14 m-auto place-items-center border-2 rounded-2xl px-2 space-x-2 overflow-hidden bg-gray-100 focus-within:bg-gray-50'
        >
          <BiSearchAlt className='flex text-2xl text-gray-500' />
          <input
            className='flex h-32 focus:outline-none bg-gray-100 focus-within:bg-gray-50 font-semibold text-gray-500'
            type='text'
            placeholder='Type in to Search...'
          />
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default MobileSearchModal
