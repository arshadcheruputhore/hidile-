import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ReachUs_GetStarted = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    workEmail: '',
    companyName: '',
    industry: '',
    teamSize: ''
  });

  const [isIndustryOpen, setIsIndustryOpen] = useState(false);
  const [isTeamSizeOpen, setIsTeamSizeOpen] = useState(false);

  const industries = [
    'Finance & Accounting',
    'E-commerce',
    'Automotive',
    'Healthcare',
    'Manufacturing',
    'Logistics & Transportation',
    'Real Estate & Construction',
    'Professional Services'
  ];

  const teamSizes = [
    '1-10',
    '11-20',
    '21-30',
    '31-40',
    '41-50',
    '51+'
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
    if (field === 'industry') {
      setIsIndustryOpen(false);
    } else if (field === 'teamSize') {
      setIsTeamSizeOpen(false);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="w-full -mt-[10%] relative z-10">
      <div className="max-w-5xl mx-auto bg-blue-50 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 rounded-2xl">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Get in Touch with Hidile OKR
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Have questions or want to see Hidile OKR in action? Fill out the form 
            below and our team will connect with you.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {/* Name and Phone Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name...."
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Phone Number...."
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Email and Company Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="email"
                name="workEmail"
                value={formData.workEmail}
                onChange={handleInputChange}
                placeholder="Work Email...."
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>
            <div>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Company Name...."
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Industry and Team Size Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Industry Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsIndustryOpen(!isIndustryOpen)}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-left text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base flex justify-between items-center"
              >
                <span className={formData.industry ? 'text-gray-700' : 'text-gray-400'}>
                  {formData.industry || 'Industry....'}
                </span>
                <ChevronDown 
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    isIndustryOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {isIndustryOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                  {industries.map((industry) => (
                    <button
                      key={industry}
                      type="button"
                      onClick={() => handleSelectChange('industry', industry)}
                      className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 text-sm sm:text-base transition-colors duration-150"
                    >
                      {industry}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Team Size Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsTeamSizeOpen(!isTeamSizeOpen)}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-left text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base flex justify-between items-center"
              >
                <span className={formData.teamSize ? 'text-gray-700' : 'text-gray-400'}>
                  {formData.teamSize || 'Team Size....'}
                </span>
                <ChevronDown 
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    isTeamSizeOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {isTeamSizeOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-40 max-h-60 overflow-y-auto">
                  {teamSizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => handleSelectChange('teamSize', size)}
                      className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 text-sm sm:text-base transition-colors duration-150"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-2 sm:pt-4">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg transition-colors duration-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Let's Talk Goals
            </button>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdowns */}
      {(isIndustryOpen || isTeamSizeOpen) && (
        <div 
          className="fixed inset-0 z-30"
          onClick={() => {
            setIsIndustryOpen(false);
            setIsTeamSizeOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default ReachUs_GetStarted;