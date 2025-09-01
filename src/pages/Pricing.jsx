import React from 'react'
import HeroPricing from '../components/HeroPricing'
import PricingCard_Pricing from '../components/PricingCard_Pricing'
import FAQ from '../components/FAQ_services'

function Pricing() {
    return (
        <>
            <HeroPricing />

            <div className="px-3 sm:px-8 md:px-14 lg:px-32 pb-14 sm:pb-14 lg:pb-18">
                <PricingCard_Pricing />

                <FAQ />
            </div>
        </>
    )
}

export default Pricing