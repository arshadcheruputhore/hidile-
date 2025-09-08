import { ThumbsUp, Star, Building2, Check, X } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

function PricingCard_Pricing() {
    const pricingPlans = [
        {
            id: 'starter',
            name: 'Starter',
            price: 'Free',
            subtitle: 'In first 30 Days',
            description: 'All the basics for businesses that are just getting started.',
            icon: ThumbsUp,
            iconBg: 'bg-blue-50',
            iconColor: 'text-blue-600',
            buttonText: 'Start For Free',
            buttonStyle: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
            features: [
                { name: 'Task Management', included: true },
                { name: 'Team Calendar', included: true },
                { name: 'Basic Analytics', included: true },
                { name: 'Support & Admin', included: true },
                { name: 'Email Support', included: true },
                { name: 'Advanced Workflow', included: false },
                { name: 'Custom Integrations', included: false },
                { name: 'Priority Support', included: false }
            ]
        },
        {
            id: 'professional',
            name: 'Professional',
            price: '₹349',
            subtitle: '/user/month',
            billingNote: '(Billed annually)',
            description: 'Better for growing businesses that want more customers.',
            icon: Star,
            iconBg: 'bg-blue-600',
            iconColor: 'text-white',
            buttonText: 'Get Started',
            buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700',
            featured: true,
            features: [
                { name: 'Everything in Starter', included: true },
                { name: 'Advanced Workflows', included: true },
                { name: 'Custom Fields', included: true },
                { name: 'Advanced Analytics', included: true },
                { name: 'API Access', included: true },
                { name: 'Priority Support', included: true },
                { name: 'On-Premise Deployment', included: false },
                { name: 'Custom Development', included: false }
            ]
        },
        {
            id: 'enterprise',
            name: 'Enterprise',
            price: 'Custom',
            description: 'Advanced features for businesses that need more customization.',
            icon: Building2,
            iconBg: 'bg-blue-50',
            iconColor: 'text-blue-600',
            buttonText: 'Contact Sales',
            buttonStyle: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
            features: [
                { name: 'Everything in Professional', included: true },
                { name: 'On-Premise Deployment', included: true },
                { name: 'Custom Integrations', included: true },
                { name: '24/7 Phone Support', included: true },
                { name: 'Advanced Security', included: true },
                { name: 'Dedicated Account Manager', included: true },
                { name: 'Custom Training', included: true },
                { name: 'Performance Analytics', included: true }
            ]
        }
    ];

    return (
        <section className="-mt-12 lg:-mt-[6%] ">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pricingPlans.map((plan) => {
                        const IconComponent = plan.icon;

                        return (
                            <div key={plan.id} className="relative group">
                                {/* Hover background */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-blue-200 via-blue-600 to-blue-100 rounded-2xl transform rotate-1 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-2 transition-all duration-500 ease-out shadow-xl h-full ${plan.featured ? '-mt-10' : 'mt-0'}`}></div>

                                {/* Main Card */}
                                <div className={`relative bg-white rounded-2xl p-6 flex flex-col items-center ${plan.featured
                                        ? 'border-2 border-blue-600 lg:-mt-12'
                                        : 'border border-gray-200'
                                    }`}>

                                    {/* Icon */}
                                    <div className={`w-12 h-12 ${plan.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                                        <IconComponent className={`w-6 h-6 ${plan.iconColor}`} />
                                    </div>

                                    {/* Plan Name */}
                                    <h3 className={`font-semibold text-gray-900 mb-1 lg:mb-2 ${plan.featured ? 'text-xl lg:text-2xl' : 'text-lg lg:text-xl'}`}>{plan.name}</h3>

                                    {/* Price */}
                                    <div className="mb-2 lg:mb-4">
                                        <span className="text-2xl lg:text-3xl font-bold text-gray-900">{plan.price}</span>
                                        {plan.subtitle && (
                                            <span className="text-gray-500 ml-1 text-xs lg:text-sm">{plan.subtitle}</span>
                                        )}

                                        {/* Billing Note */}
                                        {plan.billingNote && (
                                            <p className="text-sm text-gray-500 text-center">{plan.billingNote}</p>
                                        )}
                                    </div>

                                    {/* Description */}
                                    <p className={`text-gray-600 leading-relaxed text-center text-sm mb-4 lg:mb-8 inline-block"}`}>{plan.description}</p>

                                    {/* Features List */}
                                    <div className="space-y-3 mb-8 self-start">
                                        {plan.features.map((feature, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                {feature.included ? (
                                                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                                ) : (
                                                    <X className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                                )}
                                                <span className={`text-xs lg:text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'
                                                    }`}>
                                                    {feature.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <Link to={'/reach-us'} className={`w-full py-3 px-4 rounded-xl font-medium text-sm transition-colors duration-200 text-center ${plan.buttonStyle}`}>
                                        {plan.buttonText}
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default PricingCard_Pricing;