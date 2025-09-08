import React from 'react'
import HeroGetStarted from '../components/HeroGetStarted'
import ReachUs_GetStarted from '../components/ReachUs_GetStarted'

function ContactGetStarted() {
    return (
        <>
           <HeroGetStarted />
            
            <div className='px-4 sm:px-8 md:px-14 lg:px-32 pb-8 sm:pb-14 lg:pb-18'>
                <ReachUs_GetStarted />
            </div>  
        </>
    )
}

export default ContactGetStarted