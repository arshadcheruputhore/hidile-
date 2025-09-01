import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "You made it so simple. My new site is so much faster and easier to work with than my old site.",
      name: "John Doe",
      title: "Graphic Designer",
      avatar: "/img/avatar1.png"
    },
    {
      id: 2,
      quote: "Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users.",
      name: "John Doe",
      title: "Graphic Designer",
      avatar: "/img/avatar2.png"
    },
    {
      id: 3,
      quote: "Must have book for all, who want to be Product Designer or Interaction Designer.",
      name: "John Doe",
      title: "Graphic Designer",
      avatar: "/img/avatar3.png"
    }
  ];

  return (
    <section className="pt-12 sm:pt-16 lg:pt-20 pb-4 sm:pb-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-3xl md:text-3xl font-medium  text-gray-800 leading-tight sm:leading-9 md:leading-[48px]">
            What people say about us
          </h2>
          <p className="leading-relaxed text-gray-500 text-sm sm:text-base mt-1">
            With lots of unique blocks, you can easily build a page without coding. Build <br className='max-sm:hidden' /> your <br className='lg:hidden'/>next landing page.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-zinc-200 hover:shadow-md transition-shadow duration-300"
            >
              {/* Avatar */}
              <div className="mb-8 sm:mb-12">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              </div>

              {/* Quote */}
              <blockquote className="mb-8 sm:mb-12">
                <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-normal">
                  “{testimonial.quote}”
                </p>
              </blockquote>

              {/* Author */}
              <div>
                <div className="font-semibold text-gray-900 text-base sm:text-lg mb-1">
                  {testimonial.name}
                </div>
                <div className="text-gray-500 text-sm sm:text-base">
                  {testimonial.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;