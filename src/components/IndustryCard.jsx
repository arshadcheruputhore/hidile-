import React, { useEffect, useRef, useState } from 'react';
import {
  Calculator,
  Truck,
  Car,
  Home,
  Activity,
  Hammer,
  Factory,
  Briefcase
} from "lucide-react";

function Card({ icon: Icon, bgColor, iconColor, title, description, index }) {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    // Items observer
    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) {
        itemObserver.observe(ref);
      }
    });
    observers.push(itemObserver);

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div
      ref={el => itemRefs.current[index] = el}
      data-index={index}
      className={`relative group transform transition-all duration-700 ease-out ${visibleItems.has(index)
        ? 'translate-y-0 opacity-100 scale-100'
        : 'translate-y-12 opacity-0 scale-95'
        }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Hover background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-blue-600 to-blue-100 rounded-2xl transform rotate-1 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-2 transition-all duration-500 ease-out shadow-xl"></div>

      {/* Main Card */}
      <div className="relative bg-white rounded-xl lg:rounded-2xl p-3 lg:p-5 pb-6 lg:pb-10 shadow-sm border-2 border-solid border-zinc-300 hover:shadow-md transition-all duration-500 hover:translate-y-[-2px] z-10 backdrop-blur-sm min-h-[150px] lg:min-h-[200px]">
        {/* Icon */}
        <div className={`w-10 h-10 lg:w-12 lg:h-12 ${bgColor} rounded-lg lg:rounded-xl flex items-center justify-center mb-4 lg:mb-5`}>
          <Icon className={`w-5 h-5 lg:w-7 lg:h-7 ${iconColor}`} />
        </div>

        {/* Content */}
        <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2 sm:mb-2.5 group-hover:text-gray-800 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 leading-[18px] lg:leading-[22px] text-xs lg:text-sm group-hover:text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function IndustryCard() {

  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observers = [];

    // Header observer
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
      observers.push(headerObserver);
    }

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <section className="sm:mt-10 mt-8 sm:px-3 px-1">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`sm:mb-8 mb-6 text-center transition-all duration-1000 ease-out ${headerVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-12'
            }`}
        >
          <h1 className="text-2xl sm:text-3xl font-medium md:text-4xl text-gray-900 mb-2 sm:mb-2.5 leading-tight">
            We are everywhere
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base sm:px-0">
            From finance to manufacturing, healthcare to retail — manage projects, tasks, and teams with one powerful, flexible solution that adapts to the way you work.
          </p>
        </div>

        {/* Features Grid - Mobile: Alternating single column, Desktop: 4 columns */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">

          {/* Column 1 */}
          <div className="space-y-6">
            <Card
              icon={Calculator}
              bgColor="bg-blue-100"
              iconColor="text-blue-600"
              title="Finance & Accounting"
              description="CA firms, tax management, compliance, and financial reporting"
              index={0}
            />
            <Card
              icon={Activity}
              bgColor="bg-green-100"
              iconColor="text-green-600"
              title="Healthcare"
              description="Patient management, EHR systems, telemedicine, and clinical workflows"
              index={4}
            />
          </div>

          {/* Column 2 */}
          <div className="space-y-6 mt-12">
            <Card
              icon={Truck}
              bgColor="bg-green-100"
              iconColor="text-green-600"
              title="Logistics & Transport"
              description="Fleet management, route optimization, and delivery tracking"
              index={1}
            />
            <Card
              icon={Hammer}
              bgColor="bg-cyan-100"
              iconColor="text-cyan-600"
              title="Construction"
              description="Project management, safety compliance, and resource planning"
              index={5}
            />
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            <Card
              icon={Car}
              bgColor="bg-orange-100"
              iconColor="text-orange-600"
              title="Automotive"
              description="Service management, parts inventory, and customer relations"
              index={2}
            />
            <Card
              icon={Factory}
              bgColor="bg-pink-100"
              iconColor="text-pink-600"
              title="Manufacturing"
              description="Production planning, quality control, and supply chain management"
              index={6}
            />
          </div>

          {/* Column 4 */}
          <div className="space-y-6 mt-12">
            <Card
              icon={Home}
              bgColor="bg-purple-100"
              iconColor="text-purple-600"
              title="Real Estate"
              description="Property management, client tracking, and transaction workflows"
              index={3}
            />
            <Card
              icon={Briefcase}
              bgColor="bg-red-100"
              iconColor="text-red-600"
              title="Professional Services"
              description="Client management, project billing, and service delivery"
              index={7}
            />
          </div>

        </div>

        {/* Mobile: Single column with alternating alignment */}
        <div className="lg:hidden space-y-4">
          {/* Card 1 - Right aligned */}
          <div className="flex justify-end">
            <div className="w-[85%]">
              <Card
                icon={Calculator}
                bgColor="bg-blue-100"
                iconColor="text-blue-600"
                title="Finance & Accounting"
                description="CA firms, tax management, compliance, and financial reporting"
                index={0}
              />
            </div>
          </div>

          {/* Card 2 - Left aligned */}
          <div className="flex justify-start">
            <div className="w-[85%]">
              <Card
                icon={Truck}
                bgColor="bg-green-100"
                iconColor="text-green-600"
                title="Logistics & Transport"
                description="Fleet management, route optimization, and delivery tracking"
                index={1}
              />
            </div>
          </div>

          {/* Card 3 - Right aligned */}
          <div className="flex justify-end">
            <div className="w-[85%]">
              <Card
                icon={Car}
                bgColor="bg-orange-100"
                iconColor="text-orange-600"
                title="Automotive"
                description="Service management, parts inventory, and customer relations"
                index={2}
              />
            </div>
          </div>

          {/* Card 4 - Left aligned */}
          <div className="flex justify-start">
            <div className="w-[85%]">
              <Card
                icon={Home}
                bgColor="bg-purple-100"
                iconColor="text-purple-600"
                title="Real Estate"
                description="Property management, client tracking, and transaction workflows"
                index={3}
              />
            </div>
          </div>

          {/* Card 5 - Right aligned */}
          <div className="flex justify-end">
            <div className="w-[85%]">
              <Card
                icon={Activity}
                bgColor="bg-green-100"
                iconColor="text-green-600"
                title="Healthcare"
                description="Patient management, EHR systems, telemedicine, and clinical workflows"
                index={4}
              />
            </div>
          </div>

          {/* Card 6 - Left aligned */}
          <div className="flex justify-start">
            <div className="w-[85%]">
              <Card
                icon={Hammer}
                bgColor="bg-cyan-100"
                iconColor="text-cyan-600"
                title="Construction"
                description="Project management, safety compliance, and resource planning"
                index={5}
              />
            </div>
          </div>

          {/* Card 7 - Right aligned */}
          <div className="flex justify-end">
            <div className="w-[85%]">
              <Card
                icon={Factory}
                bgColor="bg-pink-100"
                iconColor="text-pink-600"
                title="Manufacturing"
                description="Production planning, quality control, and supply chain management"
                index={6}
              />
            </div>
          </div>

          {/* Card 8 - Left aligned */}
          <div className="flex justify-start">
            <div className="w-[85%]">
              <Card
                icon={Briefcase}
                bgColor="bg-red-100"
                iconColor="text-red-600"
                title="Professional Services"
                description="Client management, project billing, and service delivery"
                index={7}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}