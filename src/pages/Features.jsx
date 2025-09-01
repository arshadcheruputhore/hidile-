import React from 'react'
import HeroFeatures from '../components/HeroFeatures'
import TaskManagement_Features from '../components/TaskManagement_Features'
import TeamManagement_Features from '../components/TeamManagement_Features'
import ObjectKeyResult_Features from '../components/ObjectKeyResult_Features'
import MoreTools_Features from '../components/MoreTools_Features'
import TrustedBrandsScroll from '../components/TrustedBrandsScroll'
import Testimonials from '../components/Testimonials'

function Features() {
    return (
        <>
            <div className=" ">
                <HeroFeatures />

                <main className="px-3 sm:px-8 md:px-14 lg:px-24 py-8 sm:py-14 lg:py-16">
                    <TaskManagement_Features />

                    <TeamManagement_Features />

                    <ObjectKeyResult_Features />

                    <MoreTools_Features />

                    <TrustedBrandsScroll />

                    <Testimonials />
                </main>
            </div>
        </>
    )
}

export default Features