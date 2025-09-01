import React from 'react';
import {
    Target,
    Users,
    PieChart,
    Shield,
    Bot,
    Workflow,
    LockKeyhole,
} from 'lucide-react';

export default function OfficeManagement_Industries() {
    const features = [
        {
            icon: Target,
            title: "Invoicing & Financial Management",
            description: "Streamlined billing, invoicing, and complete financial tracking system.",
            bgColor: "bg-blue-100",
            iconColor: "text-blue-600"
        },
        {
            icon: Workflow,
            title: "Time-Sheet & Cost Management",
            description: "Accurate time tracking with automated cost calculations and project billing.",
            bgColor: "bg-orange-100",
            iconColor: "text-orange-600"
        },
        {
            icon: Users,
            title: "E-Mail Integration",
            description: "Seamless email management with automated notifications and client communications.",
            bgColor: "bg-green-100",
            iconColor: "text-green-600"
        },
        {
            icon: PieChart,
            title: "Digital Signature Management",
            description: "Secure digital signature workflows for documents and approvals.",
            bgColor: "bg-purple-100",
            iconColor: "text-purple-600"
        },
        {
            icon: LockKeyhole,
            title: "Document Management",
            description: "Centralized document storage with inward/outward tracking.",
            bgColor: "bg-red-100",
            iconColor: "text-red-600"
        },
        {
            icon: Bot,
            title: "Client Portal & Management",
            description: "Dedicated client login portal with service status tracking",
            bgColor: "bg-indigo-100",
            iconColor: "text-indigo-600"
        }
    ];

    return (
        <section className="">
            <div className="max-w-7xl mx-auto max-sm:px-2">
                {/* Header */}
                <div className="sm:mb-8 mb-6">
                    {/* Main Heading */}
                    <h1 className="text-xl sm:text-3xl md:text-3xl font-medium text-gray-900 mb-2 lg:mb-3">
                        All-in-One Office Management Platform
                    </h1>

                    {/* Subheading */}
                    <p className="text-gray-600 text-sm sm:text-base text-left leading-relaxed max-w-3xl">
                        A comprehensive office management platform designed specifically for Chartered Accountancy firms to simplify workflows, manage clients, and boost overall efficiency.
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