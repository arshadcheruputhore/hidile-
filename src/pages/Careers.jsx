import React from 'react'
import Mission_Career from '../components/Mission_Career'
import Benefits_Career from '../components/Benefits_Career'
import JobOpenings_Career from '../components/JobOpenings_Career'

function Careers() {

  return (
    <div className='px-3 sm:px-8 md:px-14 lg:px-32 py-8 sm:py-14 lg:py-18'>
      <Mission_Career />

      <Benefits_Career />

      <JobOpenings_Career />
    </div>
  )
}

export default Careers