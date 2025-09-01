import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Shield, Coffee, Heart, CreditCard, Target, Gift, Rocket, Cake, Wallet2 } from 'lucide-react';

const Benefits_Career = () => {
    const [visibleItems, setVisibleItems] = useState(new Set());

    const benefits = [
        {
            icon: <Clock className="lg:w-8 lg:h-8 w-6 h-6" />,
            title: 'Flexible working hours',
        },
        {
            icon: <Calendar className="lg:w-8 lg:h-8 w-6 h-6" />,
            title: '24 days paid vacation',
        },
        {
            icon: <Shield className="lg:w-8 lg:h-8 w-6 h-6" />,
            title: 'Health care Insurance',
        },
        {
            icon: <Target className="lg:w-8 lg:h-8 w-6 h-6" />,
            title: 'Fun team events',
        },
        {
            icon: <Rocket className="lg:w-8 lg:h-8 w-6 h-6" />,
            title: 'Professional grow budget',
        },
        {
            icon: <Heart className="lg:w-8 lg:h-8 w-6 h-6" />,
            title: 'Remote work options',
        },
        {
            icon: <Wallet2 className="lg:w-8 lg:h-8 w-6 h-6" />,
            title: 'Competitive salary',
        },
        {
            icon: <Coffee className="lg:w-8 lg:h-8 w-6 h-6" />,
            title: 'Team Retreats',
        },
        {
            icon: <Gift className="lg:w-8 lg:h-8 w-6 h-6" />,
            title: 'Employee referral bonus',
        },
        {
            icon: <Cake className="lg:w-8 lg:h-8 w-6 h-6" />,
            title: 'Birthdays celebration',
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index);
                        setTimeout(() => {
                            setVisibleItems(prev => new Set([...prev, index]));
                        }, index * 100);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const elements = document.querySelectorAll('.benefit-item');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="mt-14 lg:mt-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}  
                <div className="text-center mb-6 lg:mb-8">
                    <h1 className="text-2xl sm:text-3xl md:text-3xl font-medium text-gray-900 mb-2 lg:mb-3">
                        What benefits are waiting <br className='lg:hidden'/> for you?
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        Because we believe great teams deserve more than just a paycheck — they<br className="hidden sm:block" />
                        deserve meaningful benefits that truly matter.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="px-2 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
                        {benefits.map((benefit, index) => (
                            <div 
                                key={index}
                                data-index={index}
                                className={`benefit-item bg-blue-50 rounded-2xl border-t border-blue-500 hover:border-t-blue-50 p-3 lg:p-6 transition-all duration-700 flex flex-col lg:flex-row items-center gap-3 ${
                                    visibleItems.has(index) 
                                        ? 'opacity-100 translate-y-0' 
                                        : 'opacity-0 translate-y-8'
                                }`}
                            >
                                {/* Icon */}
                                <div className="">
                                    <div className="text-blue-600">
                                        {benefit.icon}
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="space-y-1">
                                    <h3 className="text-blue-600 font-semibold text-sm lg:text-base leading-tight max-sm:text-center">
                                        {benefit.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Custom animations */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default Benefits_Career;