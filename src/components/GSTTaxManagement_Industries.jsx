import React from 'react';
import { Check } from 'lucide-react';

const GSTTaxManagement_Industries = () => {
  const features = [
    {
      title: "GST Return Status Checker",
      description:
        "Direct integration with the GSTN portal to enable real-time tracking and seamless access to the latest GST status updates.",
    },
    {
      title: "ITR Filing Tracker",
      description:
        "Easily track ITR filing status and efficiently manage client returns with streamlined monitoring and centralized access.",
    },
    {
      title: "Auto-Fill Client Information",
      description:
        "Automatically populate client details directly from the GSTN database, ensuring accuracy, saving time, and reducing manual data entry.",
    },
    {
      title: "Compliance Verification",
      description:
        "Ensure tasks are marked complete only after actual filing is confirmed on the servers, maintaining accuracy and compliance.",
    },
  ];

  return (
    <div
      className="relative overflow-hidden bg-blue-100/70 pl-0 lg:pl-32"
    >
      <div className="mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Left Content */}
          <div className="order-1 pt-10 sm:py-20 max-sm:px-5 lg:col-span-1">
            {/* Main Section Header */}
            <div className="mb-6 lg:mb-8">
              <h1 className="text-xl sm:text-3xl md:text-3xl font-medium text-gray-900 mb-2 lg:mb-3 lg:text-nowrap leading-snug">
                Comprehensive GST & Tax Return Management{" "}
                <br className="max-lg:hidden" /> for Seamless Compliance
              </h1>
              <p className="text-gray-600 text-sm sm:text-base text-left leading-relaxed">
                Where Chartered Accountants bring precision and reliability to GST and tax
                return management, helping businesses focus on growth without compliance
                worries.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Check Icon */}
                  <div className="mt-1 flex-shrink-0">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                  </div>

                  {/* Feature Content */}
                  <div className="flex-1">
                    <h3 className="mb-1 sm:mb-2 text-base lg:text-lg font-semibold leading-tight text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-xs lg:text-sm leading-relaxed text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image (desktop/tablet only) */}
          <div className="order-2 h-full w-full lg:col-span-2">
            <div className="flex h-full items-end">
              <div className="relative">
                <img
                  src="/img/GST_industries.png"
                  alt="GST Industries Dashboard"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GSTTaxManagement_Industries;
