import React from 'react';

const HiDeskOKRDrivesSuccess_Industries = () => {
  const benefits = [
    {
      title: "Client Management Excellence",
      description: "Streamline client onboarding, track compliance deadlines, and maintain comprehensive client records with automated workflows."
    },
    {
      title: "Practice Growth Acceleration",
      description: "Scale your CA practice with intelligent automation, performance analytics, and data-driven insights for strategic decision making."
    },
    {
      title: "Efficient Time Management",
      description: "Optimize billable hours with accurate time tracking, project management tools, and resource allocation for maximum profitability."
    },
    {
      title: "Multi-Level Approval System",
      description: "Streamline decision-making with customizable approval workflows, ensuring quality control and proper authorization at every step."
    }
  ];

  return (
    <div className="bg-blue-100/70 py-10 sm:py-12 max-sm:px-3">
      <div className="max-w-7xl mx-auto max-sm:px-2">
        {/* Main Section Header */}
        <div className="text-center mb-6 lg:mb-8">
          <h1 className="text-xl sm:text-3xl md:text-3xl font-medium text-gray-900 mb-2 lg:mb-3">
            How HiDesk OKR Drives <br className='lg:hidden'/> Your Success
          </h1>
          <p className="text-gray-600 text-sm sm:text-base w-full text-center mx-auto leading-relaxed">
            Discover how HiDeskOKR transforms your CA practice with powerful benefits designed for modern accounting professionals.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-zinc-200 relative overflow-hidden"
            >
              {/* Blue accent bar on the left */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
              
              {/* Content */}
              <div className="lg:p-6 lg:pl-8 p-4 pl-6">
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-tight">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HiDeskOKRDrivesSuccess_Industries;