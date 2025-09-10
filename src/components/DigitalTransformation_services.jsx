import { ArrowRight, Globe, MonitorSpeaker, Calendar, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const DigitalTransformation_services = () => {
  const trainingAreas = [
    {
      icon: MonitorSpeaker,
      title: "Shift in Perception",
      description: "We understand the importance of shifting the perception of training from a task to an opportunity for growth and collaboration."
    },
    {
      icon: Calendar,
      title: "Integration into Daily Routines",
      description: "Training becomes second nature when employees seamlessly integrate applications into their daily routines, making it a natural part of their workflow."
    },
    {
      icon: Lightbulb,
      title: "Fostering Innovation",
      description: "Our approach encourages employees not only to adopt new methods and tools but also to explore innovative ways of utilizing them. This fosters a culture of continuous innovation within your organization."
    }
  ];

  return (
    <section id="digital-transformation" className="mb-8 lg:mb-12">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 lg:p-8 max-sm:mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 lg:gap-3 mb-6 text-blue-500 bg-blue-100 w-max pr-2 lg:pr-3 pl-1 lg:pl-1.5 lg:py-1 py-1 rounded-full ">
          <div className="w-5 h-5 sm:w-7 sm:h-7 text-white flex font-semibold items-center justify-center bg-blue-700 rounded-full">
            <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
          <h1 className="text-sm sm:text-lg font-semibold text-blue-600">Digital Transformation and Mobility</h1>
        </div>

        {/* Description */}
        <div className="mb-6 lg:mb-8">
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            In the modern business landscape, digital transformation is the driving force behind staying competitive
            and relevant. It involves strategically integrating digital technologies to reshape operations, enhance
            customer experiences, and drive innovation. Digital transformation is not solely a technological shift; it's a
            cultural shift that necessitates adaptation for organizations to thrive.
          </p>
        </div>

        {/* Image Gallery Section */}
        <div className="mb-6 lg:mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/img/digital_transformation_1.png"
                alt="Digital Analytics Dashboard"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/img/digital_transformation_2.png"
                alt="Collaborative Digital Workspace"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/img/digital_transformation_3.png"
                alt="Mobile Digital Solutions"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* The Power of Engaging Training section */}
        <div className="mb-6 lg:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            The Power of Engaging Training
          </h2>

          <div className="space-y-4 lg:space-y-6 mb-6">
            {trainingAreas.map((area, index) => {
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
            At Hidile, we recognize the pivotal role that effective application training plays in uniting teams from diverse
            departments. We understand that senior leaders often perceive training as an additional task, but we
            believe in transforming this perception by making training sessions engaging, rewarding, and enjoyable.
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

export default DigitalTransformation_services;