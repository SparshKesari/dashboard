import React from 'react'
import { MdLocalDrink } from 'react-icons/Md'

import { IconContext } from 'react-icons'

const ChallengeSection = () => {
  return (
    <IconContext.Provider>
      <div className='space-y-3'>
        <div className='flex justify-start'>
          <p className='font-semibold text-xl tracking-wide'>Challenge</p>
        </div>
        <div className='flex relative bg-gradient-to-r from-white to-white lg:to-transparent rounded-xl overflow-hidden h-full shadow-xl hover:shadow-md'>
          <div
            id='challenge-text'
            className='flex flex-col w-full lg:w-1/2 max-w-lg p-10 space-y-5 z-10'
          >
            <p className='flex text-2xl font-semibold place-items-center gap-2 text-indigo-500'>
              <MdLocalDrink />
              Early Morning Smoothie
            </p>

            <p className='font-semibold'>
              Start your day with energy. For breakfast, prepare a powerful and
              healthy smoothie rich in potassium and, vitamin C. It will boost
              your metabolism.
            </p>
            <h3 className='font-bold text-md'>RECIPE:</h3>
            <div className='flex flex-col md:flex-row place-items-center divide-y-2 md:divide-y-0 md:divide-x-2 divide-solid'>
              <ul className='list-inside list-disc font-semibold text-gray-700 text-sm w-full md:w-1/2 pb-3 md:pb-none'>
                <li>130 g banana</li>
                <li>1 wholekiwi</li>
                <li>250 mL orange juice</li>
                <li>3 spoons of yoghurt</li>
              </ul>
              <div className='text-indigo-500 font-semibold text-3xl w-full md:w-1/2 p-4'>
                420 <span className='text-xl'>cal</span>
              </div>
            </div>
            <br />
            <div className='w-full md:w-3/4 flex flex-wrap md:flex-nowrap gap-4 md:gap-1 place-items-center'>
              <button className='m-auto bg-black mix-blend-darken text-white rounded-full uppercase p-2 px-4 text-xs font-bold tracking-widest leading-5 hover:bg-gray-800 focus:outline-none'>
                Add Challege
              </button>
              <a
                href='/'
                className='m-auto font-bold text-sm text-green-500 uppercase tracking-wider hover:text-green-800 focus:outline-none'
              >
                Challenge Friend
              </a>
            </div>
          </div>
          <div className='object-scale-down hidden lg:flex'>
            <img
              src='/asset/smoothie.png'
              className='absolute right-0 filter mix-blend-darken'
            />
          </div>
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default ChallengeSection
