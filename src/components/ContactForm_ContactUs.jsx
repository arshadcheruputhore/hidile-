import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactForm_ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        subject: 'General Inquiry',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    const subjectOptions = [
        'General Inquiry',
        'Technical Support',
        'Sales Inquiry',
        'Partnership'
    ];

    return (
        <div className="px-2 sm:px-6 lg:px-8 mt-12 lg:mt-24">
            <div className="max-w-7xl mx-auto ">
                {/* Main Section Header */}
                <div className="text-center mb-4 lg:mb-8">
                    <h1 className="text-xl sm:text-3xl font-medium text-gray-900 mb-2 lg:mb-3">
                        Send Us a Message and We'll Get Back to You
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        Send Us a Message and Our Team Will Assist You in Streamlining and<br className="hidden sm:block" />
                        Optimizing Your Task Management Workflow
                    </p>
                </div>

                {/* Contact Form Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 bg-slate-50 p-4 rounded-xl">
                    {/* Left Side - Contact Info Card */}
                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-6 lg:p-8 text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6">
                                Contact Form
                            </h2>
                            <p className="text-blue-50 text-sm lg:text-base leading-relaxed mb-8 lg:mb-12">
                                Fill out the form below, and our team will get back to you promptly. Let's connect and create solutions together.
                            </p>

                            {/* Contact Details */}
                            <div className="space-y-6 lg:space-y-8">
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm lg:text-base">+91 9744101407</span>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm lg:text-base">hello@hidile.com</span>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mt-1">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div className="text-sm lg:text-base">
                                        <div>Hilite business park,</div>
                                        <div>Calicut, Kerala</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative circles */}
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 translate-y-16"></div>
                        <div className="absolute bottom-8 right-8 w-20 h-20 bg-white/10 rounded-full"></div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="">
                        <div className="space-y-4 lg:space-y-6">
                            {/* Name Fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2 lg:mb-2.5 text-sm lg:text-base">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 lg:py-0 text-sm lg:text-base transition-colors duration-200"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2 lg:mb-2.5 text-sm lg:text-base">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 lg:py-0 text-sm lg:text-base transition-colors duration-200"
                                    />
                                </div>
                            </div>

                            {/* Email and Phone */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2 lg:mb-2.5 text-sm lg:text-base">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 lg:py-0 text-sm lg:text-base transition-colors duration-200"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2 lg:mb-2.5 text-sm lg:text-base">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleInputChange}
                                        className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 lg:py-0 text-sm lg:text-base transition-colors duration-200"
                                    />
                                </div>
                            </div>

                            {/* Subject Selection */}
                            <div>
                                <label className="block text-blue-500 font-medium mb-2 lg:mb-2.5 text-sm lg:text-base">
                                    Select Subject?
                                </label>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4">
                                    {subjectOptions.map((option) => (
                                        <div key={option} className="flex items-center cursor-pointer" onClick={() => handleInputChange({target: {name: 'subject', value: option}})}>
                                            <div className={`w-4 h-4 rounded-full border-2 mr-2 flex items-center justify-center ${
                                                formData.subject === option 
                                                    ? 'bg-blue-500 border-blue-500' 
                                                    : 'border-gray-300'
                                            }`}>
                                                {formData.subject === option && (
                                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                                )}
                                            </div>
                                            <span className="text-gray-700 text-xs lg:text-sm">{option}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2 lg:mb-2.5 text-sm lg:text-base">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Write your message..."
                                    rows={3}
                                    className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 lg:py-0 text-sm lg:text-base transition-colors duration-200 resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2 lg:pt-4 flex justify-end">
                                <button
                                    onClick={handleSubmit}
                                    className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 lg:py-2.5 px-4 lg:px-8 rounded-lg transition-colors duration-200 text-sm lg:text-base"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm_ContactUs;