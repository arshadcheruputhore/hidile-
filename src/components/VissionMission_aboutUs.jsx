import React from 'react'

function VissionMission_aboutUs() {
    return (
        <section className='px-3 sm:px-8 md:px-14 lg:px-32 py-12 sm:py-14 lg:py-18'>
            <div className="max-w-7xl mx-auto">
                <div className="w-full h-auto"><img src="/img/aboutImg_aboutUs.png" alt="about-img" className='w-auto h-auto object-contain ml-2.5 lg:ml-10' /></div>
                <div className="lg:-mt-40 -mt-6">
                    <div className="">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start px-3">
                            {/* Our Vision Card */}
                            <div className="bg-white lg:rounded-2xl lg:rounded-tr-none rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 lg:p-6 border border-gray-100">
                                <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2 lg:mb-4">
                                    Our Vision
                                </h2>
                                <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                                    To be the driving force of digital transformation, Hidile empowers our
                                    clients with cutting-edge technology, delivering resilient solutions
                                    that ensure a minimum 20% increase in productivity. Our unwavering
                                    commitment drives lasting impact for businesses worldwide.
                                </p>
                            </div>

                            {/* Our Mission Card */}
                            <div className="bg-white lg:rounded-2xl lg:rounded-tl-none rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 lg:p-6 border border-gray-100 lg:mt-16">
                                <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2 lg:mb-4">
                                    Our Mission
                                </h2>
                                <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                                    Hidile aims to continously create user-friendly tools that enhance
                                    productivity. We deeply analyze client needs using unique metrics,
                                    customize solutions for each company, and commit until their
                                    objectives are met, guaranteeing lasting operational improvements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VissionMission_aboutUs