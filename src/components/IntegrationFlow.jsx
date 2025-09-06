import React from 'react'

function IntegrationFlow() {
    return (
        <>
            {/* Integration Flow */}
            <div className="mt-16 sm:mt-20 max-w-7xl mx-auto">
                <div className="text-base font-medium text-blue-600 tracking-wide bg-blue-100 flex justify-self-center py-1 px-6 rounded-3xl max-sm:px-5 max-sm:text-sm max-sm:mb-6">Integrate</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 sm:gap-6 place-items-center">
                    {/* Left image */}
                    <div className="sm:mb-10 max-sm:hidden">
                        <img
                            src="/img/integrate-left.png"
                            alt="Integrations illustration (left)"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Text */}
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl font-semibold md:text-4xl text-gray-900 mb-2.5 sm:mb-4 leading-tight"> Integrate Your Favorite <br className="max-sm:hidden" /> Tools <br className="sm:hidden" /> With Hidile OKR </h1>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base"> Already managing teams across multiple applications or tools? Don’t worry—you don’t even need to learn how to integrate; we’ll handle it for you. </p>
                    </div>

                    {/* Mobile image */}
                    <div className="w-full sm:hidden">
                        <img
                            src="/img/integrate-flow-mobile.png"
                            alt="Integrations illustration (mobile)"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Right image */}
                    <div className="max-sm:hidden">
                        <img
                            src="/img/integrate-right.png"
                            alt="Integrations illustration (right)"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntegrationFlow;