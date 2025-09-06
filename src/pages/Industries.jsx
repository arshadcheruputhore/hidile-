import React from 'react'
import HeroIndustries from '../components/HeroIndustries'
import TrustedBrandsScroll from '../components/TrustedBrandsScroll'
import Testimonials from '../components/Testimonials'
import HidileOKRDrivesSuccess_Industries from '../components/HidileOKRDrivesSuccess_Industries'
import CAFirms_Industries from '../components/CAFirms_Industries'
import StreamlinedWorkflowSection from '../components/StreamlinedWorkflow_Industries'
import AutomatesDailyTasks_Industries from '../components/AutomatesDailyTasks_Industries'
import GSTTaxManagement_Industries from '../components/GSTTaxManagement_Industries'
import Statistics_Industries from '../components/Statistics_Industries'
import OfficeManagement_Industries from '../components/OfficeManagement_Industries'

function Industries() {
    return (
        <div>
            <>
                <div className="">
                    <HeroIndustries />

                    <main className="px-3 sm:px-8 md:px-14 lg:px-32 py-10 sm:py-14 lg:py-16">

                        <CAFirms_Industries />

                    </main>

                    <HidileOKRDrivesSuccess_Industries />

                    <main className="px-3 sm:px-8 md:px-14 lg:px-32 py-8 sm:py-14 lg:py-16">

                        <StreamlinedWorkflowSection />

                        <AutomatesDailyTasks_Industries />

                    </main>

                    <GSTTaxManagement_Industries />

                    <Statistics_Industries />

                    <main className="px-3 sm:px-8 md:px-14 lg:px-32 py-8 sm:py-14 lg:py-16">

                        <OfficeManagement_Industries />

                        <TrustedBrandsScroll />

                        <Testimonials />
                    </main>
                </div>
            </>
        </div>
    )
}

export default Industries