import React from 'react';
import { Clock, MessageCircle, FileText, CheckCircle } from 'lucide-react';

const AutomatesDailyTasks_Industries = () => {
  const automationFeatures = [
    {
      icon: <Clock className="lg:w-6 lg:h-6 w-5 h-5 text-blue-500" />,
      title: "Deadline Management",
      description: "Automatic tracking and alerts for tax deadlines, audit schedules, and compliance requirements."
    },
    {
      icon: <MessageCircle className="lg:w-6 lg:h-6 w-5 h-5 text-blue-500" />,
      title: "Client Communications",
      description: "Automated client updates, status reports, and document request notifications."
    },
    {
      icon: <FileText className="lg:w-6 lg:h-6 w-5 h-5 text-blue-500" />,
      title: "Document Processing",
      description: "Streamlined document collection, review workflows, and approval processes."
    },
    {
      icon: <CheckCircle className="lg:w-6 lg:h-6 w-5 h-5 text-blue-500" />,
      title: "Task Assignment",
      description: "Intelligent task distribution based on team expertise and workload balancing."
    }
  ];

  return (
    <div className="">
      <div className="max-w-7xl mx-auto max-sm:px-2">
        {/* Main Section Header */}
        <div className="mb-6 lg:mb-8">
          <h1 className="text-xl sm:text-3xl md:text-3xl font-medium text-gray-900 mb-2 lg:mb-3">
            How HiDesk OKR Automates Your Important Daily Routine Tasks
          </h1>
          <p className="text-gray-600 text-sm sm:text-base text-left leading-relaxed max-w-3xl">
            Save hours every day with intelligent automation that handles routine tasks, so you can focus on high-value client work and strategic growth.
          </p>
        </div>

        {/* Automation Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
  );
};

export default AutomatesDailyTasks_Industries;