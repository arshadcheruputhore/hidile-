import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const ReachUs_ContactUs = () => {
    const contactMethods = [
        {
            icon: <Phone className="lg:w-7 lg:h-7 w-5 h-5 text-white" />,
            title: "Phone Support",
            description: "Speak directly to our support team for immediate assistance.",
            action: "+919744101407",
            actionType: "phone"
        },
        {
            icon: <Mail className="lg:w-7 lg:h-7 w-5 h-5 text-white" />,
            title: "Connect with Email",
            description: "Get Comprehensive Assistance and Detailed Support Through Email",
            action: "hello@hidile.com",
            actionType: "email"
        },
        {
            icon: <MessageCircle className="lg:w-7 lg:h-7 w-5 h-5 text-white" />,
            title: "Live Chat",
            description: "Get Instant Assistance and Support Through Live Chat",
            action: "Start Chat",
            actionType: "chat"
        }
    ];

    const handleAction = (actionType, action) => {
        switch(actionType) {
            case 'phone':
                window.open(`tel:${action}`, '_self');
                break;
            case 'email':
                window.open(`mailto:${action}`, '_self');
                break;
            case 'chat':
                // Add your chat functionality here
                console.log('Start chat clicked');
                break;
            default:
                break;
        }
    };

    return (
        <section className="">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Section Header */}
                <div className="text-center mb-6 lg:mb-8">
                    <h1 className="text-xl sm:text-3xl font-medium text-gray-900 mb-2 lg:mb-3">
                        Multiple Ways to Reach Us
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        Choose the Most Convenient Method to Reach Out and Get Support
                    </p>
                </div>

                {/* Contact Methods Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                    {contactMethods.map((method, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-zinc-200 group"
                        >
                            {/* Content */}
                            <div className="px-4 py-6 lg:py-8 text-center">
                                {/* Icon at the top center */}
                                <div className="flex justify-center mb-4 lg:mb-5">
                                    <div className="lg:w-16 lg:h-16 w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-blue-600 transition-colors duration-300">
                                        {method.icon}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 lg:mb-2.5 leading-tight">
                                    {method.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-2 lg:mb-2.5">
                                    {method.description}
                                </p>

                                {/* Action Button/Link */}
                                <div className="mt-4">
                                    {method.actionType === 'chat' ? (
                                        <button
                                            onClick={() => handleAction(method.actionType, method.action)}
                                            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-base lg:text-lg transition-colors duration-200 group"
                                        >
                                            {method.action}
                                            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleAction(method.actionType, method.action)}
                                            className="text-blue-600 hover:text-blue-700 font-semibold text-base lg:text-lg transition-colors duration-200 hover:underline"
                                        >
                                            {method.action}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReachUs_ContactUs;