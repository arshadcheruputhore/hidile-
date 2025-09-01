import React from 'react'
import ReachUs_ContactUs from '../components/ReachUs_ContactUs'
import ContactFormSection from '../components/ContactForm_ContactUs'
import ContactForm_ContactUs from '../components/ContactForm_ContactUs'
import Map_ContactUs from '../components/Map_ContactUs'
import VissionMission_aboutUs from '../components/VissionMission_aboutUs'

function ContactUs() {
  return (
    <>
    <div className="px-3 sm:px-8 md:px-14 lg:px-24 py-8 sm:py-14 lg:py-18">
      <ReachUs_ContactUs />

      <ContactForm_ContactUs />
    </div>
    
    <Map_ContactUs />
    </>

  )
}

export default ContactUs