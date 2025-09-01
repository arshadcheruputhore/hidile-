import { ArrowRight, Cloud } from "lucide-react";

// Responsive Enterprise Cloud Solutions Component
const EnterpriseCloudSolutions_services = () => {
  return (
    <section id="enterprise-cloud" className="mb-8 lg:mb-12">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-center gap-2 lg:gap-3 mb-6 text-blue-500 bg-blue-100 w-max pr-2 lg:pr-3 pl-1 lg:pl-1.5 lg:py-1 py-1 rounded-full">
          <div className="w-5 h-5 sm:w-7 sm:h-7 text-white flex font-semibold items-center justify-center bg-blue-700 rounded-full">
            <Cloud className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
          <h1 className="text-sm sm:text-lg font-semibold text-blue-600">Enterprise Cloud Solutions</h1>
        </div>
        
        {/* Description */}
        <div className="mb-6 lg:mb-8">
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            While cloud computing is becoming increasingly popular in the corporate world, numerous companies 
            grapple with comprehending its strategic significance. The cloud can deliver value across your business's 
            economic, technical, and strategic dimensions. Organizations that have embraced cloud services have 
            reported diverse performance improvements stemming from their adoption. Hidile will effectively 
            coordinate complementary capabilities and lead you to higher returns using cloud adoption.
          </p>
        </div>
        
        {/* Image */}
        <div className="mb-6 lg:mb-8">
          <img 
            src="/img/enterprise_services.png" 
            alt="enterprise-img" 
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
        
        {/* Additional Description */}
        <div className="mb-6 lg:mb-8">
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Cloud services with uniform infrastructure, data management, and business processes have a competitive 
            edge. These services allow for isolating specific processes ideal for cloud services, facilitating the seamless 
            adoption of cloud vendors' best practices. With our consolidated and standardized technical foundation, 
            you will be well-prepared for swift deployment and cost-effective access to cloud services.
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

export default EnterpriseCloudSolutions_services;