import React, { useState, useEffect, useRef } from 'react';

function MoreTools_Features() {
    const [activeSection, setActiveSection] = useState(0);
    const [isUserInteracting, setIsUserInteracting] = useState(false);
    const [progressFill, setProgressFill] = useState(0);
    const autoScrollIntervalRef = useRef(null);
    const progressIntervalRef = useRef(null);

    const teamFeatures = [
        {
            id: 0,
            title: "Templates",
            description: "Alert your teammates when you tag them or assign a task so everyone stays on top of progress.",
            image: "/img/team-features.png"
        },
        {
            id: 1,
            title: "Files",
            description: "Easily get back to recent spaces, in-progress work, and drafts, and stay updated",
            image: "/img/okr-tasks.png"
        },
        {
            id: 2,
            title: "Calendar",
            description: "Easily get back to recent spaces, in-progress work, and drafts, and stay updated",
            image: "/img/okr-files.png"
        },
        {
            id: 2,
            title: "Settings",
            description: "Easily get back to recent spaces, in-progress work, and drafts, and stay updated",
            image: "/img/okr-reports.png"
        }
    ];

    // Auto-scroll functionality with progress tracking
    useEffect(() => {
        const startAutoScroll = () => {
            if (autoScrollIntervalRef.current) {
                clearInterval(autoScrollIntervalRef.current);
            }
            if (progressIntervalRef.current) {
                clearInterval(progressIntervalRef.current);
            }

            // Reset progress fill to current position
            const currentProgress = activeSection / (teamFeatures.length - 1);
            setProgressFill(currentProgress);

            if (!isUserInteracting) {
                // Start progress animation
                let startTime = Date.now();
                const duration = 4000; // 4 seconds
                const startProgress = currentProgress;
                const targetProgress = (activeSection + 1) / (teamFeatures.length - 1);

                progressIntervalRef.current = setInterval(() => {
                    const elapsed = Date.now() - startTime;
                    const progress = Math.min(elapsed / duration, 1);

                    // Linear interpolation between start and target progress
                    const currentFill = startProgress + (targetProgress - startProgress) * progress;
                    setProgressFill(currentFill);

                    if (progress >= 1) {
                        clearInterval(progressIntervalRef.current);
                    }
                }, 16); // ~60fps updates
            }

            autoScrollIntervalRef.current = setInterval(() => {
                if (!isUserInteracting) {
                    setActiveSection((prev) => (prev + 1) % teamFeatures.length);
                }
            }, 4000);
        };

        startAutoScroll();

        return () => {
            if (autoScrollIntervalRef.current) {
                clearInterval(autoScrollIntervalRef.current);
            }
            if (progressIntervalRef.current) {
                clearInterval(progressIntervalRef.current);
            }
        };
    }, [isUserInteracting, teamFeatures.length, activeSection]);

    // Handle section click with manual scrolling
    const handleSectionClick = (index) => {
        setIsUserInteracting(true);
        setActiveSection(index);

        // Resume auto-scroll after 8 seconds
        setTimeout(() => {
            setIsUserInteracting(false);
        }, 8000);
    };

    // Auto-scroll with manual positioning
    useEffect(() => {
        if (!isUserInteracting) {
            const scrollToActiveSection = () => {
                const contentContainer = document.querySelector('.scrollable-content');
                const activeElement = contentContainer?.children[activeSection];
                if (activeElement && contentContainer) {
                    const containerHeight = contentContainer.clientHeight;
                    const elementTop = activeElement.offsetTop;
                    const elementHeight = activeElement.scrollHeight;

                    // Check if element fits in view, if not scroll to show it
                    const currentScroll = contentContainer.scrollTop;
                    const elementBottom = elementTop + elementHeight;
                    const viewBottom = currentScroll + containerHeight;

                    if (elementBottom > viewBottom || elementTop < currentScroll) {
                        contentContainer.scrollTo({
                            top: Math.max(0, elementTop - 20),
                            behavior: 'smooth'
                        });
                    }
                }
            };

            // Small delay to allow description to expand before scrolling
            setTimeout(scrollToActiveSection, 100);
        }
    }, [activeSection, isUserInteracting]);

    return (
        <>
            <section className='my-10 sm:my-20 px-2 lg:px-8'>
                {/* Team Management - Fixed Height Container */}
                <div className="overflow-hidden rounded-xl bg-[#FFF] shadow-[0_2.643px_2.643px_0_rgba(0,0,0,0.25)] backdrop-blur-[0.6606px] flex flex-col lg:flex-row items-center col-span-full">
                    {/* Container Header - Spans full width */}
                    <div className="w-full px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-2 lg:absolute lg:top-0 lg:left-0 lg:z-10 flex flex-col lg:flex-row items-start justify-between lg:items-center">
                        <h3 className="text-lg lg:text-2xl tracking-wide font-semibold text-gray-800">
                            More Tools to Power Your<br /> Productivity
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm leading-5 mt-1">
                            Set your workflow on autopilot and let repetitive actions happen <br className='max-lg:hidden'/> automatically.
                        </p>
                    </div>

                    {/* Left Content Area - Scrollable Fixed Height */}
                    <div className="relative w-full lg:w-1/2 h-[330px] sm:h-[500px] lg:h-[500px] px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex lg:pt-28">
                        {/* Progress Bar Container */}
                        <div className="flex flex-col items-center mr-4 sm:mr-6 h-full">
                            {/* Top spacing */}
                            <div className="h-0 sm:h-6 lg:h-6"></div>

                            {/* Progress Bar - Increased height */}
                            <div className="relative flex-1 flex items-center">
                                <div className="relative h-full w-full flex flex-col justify-start" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
                                    {/* Background Bar - Increased width for better visibility */}
                                    <div
                                        className="absolute left-1/2 w-1.5 bg-gray-300 rounded-full transform -translate-x-1/2"
                                        style={{
                                            top: '1rem',
                                            height: `calc(100% - 2rem)`
                                        }}
                                    />

                                    {/* Animated Progress Fill with loading effect */}
                                    <div
                                        className="absolute left-1/2 w-1.5 rounded-full transform -translate-x-1/2 transition-all duration-1000 ease-out"
                                        style={{
                                            top: '1rem',
                                            height: teamFeatures.length > 1
                                                ? `calc((100% - 2rem) * ${activeSection / (teamFeatures.length - 1)})`
                                                : '0%',
                                            background: 'linear-gradient(180deg, #374151 0%, #4B5563 50%, #374151 100%)',
                                            boxShadow: '0 0 8px rgba(55, 65, 81, 0.3)'
                                        }}
                                    >
                                        {/* Loading shimmer effect */}
                                        <div
                                            className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-30 rounded-full"
                                            style={{
                                                animation: 'shimmer 2s ease-in-out infinite'
                                            }}
                                        />
                                    </div>

                                    {/* Topic Indicator Buttons */}
                                    <div className="relative h-full flex flex-col justify-between">
                                        {teamFeatures.map((_, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-center"
                                            >
                                                <button
                                                    onClick={() => handleSectionClick(index)}
                                                    className="relative z-10 flex items-center justify-center transition-all duration-300 group"
                                                    title={`Go to ${teamFeatures[index].title}`}
                                                >
                                                    <div
                                                        className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${index === activeSection
                                                            ? 'bg-gray-800 border-gray-900 scale-125 shadow-lg ring-2 ring-gray-400 ring-opacity-30'
                                                            : index < activeSection
                                                                ? 'bg-gray-700 border-gray-700 hover:scale-110 shadow-md'
                                                                : 'bg-white border-gray-400 hover:border-gray-600 hover:scale-110 group-hover:shadow-md'
                                                            }`}
                                                    />

                                                    {/* Pulse effect for active button */}
                                                    {index === activeSection && (
                                                        <div className="absolute inset-0 w-4 h-4 bg-gray-600 rounded-full animate-pulse opacity-20"></div>
                                                    )}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Bottom spacing */}
                            <div className="h-4 sm:h-6 lg:h-2"></div>
                        </div>

                        {/* Content Container - Scrollable */}
                        <div className="flex-1 min-w-0 h-full flex flex-col">
                            {/* Mobile header for small screens */}
                            {/* <div className="hidden mb-4">
                                        <h3 className="text-lg sm:text-xl tracking-wide font-semibold text-gray-800 mb-1">
                                            Team Management
                                        </h3>
                                        <p className="text-gray-600 text-xs sm:text-sm leading-5">
                                            Set your workflow on autopilot and let repetitive actions happen automatically.
                                        </p>
                                    </div> */}

                            {/* Scrollable Content Area */}
                            <div
                                className="scrollable-content flex-1 overflow-y-auto pr-2 space-y-4 sm:space-y-6 lg:mt-10 mt-3"
                                style={{
                                    scrollbarWidth: 'none',
                                    msOverflowStyle: 'none'
                                }}
                            >
                                <style jsx>{`
                                            .scrollable-content::-webkit-scrollbar {
                                                display: none;
                                            }
                                            
                                            @keyframes shimmer {
                                                0% { transform: translateY(-100%); }
                                                100% { transform: translateY(400%); }
                                            }
                                        `}</style>

                                {teamFeatures.map((feature, index) => (
                                    <div
                                        key={feature.id}
                                        className={`cursor-pointer transition-all duration-500 ease-in-out ${index ? 'mt-10 max-sm:mt-8' : 'max-sm:mb-10'}`}
                                        onClick={() => handleSectionClick(index)}
                                    >
                                        <h2
                                            className={`font-semibold text-gray-800 transition-all duration-400 mb-2 leading-tight ${index === activeSection
                                                ? 'text-sm sm:text-base lg:text-base opacity-100 '
                                                : 'text-sm sm:text-base lg:text-base opacity-60 hover:opacity-80'
                                                }`}
                                        >
                                            {feature.title}
                                        </h2>

                                        <div
                                            className={`overflow-hidden transition-all duration-600 ease-in-out ${index === activeSection
                                                ? 'max-h-96 opacity-100 mt-3 mb-6'
                                                : 'max-h-0 opacity-0 mt-0'
                                                }`}
                                        >
                                            <p className="text-gray-600 text-xs sm:text-sm lg:text-sm leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                                {/* Extra space at bottom for better scrolling */}
                                <div className="h-8"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Area - Responsive Height */}
                    <div className="w-full h-[200px] sm:h-[400px] lg:w-1/2 lg:h-[380px] relative lg:pr-7 max-sm:px-3 self-end ">
                        <div className="w-full h-full relative overflow-hidden">
                            {/* Image Display */}
                            {teamFeatures.map((feature, index) => (
                                <div
                                    key={feature.id}
                                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === activeSection
                                        ? 'opacity-100 transform translate-x-0 scale-100'
                                        : 'opacity-0 transform translate-x-full scale-95'
                                        }`}
                                >
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-contain drop-shadow-xl"
                                    />
                                </div>
                            ))}

                            {/* Background overlay */}
                            {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-30" /> */}
                        </div>
                    </div>

                    {/* Mobile Navigation Dots */}
                    <div className="lg:hidden flex justify-center space-x-3 py-6 px-4">
                        {teamFeatures.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleSectionClick(index)}
                                className={`transition-all duration-600 rounded-full ${index === activeSection
                                    ? 'bg-gray-800 w-8 h-2'
                                    : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default MoreTools_Features;