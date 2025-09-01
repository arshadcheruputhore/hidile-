import React from 'react'
import HeroService from '../components/HeroService'
import TrustedBrandsScroll from '../components/TrustedBrandsScroll'
import Testimonials from '../components/Testimonials'
import SeeOurServices from '../components/SeeOurServices'
import FAQ from '../components/FAQ_services'

function Services() {
    return (
        <>
            <div className="">
                <HeroService />
                <main className="px-3 sm:px-8 md:px-14 lg:px-32 py-8 sm:py-12 lg:py-16">
                    <SeeOurServices />

                    <FAQ />

                    <TrustedBrandsScroll />

                    <Testimonials />
                </main>
            </div>
        </>
    )
}

export default Services