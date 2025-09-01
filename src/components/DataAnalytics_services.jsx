import { ArrowRight, BarChart3, Link, Target, Users, TrendingUp } from "lucide-react";

const DataAnalytics_services = () => {
  const analyticsFeatures = [
    {
      icon: Target,
      title: "360-Degree Customer View",
      description: "We tackle the critical challenge of crafting a comprehensive 360-degree customer view. Our strategic integration of automation, AI-powered intelligence, and activation tools sets the stage for precision in customer experience."
    },
    {
      icon: Users,
      title: "End-to-End Personalization",
      description: "Achieve end-to-end personalization that goes beyond promises. Our approach empowers businesses to not only overcome challenges but to thrive in the era of AI-driven recommendations."
    },
    {
      icon: Link,
      title: "Strategic Integration",
      description: "We are at the forefront of integrating automation, AI-powered intelligence, and activation tools strategically. This sets your brand apart in the dynamic digital landscape."
    },
    {
      icon: TrendingUp,
      title: "Thrive with AI-Driven Recommendations",
      description: "Thrive in the age of intelligent recommendations. Our solutions empower your business to stay ahead, delivering personalized experiences that resonate with your customers."
    }
  ];

  return (
    <section id="data-analytics" className="mb-8 lg:mb-12">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 lg:p-8 max-sm:mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 lg:gap-3 mb-6 text-blue-500 bg-blue-100 w-max pr-2 lg:pr-3 pl-1 lg:pl-1.5 lg:py-1 py-1 rounded-full ">
          <div className="w-5 h-5 sm:w-7 sm:h-7 text-white flex font-semibold items-center justify-center bg-blue-700 rounded-full">
            <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
          <h1 className="text-sm sm:text-lg font-semibold text-blue-600">Data Analytics and Business Intelligence</h1>
        </div>

        {/* Introduction */}
        <div className="mb-6 lg:mb-8">
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            If your business is brimming with valuable business intelligence data but struggles to enhance profitability or
            achieve growth through traditional methods, it's time to unlock the transformative power of AI. Experience a
            significant boost in your business by leveraging AI's unique perspective on your data.
          </p>
        </div>

        {/* Image Gallery Section */}
        <div className="mb-6 lg:mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/img/dataAnalytics_1.png"
                alt="AI-powered data analytics dashboard with businessman analyzing business intelligence"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/img/dataAnalytics_2.png"
                alt="Professional reviewing statistical data and analytics charts for business intelligence"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Benefits Section Header */}
        <div className="mb-6 lg:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            Benefits
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="mb-6 lg:mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {analyticsFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="p-4 sm:p-6 bg-gray-50 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-800 text-base sm:text-lg leading-tight">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Description */}
        <div className="mb-6 lg:mb-8">
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Navigate the Complexities of Customer Experience with Precision! In a landscape flooded with software
            tools promising to elevate every facet of customer interaction, achieving comprehensive end-to-end
            personalization remains a challenge. However, we are at the forefront of addressing critical issues.
          </p>
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

export default DataAnalytics_services;