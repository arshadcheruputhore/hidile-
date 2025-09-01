import React, { useState, useEffect } from 'react';

const JourneyTimeline_AboutUs = () => {
    const [visibleItems, setVisibleItems] = useState(new Set());

    const timelineData = [
        {
            year: '2015',
            title: 'Founded Hidile',
            description: 'The beginning of our vision to build smarter digital solutions.',
            position: 'left'
        },
        {
            year: '2017',
            title: 'Grow Fund Released',
            description: 'Launched our first product, empowering businesses with better financial tools.',
            position: 'right'
        },
        {
            year: '2019',
            title: 'Hidile ECO Platform Released',
            description: 'Expanded our innovation with a comprehensive platform to streamline operations.',
            position: 'left'
        },
        {
            year: '2020',
            title: 'Hidile OKR Released',
            description: 'Introduced OKR solutions to help organizations align goals and measure success.',
            position: 'right'
        },
        {
            year: '2021',
            title: 'UK Office Established',
            description: 'Took our first step into global expansion by opening our office in the UK.',
            position: 'left'
        },
        {
            year: '2022',
            title: 'Investment Raised',
            description: 'Secured growth funding to accelerate our mission and scale new solutions.',
            position: 'right'
        },
        {
            year: '2023',
            title: 'New Corporate Office in Calicut',
            description: 'Strengthened our roots with a modern headquarters to support a growing team.',
            position: 'left'
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index);
                        setVisibleItems(prev => new Set([...prev, index]));
                    }
                });
            },
            { threshold: 0.3 }
        );

        const elements = document.querySelectorAll('.timeline-item');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="px-3 sm:px-8 md:px-14 lg:px-32 mt-12 lg:mt-16">
            <div className="bg-blue-50 py-10 lg:py-14 rounded-2xl">
                {/* Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <h1 className="text-xl sm:text-3xl md:text-3xl font-medium text-gray-900 mb-2 lg:mb-3">
                        Our Journey
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                        A timeline of how Hidile has evolved — fueled by innovation, strengthened by<br className="hidden sm:block" />
                        people, and guided by purpose.
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Main Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 bg-blue-400 h-full hidden lg:block">
                        {/* Animated progress line */}
                        <div
                            className="w-full bg-blue-600 transition-all duration-1000 ease-out"
                            style={{
                                height: `${Math.min((visibleItems.size / timelineData.length) * 100, 100)}%`
                            }}
                        ></div>
                    </div>

                    {/* Mobile Timeline Line */}
                    <div className="absolute left-8 w-0.5 bg-blue-400 h-full lg:hidden">
                        <div
                            className="w-full bg-blue-600 transition-all duration-1000 ease-out"
                            style={{
                                height: `${Math.min((visibleItems.size / timelineData.length) * 100, 100)}%`
                            }}
                        ></div>
                    </div>

                    {/* Timeline Items */}
                    <div className="space-y-6 lg:space-y-10">
                        {timelineData.map((item, index) => (
                            <div
                                key={index}
                                data-index={index}
                                className={`timeline-item relative ${visibleItems.has(index) ? 'animate-fade-in' : 'opacity-0'}`}
                            >
                                {/* Desktop Layout */}
                                <div className="hidden lg:flex lg:items-center lg:relative">
                                    {/* Left Side Content */}
                                    <div className="lg:w-1/2 lg:pr-8 lg:flex lg:justify-end">
                                        {item.position === 'left' && (
                                            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 border border-gray-100 max-w-md relative">
                                                <div className="flex items-center gap-3 mb-3">
                                                    {/* Year Badge */}
                                                    <div className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold ">
                                                        {item.year}
                                                    </div>

                                                    {/* Title */}
                                                    <h3 className="text-base lg:text-lg font-semibold text-blue-600 mb-">
                                                        {item.title}
                                                    </h3>
                                                </div>


                                                {/* Description */}
                                                <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                                                    {item.description}
                                                </p>

                                                {/* Arrow pointing to timeline */}
                                                <div className="absolute top-1/2 -translate-y-1/2 -right-3 w-6 h-6 bg-white transform rotate-45"></div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Timeline Dot */}
                                    <div className="relative z-10 flex-shrink-0">
                                        <div className={`w-4 h-4 bg-blue-600 rounded-full border-4 border-blue-50 transition-all duration-500 ${visibleItems.has(index) ? 'scale-125 shadow-lg' : 'scale-100'
                                            }`}></div>
                                    </div>

                                    {/* Right Side Content */}
                                    <div className="lg:w-1/2 lg:pl-8 lg:flex lg:justify-start">
                                        {item.position === 'right' && (
                                            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 border border-gray-100 max-w-md relative">
                                                <div className="flex items-center gap-3 mb-3">
                                                    {/* Year Badge */}
                                                    <div className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold ">
                                                        {item.year}
                                                    </div>

                                                    {/* Title */}
                                                    <h3 className="text-base lg:text-lg font-semibold text-blue-600 mb-">
                                                        {item.title}
                                                    </h3>
                                                </div>

                                                {/* Description */}
                                                <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                                                    {item.description}
                                                </p>

                                                {/* Arrow pointing to timeline */}
                                                <div className="absolute top-1/2 -translate-y-1/2 -left-3 w-6 h-6 bg-white transform rotate-45"></div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Mobile Layout */}
                                <div className="lg:hidden flex items-start">
                                    {/* Mobile Timeline Dot */}
                                    <div className="relative z-10 flex-shrink-0 mt-8">
                                        <div className={`w-4 h-4 bg-blue-600 rounded-full border-4 border-blue-50 transition-all duration-500 ${visibleItems.has(index) ? 'scale-125 shadow-lg' : 'scale-100'
                                            }`}></div>
                                    </div>

                                    {/* Mobile Content */}
                                    <div className="ml-12 flex-1">
                                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 border border-gray-100 relative">
                                            <div className="flex items-center gap-3 mb-4">
                                                {/* Year Badge */}
                                                <div className="inline-block bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                    {item.year}
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-sm font-semibold text-blue-600">
                                                    {item.title}
                                                </h3>
                                            </div>

                                            {/* Description */}
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {item.description}
                                            </p>

                                            {/* Arrow pointing to timeline */}
                                            <div className="absolute top-6 -left-3 w-6 h-6 bg-white transform rotate-45"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in {
                    animation: fade-in 0.6s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default JourneyTimeline_AboutUs;