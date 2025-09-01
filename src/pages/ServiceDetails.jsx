// Services.jsx
import React from 'react'
import AllServices from '../components/AllServices' // This will import the AllServices component
import TrustedBrandsScroll from '../components/TrustedBrandsScroll'
import Testimonials from '../components/Testimonials'
import HeroServiceDetails from '../components/HeroServiceDetails'

function ServiceDetails() {
    return (
        <>
            <div className="bg-[#FCFCFC]">
                <HeroServiceDetails />
                <main className="px-3 sm:px-8 md:px-14 lg:px-32 py-8 sm:py-15 lg:py-20">
                    <AllServices /> {/* This contains both content and sticky sidebar */}

                    <TrustedBrandsScroll />

                    <Testimonials />
                </main>
            </div>
        </>
    )
}

export default ServiceDetails