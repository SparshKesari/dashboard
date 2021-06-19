import React from 'react'
import { Card } from './Card'
import { FaAppleAlt } from 'react-icons/Fa'
import { RiFootprintFill, RiMoonFill } from 'react-icons/Ri'
import { GiWeightLiftingUp } from 'react-icons/Gi'
import { FiChevronRight } from 'react-icons/Fi'
import { IconContext } from 'react-icons'
const CardDetails = [
  {
    color: 'green-300',
    title: 'Calories',
    value: '2814',
    desc: 'DAILY AVERAGE',
    icon: <FaAppleAlt className='text-green-400 text-3xl m-auto' />,
  },
  {
    color: 'pink-300',
    title: 'Steps',
    value: '7234',
    desc: 'DAILY AVERAGE',
    icon: <RiFootprintFill className='text-pink-400 text-3xl m-auto' />,
  },
  {
    color: 'blue-300',
    title: 'Workouts',
    value: '1h 23min',
    desc: 'ACTIVE',
    icon: <GiWeightLiftingUp className='text-blue-400 text-3xl m-auto' />,
  },
  {
    color: 'red-300',
    title: 'Sleeping Analysis',
    value: '7h 35 min',
    desc: 'IN BED AVERAGE',
    icon: <RiMoonFill className='text-red-400 text-3xl m-auto' />,
  },
]
const DailyMonitoringSection = () => {
  return (
    <IconContext.Provider>
      <div className=''>
        <div className='flex justify-between'>
          <h4 className='font-semibold text-xl tracking-wide'>
            Daily Monitoring
          </h4>
          <a
            href='#'
            className='flex text-gray-400 text-sm font-bold place-items-center hover:text-gray-600'
          >
            See Programs <FiChevronRight />
          </a>
        </div>
        <div className='flex flex-wrap lg:flex-nowrap w-full place-content-center md:justify-between m-auto'>
          {CardDetails.map((itemDetail, key) => (
            <Card key={key} cardDetails={itemDetail} />
          ))}
        </div>
      </div>
    </IconContext.Provider>
  )
}
export default DailyMonitoringSection
