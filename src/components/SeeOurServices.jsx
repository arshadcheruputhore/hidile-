import { ArrowRight, Server, BarChart3, Clock, Monitor, Bot, Smartphone, Code, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const SeeOurServices = () => {
  const services = [
    {
      icon: Server,
      title: "Enterprise Cloud Solutions",
      description: "Monitor progress on your tasks. Easily prioritize your tasks and stay on top of them.",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-500",
      hoverBg: "hover:bg-cyan-100"
    },
    {
      icon: BarChart3,
      title: "Mobile and App Development",
      description: "Monitor progress on your tasks. Easily prioritize your tasks and stay on top of them.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      hoverBg: "hover:bg-blue-100"
    },
    {
      icon: Clock,
      title: "Digital Transformation and Mobility",
      description: "Monitor progress on your tasks. Easily prioritize your tasks and stay on top of them.",
      bgColor: "bg-red-50",
      iconColor: "text-red-500",
      hoverBg: "hover:bg-red-100"
    },
    {
      icon: Monitor,
      title: "IT Outsourcing",
      description: "Allocate resources effectively to optimize team productivity and ensure project success.",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-500",
      hoverBg: "hover:bg-cyan-100"
    },
    {
      icon: Bot,
      title: "Intelligent Automation and Chatbots",
      description: "Monitor progress on your tasks. Easily prioritize your tasks and stay on top of them.",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-500",
      hoverBg: "hover:bg-cyan-100"
    },
    {
      icon: Smartphone,
      title: "Rapid Prototyping Services",
      description: "Monitor progress on your tasks. Easily prioritize your tasks and stay on top of them.",
      bgColor: "bg-green-50",
      iconColor: "text-green-500",
      hoverBg: "hover:bg-green-100"
    },
    {
      icon: Code,
      title: "Data Analytics and Business Intelligence",
      description: "Monitor progress on your tasks. Easily prioritize your tasks and stay on top of them.",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-500",
      hoverBg: "hover:bg-yellow-100"
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Gather insights from users to inform design decisions and improve overall user experience.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500",
      hoverBg: "hover:bg-purple-100"
    }
  ];

  return (
    <section id="services-overview" className="">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 lg:mb-8">
          <h2 className="text-xl sm:text-3xl md:text-3xl font-medium text-gray-900 mb-2 lg:mb-3">
            See Our Services
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            We will help you identify problems in your business, then solve with tech
            quality. Change the appearance. Focus on what matters: media, price, etc.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-4 lg:mb-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                to={'/service-details'}
                key={index}
                className={`bg-white relative p-6 max-sm:p-4 rounded-xl shadow-sm border border-zinc-200 hover:shadow-md transition-all duration-300 cursor-pointer group flex flex-col gap-4 lg:gap-5 justify-between`}
              >
                <div className="">
                  {/* Icon */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 ${service.bgColor}  rounded-xl flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-6 h-6 sm:w-7 sm:h-7 ${service.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Reveal Card */}
                <div
                  className={`absolute inset-x-4 bottom-4 bg-white border border-zinc-200 rounded-lg shadow-md p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300`}
                >
                  <div className="flex items-center gap-3">
                    <IconComponent className={`w-6 h-6 ${service.iconColor}`} />
                    <p className="text-sm text-gray-700 font-medium">
                      Learn more about {service.title}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-sm text-xs sm:text-sm group">
            Explore All Services
            <div className="mt-1 text-white">
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SeeOurServices;