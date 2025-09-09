import React, { useEffect, useRef, useState } from "react";

function Testimonials() {
  const testimonials = [
    { id: 1, quote: "You made it so simple. My new site is so much faster and easier to work with than my old site.", name: "John Doe", title: "Graphic Designer", avatar: "/img/avatar1.png" },
    { id: 2, quote: "Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users.", name: "John Doe", title: "Graphic Designer", avatar: "/img/avatar2.png" },
    { id: 3, quote: "Must have book for all, who want to be Product Designer or Interaction Designer.", name: "John Doe", title: "Graphic Designer", avatar: "/img/avatar3.png" },
  ];

  const [visible, setVisible] = useState(() => new Set()); // indexes revealed
  const cardRefs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = Number(entry.target.getAttribute("data-index"));
          setVisible((prev) => {
            if (prev.has(idx)) return prev; // no re-render
            const next = new Set(prev);
            next.add(idx);
            return next;
          });
          io.unobserve(entry.target); // reveal once
        });
      },
      {
        threshold: 0.2,            // at least 20% visible
        rootMargin: "0px 0px -10% 0px", // don't trigger too early near bottom
      }
    );

    cardRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const setCardRef = (i) => (el) => {
    cardRefs.current[i] = el;
  };

  const getCardClassName = (i, base) =>
    [
      base,
      "transition-[opacity,transform,box-shadow] duration-700 ease-out will-change-[opacity,transform]",
      visible.has(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
    ].join(" ");

  const getDelay = (i) => ({ transitionDelay: `${i * 150}ms` });

  return (
    <section className="pt-8 lg:pt-10 pb-4 sm:pb-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-3xl md:text-3xl font-medium text-gray-800 leading-tight sm:leading-9 md:leading-[48px]">
            What people say about us
          </h2>
          <p className="leading-relaxed text-gray-500 text-sm sm:text-base mt-1">
            With lots of unique blocks, you can easily build a page without coding. Build <br className="max-sm:hidden" /> your <br className="lg:hidden" />
            next landing page.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              data-index={i}
              ref={setCardRef(i)}
              className={getCardClassName(
                i,
                "bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-zinc-200 hover:shadow-md"
              )}
              style={getDelay(i)}
            >
              {/* Avatar */}
              <div className="mb-8 sm:mb-12">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </div>

              {/* Quote */}
              <blockquote className="mb-8 sm:mb-12">
                <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-normal">
                  "{t.quote}"
                </p>
              </blockquote>

              {/* Author */}
              <div>
                <div className="font-semibold text-gray-900 text-base sm:text-lg mb-1">{t.name}</div>
                <div className="text-gray-500 text-sm sm:text-base">{t.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
