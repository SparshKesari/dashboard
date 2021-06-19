import React from 'react'
import DailyMonitoringSection from './IndexPageComponents/DailyMonitoringSection/DailyMonitoringSection'
import DailyTipsSection from './IndexPageComponents/DailyTipsSection/DailyTipsSection'
import ChallengeSection from './IndexPageComponents/ChallengeSection/ChallengeSection'
import RecommendedChallengeSection from './IndexPageComponents/RecommendedChallengeSection/RecommendedChallengeSection'
import { IconContext } from 'react-icons'
const Test = () => {
  return (
    <IconContext.Provider>
      <div className='h-full shadow-lg bg-indigo-50 opacity-80 rounded-2xl p-4 lg:p-10 overflow-y-scroll space-y-10'>
        <DailyMonitoringSection />
        <section className='flex flex-col md:flex-row gap-4'>
          <div className='w-full md:w-1/2 lg:w-3/4'>
            <ChallengeSection />
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4'>
            <DailyTipsSection />
          </div>
        </section>
        <RecommendedChallengeSection />
      </div>
    </IconContext.Provider>
  )
}

export default Test
