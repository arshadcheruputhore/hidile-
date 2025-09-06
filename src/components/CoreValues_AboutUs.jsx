import React from 'react';
import { CheckCircle2, Users, Award, Heart } from 'lucide-react';

const CoreValues_AboutUs = () => {
    const automationFeatures = [
        {
            icon: <CheckCircle2 className="lg:w-6 lg:h-6 w-5 h-5 text-blue-500" />,
            title: "Excellence",
            description: "We strive for perfection in every solution we deliver to our CA partners."
        },
        {
            icon: <Users className="lg:w-6 lg:h-6 w-5 h-5 text-blue-500" />,
            title: "Collaboration",
            description: "Success comes through working together with our clients and understanding their needs."
        },
        {
            icon: <Award className="lg:w-6 lg:h-6 w-5 h-5 text-blue-500" />,
            title: "Innovation",
            description: "Constantly evolving our platform to meet the changing demands of the accounting industry."
        },
        {
            icon: <Heart className="lg:w-6 lg:h-6 w-5 h-5 text-blue-500" />,
            title: "Trust",
            description: "Building lasting relationships through transparency, reliability, and integrity."
        }
    ];

    const statistics = [
        {
            value: "500+",
            label: "Projects Launched",
        },
        {
            value: "50+",
            label: "Happy Clients",
        },
        {
            value: "99.9%",
            label: "Compliance Success Rate",
        },
        {
            value: "10+",
            label: "Years Experience",
        }
    ];

    return (
        <section className="">
            <div className="px-3 sm:px-8 md:px-14 lg:px-32 ">
                <div className="max-w-7xl mx-auto">
                    {/* Main Section Header */}
                    <div className="mb-6 lg:mb-8 text-center">
                        <h1 className="text-2xl sm:text-3xl md:text-3xl font-medium text-gray-900 mb-2 lg:mb-3">
                            Our Core Values
                        </h1>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            Our Core Values Define the Way We Innovate, Collaborate, and Empower Productivity Every Day
                        </p>
                    </div>

                    {/* Automation Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                        {automationFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-4 sm:p-6 border border-zinc-200 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
                            >
                                {/* Icon with background */}
                                <div className="mb-4 sm:mb-6">
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                                        {feature.icon}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="bg-white px-4 sm:px-6 lg:px-8 shadow-md mt-8 max-sm:py-5">
                <div className="max-w-7xl mx-auto max-sm:px-2">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
                        {statistics.map((stat, index) => (
                            <div
                                key={index}
                                className={`text-center py-8 max-sm:py-0`}
                            >
                                {/* Statistic Value */}
                                <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2`}>
                                    {stat.value}
                                </div>

                                {/* Statistic Label */}
                                <div className="text-gray-600 text-xs sm:text-sm font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoreValues_AboutUs;