import { Component, GraduationCap, Handshake, Layers } from 'lucide-react';
import React, { useEffect, useState } from 'react'

function Mission_Career() {

    const [visibleItems, setVisibleItems] = useState(new Set());

    const traits = [
        {
            icon: <Component />,
            title: 'Problem Solvers',
            description: 'You enjoy tackling complex challenges and finding elegant solutions.'
        },
        {
            icon: <Layers />,
            title: 'Team Players',
            description: 'You thrive in collaborative environments and value diverse perspectives.'
        },
        {
            icon: <GraduationCap />,
            title: 'Continuous Learners',
            description: "You're curious by nature and constantly seeking to expand your knowledge."
        },
        {
            icon: <Handshake />,
            title: 'User-Focused',
            description: 'You care deeply about creating exceptional experiences for users.'
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

        const elements = document.querySelectorAll('.trait-item');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);
    return (
        <section className="max-w-7xl mx-auto">
            <div className='mission-section bg-white pt-6 flex max-sm:flex-col justify-between shadow-sm rounded-xl lg:rounded-2xl'>
                <div className="mb-6 lg:mb-0 w-full lg:w-3/5 lg:pl-10 px-4">
                    <h1 className="text-2xl sm:text-3xl md:text-3xl font-medium text-gray-900 mb-2 lg:mb-3">
                        Our Mission
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        At Hidile, we are committed to innovation and excellence in creating productivity tools that are tailored to enhance efficiency. Through continuous research and development, we strive to introduce AI powered tools designed to boost our clients’ performance. Our approach goes beyond merely selling software; we partner with our clients, analyzing their productivity matrices before and after the implementation of our tools, to create customized solutions that generate at least a 20% increase in productivity. Our mission is to empower businesses with resilient, client-centric solutions that drive growth and lasting impact across the globe
                    </p>
                </div>
                <div className="h-[250px] lg:h-[350px] self-end">
                    <img src="/img/mission_career.png" alt="mission_img" className='w-full h-full object-contain' />
                </div>
            </div>

            <div className="mt-12 lg:mt-20">
                {/* Header */}
                <div className="mb-6 lg:mb-8 text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-3xl font-medium text-gray-900 mb-2 lg:mb-3">
                        Who We're Looking For
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        We're building a team of passionate individuals who are excited about creating <br className='max-sm:hidden' />
                        tools that help people work better together
                    </p>
                </div>
                <div className="flex flex-col-reverse max-lg:gap-4 lg:flex-row items-start">
                    {/* Left Content */}
                    <div className="flex-1 flex items-center justify-start px-2">
                        <div className="max-w-2xl w-full">
                            {/* Traits List */}
                            <div className="space-y-6 lg:space-y-7">
                                {traits.map((trait, index) => (
                                    <div
                                        key={index}
                                        data-index={index}
                                        className={`trait-item flex items-center group transition-all duration-700 ${
                                        visibleItems.has(index) 
                                            ? 'opacity-100 translate-x-0' 
                                            : 'opacity-0 -translate-x-8'
                                    }`}
                                    style={{ transitionDelay: `${index * 200}ms` }}
                                    >
                                        {/* Icon */}
                                        <div className="flex-shrink-0 mr-4">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg lg:rounded-2xl flex items-center justify-center text-white group-hover:bg-blue-700 shadow-lg">
                                                {trait.icon}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="">
                                            <h3 className="text-base lg:text-lg font-medium text-gray-900 mb-1 ">
                                                {trait.title}
                                            </h3>
                                            <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                                                {trait.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="lg:flex-1 relative overflow-hidden">
                        <div className="relative h-full">
                            <img
                                src="/img/looking_career.png"
                                alt="Team collaboration"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    // Fallback to a stock team image
                                    e.target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop&auto=format&q=80";
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Custom animations */}
                <style jsx>{`
                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                .animate-slide-in-left {
                    animation: slideInLeft 0.8s ease-out forwards;
                }

                /* Responsive height adjustments */
                @media (max-width: 1024px) {
                    .min-h-screen {
                        min-height: auto;
                    }
                }
                
                @media (max-width: 640px) {
                    .flex-1:last-child {
                        min-height: 50vh;
                    }
                }
            `}</style>
            </div>
        </section>
    )
}

export default Mission_Career