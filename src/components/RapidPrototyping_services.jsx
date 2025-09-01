import { ArrowRight, Zap, GitBranch, Eye, Users } from "lucide-react";

const RapidPrototyping_services = () => {
  const prototypingFeatures = [
    {
      icon: GitBranch,
      title: "Bridging the Gap between Concept and Reality",
      description: "Our process thrives on the synergy between visionary designers and discerning clients. It not only sparks creativity but also provides a solid foundation for turning groundbreaking concepts into proven realities. The real magic lies in the transformation of immediate future insights, gathered through prototype users, into legitimate historical data."
    },
    {
      icon: Eye,
      title: "The Power of Immediate Future Insights",
      description: "Imagine having a glimpse into the future—our process effectively captures input data from the immediate future, courtesy of prototype users. This data, once experienced by the user, seamlessly transitions into legitimate historical data. It's a dynamic cycle that propels your design concepts into the realm of real-world impact."
    },
    {
      icon: Users,
      title: "A Play of Perspectives",
      description: "Forgive us for a touch of hyperbole, but the data we generate is akin to light—simultaneously a wave and a particle. It's versatile, embodying the fluidity of forward-thinking ideas while solidifying into the concrete proof of success experienced by our users."
    }
  ];

  return (
    <section id="rapid-prototyping" className="mb-8 lg:mb-12">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 lg:p-8 max-sm:mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 lg:gap-3 mb-6 text-blue-500 bg-blue-100 w-max pr-2 lg:pr-3 pl-1 lg:pl-1.5 lg:py-1 py-1 rounded-full ">
          <div className="w-5 h-5 sm:w-7 sm:h-7 text-white flex font-semibold items-center justify-center bg-blue-700 rounded-full">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
          <h1 className="text-sm sm:text-lg font-semibold text-blue-600">Rapid Prototyping Services</h1>
        </div>

        {/* Introduction */}
        <div className="mb-6 lg:mb-8">
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            In our rapid prototyping approach, every iterative test of the evolving prototype provides invaluable
            glimpses of user interactions, creating a steady stream of data for our clients to observe and derive
            confidence from. Witness the transformative journey as client visibility into user reactions grows increasingly
            positive with each feedback-incorporated iteration—building upon the last and paving the way for the next.
          </p>
        </div>

        <div className="mb-6 lg:mb-8">
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            It's a seamless progression that instills confidence in our clients as user satisfaction steadily rises. Experience
            the power of dynamic prototyping, where every iteration propels not just design refinement but also client
            assurance, culminating in a product that not only meets but exceeds expectations.
          </p>
        </div>

        {/* Key Features section */}
        <div className="mb-6 lg:mb-8">
          <div className="space-y-4 lg:space-y-6 mb-6">
            {prototypingFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex flex-col gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex-shrink-0 flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-800 text-base sm:text-lg">{feature.title}</h3>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mb-6 lg:mb-8">
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Join us on this journey of innovation where design meets practicality, and ideas materialize into impactful
            solutions. Explore the boundless possibilities that our design process unfolds.
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

export default RapidPrototyping_services;