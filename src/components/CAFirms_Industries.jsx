import React from 'react';
import {CalendarSync, PieChart, Workflow, ShieldUser } from 'lucide-react';

const CAFirms_Industries = () => {
    const features = [
        {
            icon: <Workflow className="lg:w-7 lg:h-7 w-5 h-5 text-white" />,
            title: "CA Specific Workflows",
            description: "Purpose-built for Chartered Accountants with industry-specific templates, compliance checklists, and regulatory frameworks."
        },
        {
            icon: <CalendarSync className="lg:w-7 lg:h-7 w-5 h-5 text-white" />,
            title: "Automated Compliance",
            description: "Stay ahead of deadlines with automated reminders for tax filings, audit schedules, and regulatory submissions."
        },
        {
            icon: <PieChart className="lg:w-7 lg:h-7 w-5 h-5 text-white" />,
            title: "Practice Analytics",
            description: "Gain insights into your practice performance with detailed analytics on client profitability, team productivity, and growth trends."
        },
        {
            icon: <ShieldUser className="lg:w-7 lg:h-7 w-5 h-5 text-white" />,
            title: "Client Portal",
            description: "Provide clients with secure access to their documents, progress updates, & communication channels for enhanced service delivery."
        }
    ];

    return (
        <div className="">
            <div className="max-w-7xl mx-auto max-sm:px-2">
                {/* Main Section Header */}
                <div className="text-center mb-8 lg:mb-12">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-2 lg:mb-3">
                        Finance & Accounting
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base w-full text-left mx-auto leading-relaxed">
                        HiDesk automates repetitive tasks and reminders, freeing the accounting teams to go deeper with insights for their clients. Centrally located data, in a secure manner, reduces manual errors and keeps documentation instantly accessible. Real-time updates offer immediate visibility into compliance checks and deadlines. With organized processes, firms can deliver more accurate reporting and build stronger trust with clients.
                    </p>
                </div>

                {/* Why HiDesk OKR Section */}
                <div className="mb-16 max-sm:mb-10">
                    <h2 className="text-xl sm:text-3xl md:text-3xl font-medium text-left text-gray-800 leading-tight sm:leading-9 md:leading-[48px] mb-1">
                        Why HiDesk OKR for CA Firms?
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base text-left leading-relaxed max-w-2xl">
                        Specialized tools designed specifically for Chartered Accountants to manage clients, track compliance, and grow their practice efficiently.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-tl-3xl rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-zinc-200 relative"
                        >
                            {/* Icon positioned at top-left corner */}
                            <div className="absolute lg:-top-8 lg:-left-6 -top-6 -left-3 lg:p-2 p-1 border border-zinc-200 bg-gray-50 rounded-full z-20">
                                <div className="lg:w-12 lg:h-12 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center drop-shadow-2xl drop-shadow-blue-50">
                                    {feature.icon}
                                </div>
                            </div>

                            {/* Content with proper spacing for the icon */}
                            <div className="px-4 pb-8 pt-4">
                                {/* Title */}
                                <h3 className="text-base font-semibold text-gray-900 mb-4 lg:ml-14 max-sm:text-center leading-tight">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CAFirms_Industries;