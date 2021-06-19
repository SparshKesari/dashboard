import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/Ai'
import { FiBell } from 'react-icons/Fi'
import { BsChevronCompactDown } from 'react-icons/Bs'
import Test from '../Test'
import UserModal from './UserModal'
import MobileSearchModal from './MobileSearchModal'
import { IconContext } from 'react-icons'

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [isInputMode, setisInputMode] = useState(false)

  return (
    <IconContext.Provider>
      <div className='w-full md:w-10/12 top-0 pt-5 h-screen space-y-10 overflow-hidden'>
        <div className='px-2 md:px-10'>
          <div className='flex m-auto justify-between'>
            <button
              onClick={() => setisInputMode(true)}
              className='focus:outline-none md:hidden'
            >
              <AiOutlineSearch className='flex text-3xl text-gray-500' />
            </button>
            {isInputMode && (
              <MobileSearchModal setisInputMode={setisInputMode} />
            )}
            <div
              id='searchbar'
              className='hidden md:flex w-96 border-2 rounded-2xl place-items-center px-2 space-x-2 overflow-hidden bg-gray-100 focus-within:bg-gray-50'
            >
              <AiOutlineSearch className='flex mt-1 text-2xl text-gray-500' />
              <div className='h-full w-full place-items-center'>
                <input
                  className='flex-1 focus:outline-none h-full w-full bg-gray-100 focus-within:bg-gray-50 font-semibold text-gray-500 p-0'
                  type='text'
                  placeholder='Type in to Search...'
                />
              </div>
            </div>
            <div
              id=''
              className='flex gap-4 justify-between place-items-center'
            >
              <a href='#' id='bell' className='flex'>
                <FiBell className='text-2xl md:text-3xl animate-pulse' />
              </a>
              <div id='dropdown'>
                <div className='w-max ring-2 ring-indigo-400 p-0.5 object-contain rounded-full'>
                  <img
                    id='userImage'
                    src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
                    className='rounded-full w-12  h-12  object-cover'
                  />
                </div>
              </div>
              <button
                className='group flex text-lg font-semibold place-items-center gap-1 focus:outline-none'
                onClick={() => setModalOpen(!isModalOpen)}
              >
                <p className='group-hover:text-gray-500'>Jane Doe</p>
                <BsChevronCompactDown className='text-lg font-semibold group-hover:text-gray-500' />
                {isModalOpen && <UserModal />}
              </button>
            </div>
          </div>
        </div>
        <div className='h-screen pb-28'>
          <Test />
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default Navbar
