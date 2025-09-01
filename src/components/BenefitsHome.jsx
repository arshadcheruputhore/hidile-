import React from 'react';
import {
    Target,
    Settings,
    Users,
    PieChart,
    Shield,
    Bot,
} from 'lucide-react';

export default function BenefitsHome() {
    const features = [
        {
            icon: Target,
            title: "OKR Management",
            description: "Align team objectives with company goals. Track progress in real-time.",
            bgColor: "bg-blue-100",
            iconColor: "text-blue-600"
        },
        {
            icon: Settings,
            title: "Task Automation",
            description: "Automate recurring tasks and workflows. Save hours with intelligent distribution.",
            bgColor: "bg-orange-100",
            iconColor: "text-orange-600"
        },
        {
            icon: Users,
            title: "Team Collaboration",
            description: "Real-time chat, file sharing, and seamless communication across departments.",
            bgColor: "bg-green-100",
            iconColor: "text-green-600"
        },
        {
            icon: PieChart,
            title: "Advanced Analytics",
            description: "Get deep insights with customizable reports and real-time metrics.",
            bgColor: "bg-purple-100",
            iconColor: "text-purple-600"
        },
        {
            icon: Shield,
            title: "Enterprise Security",
            description: "Bank-grade encryption, role-based permissions, and on-premise deployment.",
            bgColor: "bg-red-100",
            iconColor: "text-red-600"
        },
        {
            icon: Bot,
            title: "AI Assistant",
            description: "Smart suggestions, automated prioritization, and workflow optimization.",
            bgColor: "bg-indigo-100",
            iconColor: "text-indigo-600"
        }
    ];

    return (
        <section className="sm:pb-20 mt-16 sm:mt-24 bg-gray-50 min-h-screen px-2 max-sm:px-0">
            <div className="max-w-7xl">
                {/* Header */}
                <div className="text-center sm:mb-8 mb-6">
                    {/* Badge */}
                    <div className="max-sm:flex justify-start">
                        <div className="inline-flex gap-2 items-center py-1.5 pr-4 pl-1 bg-white border border-solid border-zinc-200 h-[45px] rounded-3xl 
  max-sm:min-w-max max-sm:max-w-sm 
  max-sm:h-[30px] max-sm:gap-1.5 max-sm:pr-2 max-sm:pl-0.5">

                            {/* Left blue label */}
                            <div className="flex flex-col items-center px-4 pt-1.5 pb-2 bg-blue-600 rounded-3xl 
    max-sm:px-2.5 max-sm:pt-1 max-sm:pb-1">
                                <span className="text-sm leading-5 text-center text-white tracking-wider font-medium 
      max-sm:text-[10px] max-sm:leading-[14px]">
                                    Benefits
                                </span>
                            </div>

                            {/* Center text */}
                            <div className="flex justify-center items-center flex-1">
                                <span className="text-sm font-medium leading-5 tracking-wide text-center text-gray-700 
      max-sm:text-[11px] max-sm:leading-4">
                                    Designed for Modern Teams
                                </span>
                            </div>

                            {/* Right icon */}
                            <div className="mt-1 max-sm:mt-0.5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="17"
                                    height="17"
                                    viewBox="0 0 17 17"
                                    fill="none"
                                    className="max-sm:w-3.5 max-sm:h-3.5"
                                >
                                    <path
                                        d="M10.1201 4.04785L14.1668 8.09452L10.1201 12.1412"
                                        stroke="#181D27"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2.83398 8.09473H14.054"
                                        stroke="#181D27"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h1 className="md:text-[40px] font-medium max-sm:text-left text-gray-900 leading-[48px] mt-4 sm:mt-6 text-2xl max-md:leading-9 max-sm:leading-8 max-sm:mt-4 mb-2 sm:mb-2.5">
                        Everything Your Team
                        <br />
                        Needs to Excel
                    </h1>

                    {/* Subheading */}
                    <p className="leading-[22px] max-sm:text-left text-gray-600 text-base max-sm:text-sm max-sm:leading-5 mt-3 max-sm:mt-2.5">
                        Powerful features designed to streamline workflows and
                        <br className='max-sm:hidden' /> drive organizational success
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-4">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div
                                key={index}
                                className="relative group"
                            >
                                {/* Behind Card - Animated Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-blue-600 to-blue-100 rounded-2xl transform rotate-1 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-2 transition-all duration-500 ease-out shadow-xl"></div>
                                {/* Main Card */}
                                <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-sm border border-solid border-zinc-300 hover:shadow-md transition-all duration-500 hover:translate-y-[-1px] z-10 backdrop-blur-sm">
                                    {/* Icon */}
                                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${feature.bgColor} rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5`}>
                                        <IconComponent className={`w-6 h-6 sm:w-7 sm:h-7 ${feature.iconColor}`} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-2.5 group-hover:text-gray-800">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-[20px] sm:leading-[22px] text-sm group-hover:text-gray-700">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}