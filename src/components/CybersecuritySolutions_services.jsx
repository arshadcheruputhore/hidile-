import { ArrowRight, Shield, Check } from "lucide-react";

const CybersecuritySolutions_services = () => {
  const statistics = [
    {
      percentage: "66%",
      description: "company affected Cyber attacks in the year 2022"
    },
    {
      percentage: "84%",
      description: "Businesses experienced loss."
    },
    {
      percentage: "24%",
      description: "It took 1-6 months to recover"
    }
  ];

  const advantages = [
    {
      text: "The cost of CSaaS service is lower than the recovery cost."
    },
    {
      text: "Specific skills are required, making the talent expensive."
    },
    {
      text: "CSaaS service will have a better experience than the in-house team because of facing different challenges."
    },
    {
      text: "Insurance coverages require a high level of security for claiming. We have knowledge of insurability on attacks."
    }
  ];

  return (
    <section id="cybersecurity-solutions" className="mb-8 lg:mb-12">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 lg:p-8 max-sm:mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 lg:gap-3 mb-6 text-blue-500 bg-blue-100 w-max pr-2 lg:pr-3 pl-1 lg:pl-1.5 lg:py-1 py-1 rounded-full ">
          <div className="w-5 h-5 sm:w-7 sm:h-7 text-white flex font-semibold items-center justify-center bg-blue-700 rounded-full">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
          <h1 className="text-sm sm:text-lg font-semibold text-blue-600">Cybersecurity Solutions</h1>
        </div>

        {/* Introduction */}
        <div className="mb-6 lg:mb-8">
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Cybersecurity is changing daily, so it has become challenging to manage alone by an enterprise. Many
            enterprises constantly experience the financial and data breach consequences through cyber incidents.
            We continuously innovate and industrialize our ability to evade cyber-attacks. We can maintain up-to-date
            cyber defenses of your business as a cybersecurity-as-a-service (CSaaS) company.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="mb-6 lg:mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {statistics.map((stat, index) => (
              <div key={index} className="p-4 sm:p-6 bg-gray-50 rounded-lg border border-gray-100 text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
                  {stat.percentage}
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-6 lg:mb-8">
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Without a high level of security operations expertise, organizations are at greater risk of suffering the
            consequences of a significant cyber incident. Through Hidile's CSaaS service, you can leverage specialists
            to fulfill critical cybersecurity needs. Due to the shortage in global security experts pose challenges for
            higher security risks.
          </p>
        </div>

        {/* Economic Advantages Section */}
        <div className="mb-6 lg:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            Companies that outsource cybersecurity services have economic advantages.
          </h2>

          <div className="space-y-3 lg:space-y-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {advantage.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-end lg:justify-start">
          <button className="inline-flex items-center px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-3xl transition-colors duration-200 shadow-sm text-sm sm:text-base">
            Get in Touch
            <div className="ml-2 bg-white text-black rounded-full p-1">
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CybersecuritySolutions_services;