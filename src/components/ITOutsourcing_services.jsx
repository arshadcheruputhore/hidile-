import { ArrowRight, Monitor, DollarSign, Users, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";

const ITOutsourcing_services = () => {
  const advantages = [
    {
      icon: DollarSign,
      title: "Cost Efficiency",
      description: "Our strategy cuts costs associated with deploying and managing in-house engineering teams. This eliminates administrative overhead and operational responsibilities, streamlining your IT expenses."
    },
    {
      icon: Users,
      title: "Resource Optimization",
      description: "By outsourcing non-core IT services to Hidile, you can optimize your resources and refocus on your primary objectives. Our trusted services free you from the hassle of constantly switching vendors."
    },
    {
      icon: Shield,
      title: "Trustworthy Partnership",
      description: "Build a trustworthy partnership with Hidile that allows you to confidently outsource your non-core IT services, knowing that we are committed to delivering excellence."
    },
    {
      icon: Award,
      title: "Reliable Expertise",
      description: "Benefit from our reliable expertise in handling diverse IT components. We have the knowledge and experience to manage your IT needs seamlessly."
    }
  ];

  return (
    <section id="it-outsourcing" className="mb-8 lg:mb-12">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-center gap-2 lg:gap-3 mb-6 text-blue-500 bg-blue-100 w-max pr-2 lg:pr-3 pl-1 lg:pl-1.5 lg:py-1 py-1 rounded-full">
          <div className="w-5 h-5 sm:w-7 sm:h-7 text-white flex font-semibold items-center justify-center bg-blue-700 rounded-full">
            <Monitor className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
          <h1 className="text-sm sm:text-lg font-semibold text-blue-600">IT Outsourcing</h1>
        </div>

        {/* Description */}
        <div className="mb-6 lg:mb-8">
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Organizations usually use a strategic vs commodity approach to outsource their services. If it is not a core
            strategic service that doesn't make any difference from competitors, they tend to outsource, which is more
            economically beneficial.
          </p>
        </div>

        {/* Additional Description */}
        <div className="mb-6 lg:mb-8">
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            At Hidile, we offer a solution that not only reduces costs but also enhances efficiency by eliminating the
            complexities tied to switching providers or bringing services in-house.
          </p>
        </div>

        {/* Advantages of our Outsourcing Strategy section */}
        <div className="mb-6 lg:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-6">
            Advantages of our Outsourcing Strategy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-6">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div key={index} className="bg-gray-50 p-4 lg:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200">
                  <div className="flex flex-col items-start gap-4">
                    <div className="flex-shrink-0 flex items-center gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-800 text-base sm:text-lg">{advantage.title}</h3>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* HR and Talent Management section */}
        <div className="mb-6 lg:mb-8">
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
            In today's dynamic landscape of HR and Talent management, addressing challenges such as talent
            acquisition and retention, workforce motivation across multiple generations, and skill development while
            ensuring compliance with regulations is paramount.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Step into the future of HR and Talent Management with Hidile Consulting, where we address the
            multifaceted challenges of talent acquisition, retention, workforce motivation, and skill development while
            ensuring regulatory compliance in today's dynamic landscape.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-end lg:justify-start">
          <Link to={'/reach-us'} className="inline-flex items-center px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-3xl transition-colors duration-200 shadow-sm text-sm sm:text-base">
            Get in Touch
            <div className="ml-2 bg-white text-black rounded-full p-1">
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ITOutsourcing_services;