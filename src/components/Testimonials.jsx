import React, { useEffect, useRef, useState } from "react";

function Testimonials() {
  const testimonials = [
    { id: 1, quote: "Hidile has been a game-changer for Blishoper! They helped us smoothly scale to 100K+ users, providing continuous tech support and advanced analytics to enhance our e-commerce journey. Their dedication to on-time project delivery and immediate resolution of any issues is truly outstanding. A huge thanks to Hidile for making our expansion seamless and hassle-free!", name: "Blishoper india", title: "CEO", avatar: "/img/Billshoper_scroll.png" },
    { id: 2, quote: "Over the 14 years of my experience in Business Management, I’m so glad to meet and work with Team Hidile. The entire team of Hidile have a culture of developing and learning every day. As the technology developed by Hidile is always meeting the purpose of business, most of the time we ignore the poor front end design.", name: "Madre Integrated Engineering, Qatar", title: "COO", avatar: "/img/Madre_scroll.jpg" },
  ];

  const [visibleItems, setVisibleItems] = useState(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);
  const itemRefs = useRef([]);

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

  const getCardClassName = (i, base) =>
    [
      base,
      "transition-[opacity,transform,box-shadow] duration-700 ease-out will-change-[opacity,transform] scale-100",
      visibleItems.has(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 scale-95",
    ].join(" ");

  return (
    <section className="pt-8 lg:pt-10 pb-4 sm:pb-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`sm:mb-8 mb-6 text-center transition-all duration-1000 ease-out ${headerVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-12'
            }`}
        >
          <h2 className="text-xl sm:text-3xl md:text-3xl font-medium text-gray-800 leading-tight sm:leading-9 md:leading-[48px]">
            What people say about us
          </h2>
          <p className="leading-relaxed text-gray-500 text-sm sm:text-base mt-1">
            With lots of unique blocks, you can easily build a page without coding. Build <br className="max-sm:hidden" /> your <br className="lg:hidden" />
            next landing page.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={el => itemRefs.current[index] = el}
              data-index={index}
              className={getCardClassName(
                index,
                "bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-zinc-200 hover:shadow-md"
              )}
              style={{
                transitionDelay: `${index * 120}ms`
              }}
            >
              {/* Avatar */}
              <div className="mb-8 sm:mb-12">
                <div className="w-24 h-14 sm:w-32 sm:h-12 bg-gray-100 border p-1 rounded-md border-zinc-200 overflow-hidden">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </div>

              {/* Quote */}
              <blockquote className="mb-8 sm:mb-12">
                <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-normal">
                  "{testimonial.quote}"
                </p>
              </blockquote>

              {/* Author */}
              <div>
                <div className="font-semibold text-gray-900 text-base sm:text-lg mb-1">{testimonial.name}</div>
                <div className="text-gray-500 text-sm sm:text-base">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
