import { ArrowRight, Bot, Zap, Database, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const IntelligentAutomation_services = () => {
  const automationAreas = [
    {
      icon: Zap,
      title: "Elevate Customer Experience with AI",
      description: "Customer service chatbots have the potential to not only reduce costs but also significantly enhance the overall customer experience. Imagine having a virtual agent at your customers' disposal 24/7, providing prompt responses that often surpass the speed of human agents."
    },
    {
      icon: Database,
      title: "Data-Driven AI Training",
      description: "One key aspect of our approach is leveraging data from contact center transcripts. These transcripts serve as the foundation for training the AI that powers our virtual agents. With training data featuring hundreds of thousands of instances, we ensure effective customer interactions."
    },
    {
      icon: Brain,
      title: "Smarter Virtual Agents",
      description: "The effectiveness of a virtual agent hinges on the richness of its training data. Our commitment is to provide training data that goes beyond sparsity, allowing the virtual agent to develop the intelligence required to accurately identify customer intents."
    }
  ];

  return (
    <section id="intelligent-automation" className="mb-8 lg:mb-12">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 lg:p-8 max-sm:mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 lg:gap-3 mb-6 text-blue-500 bg-blue-100 w-max pr-2 lg:pr-3 pl-1 lg:pl-1.5 lg:py-1 py-1 rounded-full ">
          <div className="w-5 h-5 sm:w-7 sm:h-7 text-white flex font-semibold items-center justify-center bg-blue-700 rounded-full">
            <Bot className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
          <h1 className="text-sm sm:text-lg font-semibold text-blue-600">Intelligent Automation and Chatbots</h1>
        </div>

        {/* Description */}
        <div className="mb-6 lg:mb-8">
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Are you contemplating the deployment of a customer service chatbot that directly interacts with your
            customers? As an executive, making this decision can be challenging, navigating the realm of AI hype on one
            side and concerns about machine interactions with your customers on the other. At Intelligent Customer
            Service Solutions, we understand the delicate balance you need to strike.
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="mb-6 lg:mb-8">
          <div className="size-auto rounded-xl overflow-hidden">
            <img
              src="img/intelligent_helpCustomers.png"
              alt="Help customers 24/7/365 with AI - Chatbot interface showing various customer service interactions"
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Key Features section */}
        <div className="mb-6 lg:mb-8">
          <div className="space-y-4 lg:space-y-6 mb-6">
            {automationAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div key={index} className="flex flex-col gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex-shrink-0 flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-800 text-base sm:text-lg">{area.title}</h3>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Description */}
        <div className="mb-6 lg:mb-8">
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Businesses need a chatbot like a virtual agent that scans the customer's request, combines that with
            whatever other information is available (such as their past purchases, account settings, or geographic
            location), and then identifies the customer's intent. Virtual agents are most effective in customer service
            applications in service-heavy industries like financial services, retail, travel, and telecom.
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

export default IntelligentAutomation_services;