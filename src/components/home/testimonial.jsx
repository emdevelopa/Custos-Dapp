"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    text: "It is an awesome program that makes one to focus on learning industry standard Blockchain Development, without having to worry about basic amenities. I had an awesome experience during the cohort V.",
    name: "John Odey",
    role: "Blockchain Developer - Netherminds",
  },
  {
    text: "The mentorship and guidance were top-notch. I got hands-on experience and learned how to work on real-world blockchain projects.",
    name: "Sarah Lee",
    role: "Smart Contract Engineer - ConsenSys",
  },
  {
    text: "The community is amazing. I made lifelong friends while leveling up my skills in blockchain development.",
    name: "Michael Chen",
    role: "Blockchain Architect - Polygon",
  },
  {
    text: "This program gave me the confidence to work in blockchain professionally. The environment is very supportive.",
    name: "Aisha Bello",
    role: "Solidity Developer - Chainlink Labs",
  },
];

export default function TestimonialSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  return (
    <div className="w-full overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex-[0_0_90%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] p-4"
          >
            <div className="h-full rounded-xl border border-neutral-800 bg-black/40 p-6 shadow-lg backdrop-blur-sm transition hover:shadow-xl hover:border-neutral-600">
              <p className="text-neutral-300 leading-relaxed mb-4">{t.text}</p>
              <h4 className="font-semibold text-white">{t.name}</h4>
              <p className="text-sm text-neutral-400">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
