import { ArrowRight, Smartphone, MonitorSmartphone, Users, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const MobileAppDevelopment_services = () => {
  const scopeAreas = [
    {
      icon: MonitorSmartphone,
      title: "Market Presence and Visibility",
      description: "Stand out in the crowded digital landscape by offering a seamless, branded experience through a dedicated mobile application."
    },
    {
      icon: Users,
      title: "Customer Engagement",
      description: "Enhance customer interaction and loyalty with a user-friendly app that provides valuable features and services."
    },
    {
      icon: Settings,
      title: "Business Customization",
      description: "Tailor your app to meet specific business needs, creating a unique solution that resonates with your target audience."
    }
  ];

  return (
    <section id="mobile-app-development" className="mb-8 lg:mb-12">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-center gap-2 lg:gap-3 mb-6 text-blue-500 bg-blue-100 w-max pr-2 lg:pr-3 pl-1 lg:pl-1.5 lg:py-1 py-1 rounded-full">
          <div className="w-5 h-5 sm:w-7 sm:h-7 text-white flex font-semibold items-center justify-center bg-blue-700 rounded-full">
            <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
          <h1 className="text-sm sm:text-lg font-semibold text-blue-600">Mobile and App Development</h1>
        </div>

        {/* Description */}
        <div className="mb-6 lg:mb-8">
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Welcome to the era where an app is not just an option but a necessity for your brand's visibility and
            engagement. Just as having a website was a significant milestone in the 1990s, today, the question is
            whether your business has a dedicated application developed to cater to your unique needs. With the
            mobile handset count skyrocketing from 2 billion in 2005 to 5 billion, the app industry is witnessing
            exponential growth, making it a crucial component of your communication and marketing strategy.
          </p>
        </div>

        {/* Scope of mobile applications section */}
        <div className="mb-6 lg:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            Scope of mobile applications in business operations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-6">
            {scopeAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{area.title}</h3>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Description */}
        <div className="mb-6 lg:mb-8">
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            In this mobile-centric era, having a robust app is not just an advantage; it's a necessity. Take the lead in your
            industry by incorporating a tailored mobile application into your business strategy. Partnering with us to
            explore how our expertise can elevate your brand's presence in the ever-expanding mobile landscape.
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

export default MobileAppDevelopment_services;