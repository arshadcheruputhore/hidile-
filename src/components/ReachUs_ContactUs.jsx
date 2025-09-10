import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const ReachUs_ContactUs = () => {
    const [visibleItems, setVisibleItems] = useState(new Set());
    const [headerVisible, setHeaderVisible] = useState(false);
    const headerRef = useRef(null);
    const itemRefs = useRef([]);

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
        switch (actionType) {
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

    useEffect(() => {
        const observers = [];

        // Header observer
        const headerObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHeaderVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (headerRef.current) {
            headerObserver.observe(headerRef.current);
            observers.push(headerObserver);
        }

        // Items observer
        const itemObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index);
                        setVisibleItems(prev => new Set([...prev, index]));
                    }
                });
            },
            { threshold: 0.2 }
        );

        itemRefs.current.forEach((ref) => {
            if (ref) {
                itemObserver.observe(ref);
            }
        });
        observers.push(itemObserver);

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, []);

    return (
        <section className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto ">
                {/* Main Section Header */}
                <div
                    ref={headerRef}
                    className={`sm:mb-8 mb-6 transition-all duration-1000 ease-out ${headerVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                        }`}
                >
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
                            ref={el => itemRefs.current[index] = el}
                            data-index={index}
                            className={`bg-white rounded-2xl shadow-md hover:shadow-xl hover:duration-300 border border-zinc-200 group relative group transition-all duration-700 ease-out
                                    ${visibleItems.has(index)
                                    ? 'opacity-100 translate-y-0 scale-100'
                                    : 'opacity-0 translate-y-12 scale-95'
                                }`}
                            style={{
                                transitionDelay: `${index * 150}ms`
                            }}
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