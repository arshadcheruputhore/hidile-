import React, { useState, useEffect } from 'react';

const LocationMap_AboutUs = () => {
    const [visiblePointers, setVisiblePointers] = useState(new Set());

    // Define office locations with approximate positions on the map
    const officeLocations = [
        { id: 1, name: 'UK Office', x: '48%', y: '29%', delay: '0s' },
        { id: 2, name: 'India Office', x: '67%', y: '60%', delay: '0.5s' },
        { id: 3, name: 'Qatar Office', x: '61%', y: '50%', delay: '1s' }
    ];

    useEffect(() => {
        // Animate pointers appearing one by one
        officeLocations.forEach((location, index) => {
            setTimeout(() => {
                setVisiblePointers(prev => new Set([...prev, location.id]));
            }, index * 800);
        });
    }, []);

    return (
        <div className="mt-12 lg:mt-16 pb-6 lg:pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-6 lg:mb-8">
                    <h1 className="text-xl sm:text-3xl md:text-3xl font-medium text-gray-900 mb-2 lg:mb-3">
                        We're here for you,<br />
                        no matter where you are
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                        No matter where your journey begins, we stand beside you with the tools,<br className="hidden sm:block" />
                        technology, and guidance you need to grow and succeed.
                    </p>
                </div>

                {/* Map Container */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Map Background */}
                    <div className="relative w-full aspect-[16/10] sm:aspect-[20/7] lg:aspect-[24/10] rounded-2xl overflow-hidden">
                        <img 
                            src="/img/map_AboutUs.png" 
                            alt="Global Map"
                            className="w-full h-full object-contain object-center"
                            onError={(e) => {
                                // Fallback to a subtle dotted world map pattern
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                            }}
                        />
                        
                        {/* Fallback Dotted Map Pattern */}
                        <div 
                            className="absolute inset-0 hidden bg-gradient-to-br from-gray-100 to-gray-200"
                            style={{
                                backgroundImage: `
                                    radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                                    radial-gradient(circle at 25% 35%, rgba(156, 163, 175, 0.3) 1px, transparent 1px),
                                    radial-gradient(circle at 45% 25%, rgba(156, 163, 175, 0.2) 1px, transparent 1px),
                                    radial-gradient(circle at 70% 55%, rgba(156, 163, 175, 0.3) 1px, transparent 1px),
                                    radial-gradient(circle at 85% 75%, rgba(156, 163, 175, 0.2) 1px, transparent 1px)
                                `,
                                backgroundSize: '4px 4px, 3px 3px, 5px 5px, 4px 4px, 3px 3px'
                            }}
                        />

                        {/* Animated Location Pointers */}
                        {officeLocations.map((location) => (
                            <div
                                key={location.id}
                                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
                                    visiblePointers.has(location.id) 
                                        ? 'opacity-100 scale-100' 
                                        : 'opacity-0 scale-0'
                                }`}
                                style={{
                                    left: location.x,
                                    top: location.y,
                                    animationDelay: location.delay
                                }}
                            >
                                {/* Pulsing Ring Animation */}
                                <div className="absolute inset-0 animate-ping">
                                    <div className="w-8 h-8 bg-blue-500 rounded-full opacity-30"></div>
                                </div>
                                
                                {/* Secondary Pulse */}
                                <div 
                                    className="absolute inset-0 animate-pulse"
                                    style={{ animationDuration: '2s' }}
                                >
                                    <div className="w-6 h-6 bg-blue-400 rounded-full opacity-50 m-1"></div>
                                </div>
                                
                                {/* Main Pointer */}
                                <div className="relative w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg m-2 animate-bounce">
                                    {/* Inner Glow */}
                                    <div className="absolute inset-0 bg-blue-400 rounded-full animate-pulse opacity-80"></div>
                                </div>
                                
                                {/* Location Label - Hidden on mobile */}
                                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 hidden sm:block">
                                    <div className="bg-blue-600 text-white px-2.5 py-1 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
                                        {location.name}
                                        {/* Arrow */}
                                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-600 rotate-45"></div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Connecting Lines Animation */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            <defs>
                                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                                    <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
                                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                                </linearGradient>
                            </defs>
                            
                            {/* Animated connecting lines */}
                            <path
                                d="M 48% 35% Q 59% 45% 70% 55%"
                                stroke="url(#lineGradient)"
                                strokeWidth="2"
                                fill="none"
                                className="animate-pulse opacity-40"
                                strokeDasharray="5,5"
                                style={{ animationDuration: '3s' }}
                            />
                            <path
                                d="M 70% 55% Q 77% 65% 85% 75%"
                                stroke="url(#lineGradient)"
                                strokeWidth="2"
                                fill="none"
                                className="animate-pulse opacity-40"
                                strokeDasharray="5,5"
                                style={{ animationDuration: '3s', animationDelay: '1s' }}
                            />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0.3; }
                }
                
                @keyframes ripple {
                    0% {
                        transform: scale(0);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
                
                .animate-blink {
                    animation: blink 2s infinite;
                }
                
                .animate-ripple {
                    animation: ripple 2s infinite;
                }
                
                @media (max-width: 640px) {
                    .aspect-ratio-mobile {
                        aspect-ratio: 16 / 12;
                    }
                }
            `}</style>
        </div>
    );
};

export default LocationMap_AboutUs;