"use client";

import { useState } from "react";
import Image from "next/image";

function AvatarPlaceholder() {
  return (
    <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
      <svg viewBox="0 0 24 24" fill="none" className="w-[60%] h-[60%] text-gray-400" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" />
      </svg>
    </div>
  );
}

const testimonials = [
  {
    name: "Ejiro Isoken",
    flag: "🇨🇦",
    podcast: "Audio Edit (Book Launch)",
    quote:
      "Emmanuel was super amazing; he listened to what I wanted, offered quick solutions, and delivered the podcast within 48 hours.",
    avatar: null,
  },
  {
    name: "Raman R.",
    flag: "🇺🇸",
    podcast: "Zero to One: Product Journeys Podcast",
    quote:
      "Working with Emmanuel on my podcast production was an exceptional experience! His sound quality and professionalism exceeded my expectations.",
    avatar: null,
  },
  {
    name: "Kevin Thompson",
    flag: "🇺🇸",
    podcast: "The Million Dollar Relationship Podcast",
    quote:
      "What I appreciate most about working with Emmanuel is that he takes care of all the technical stuff so I can focus on what I love most, which is interviewing my guests.",
    avatar: "/images/Kevin Thompson headshot.jpg",
  },
  {
    name: "Oyun Orka",
    flag: "🇺🇸",
    podcast: "Youtube Audio Edit",
    quote:
      "Amazing as always! Emmanuel is the GOAT. Always super responsive, great turnaround time, delivers above and beyond work.",
    avatar: "/images/Oyun Orka youtube dp.jpg",
  },
  {
    name: "Dr. Amelia Cole",
    flag: "🇺🇸",
    podcast: "Audio Interview Edit",
    quote:
      "We always enjoy working with Emmanuel! His work is exceptional and he communicates well. He has been a consistent partner for our podcast.",
    avatar: null,
  },
  {
    name: "Linh Lee",
    flag: "🇦🇺",
    podcast: "The Me I'm Becoming Podcast",
    quote:
      "Emmanuel exceeded all my expectations! He completed my work in just a few hours after I placed it, even though I wasn't in any rush at all. He's incredibly professional, hardworking, and such a kind person to work with. Communication was easy and he made the whole process stress-free. I'm really impressed with his efficiency and would definitely hire him again!",
    avatar: "/images/Linh Lee.png",
  },
  {
    name: "Dark Academia",
    flag: "🇺🇸",
    podcast: "Dark Academia: The Podcast",
    quote:
      "The sound quality and exceptional editing propel him above and beyond; we couldn't commend him enough for his hard work!",
    avatar: null,
  },
  {
    name: "Debbi McCullough",
    flag: "🇳🇿",
    podcast: "The Sage Sayers Podcast",
    quote: "Lovely to work with Emmanuel. Great sound producer.",
    avatar: null,
  },
];

const CARDS_PER_PAGE = 3;

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="#F4C430" className="w-4 h-4">
      <path d="M10 1.5l2.59 5.25 5.8.84-4.2 4.09.99 5.77L10 14.77l-5.18 2.68.99-5.77-4.2-4.09 5.8-.84z" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / CARDS_PER_PAGE);

  return (
    <section id="testimonials" className="bg-brand-bg py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-16">
          <p className="font-jetbrains text-sm tracking-widest text-brand-black-light/70 uppercase mb-3">
            Testimonials
          </p>
          <div className="relative inline-block">
            <div className="absolute -top-3 -right-6 sm:-right-8 w-16 h-16 sm:w-20 sm:h-20 -z-10">
              <Image src="/images/Ellipse 1.png" alt="" fill sizes="80px" className="object-contain" />
            </div>
            <h2 className="font-bricolage text-3xl sm:text-4xl font-extrabold text-brand-black-dark tracking-tight">
              What Our Clients are Saying
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* Left arrow */}
          <button
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 0}
            aria-label="Previous testimonials"
            className="shrink-0 w-10 h-10 rounded-full border-2 border-brand-black-dark bg-white flex items-center justify-center shadow-[2px_2px_0px_0px_#060606] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#060606] disabled:opacity-30 disabled:cursor-not-allowed disabled:shadow-[2px_2px_0px_0px_#060606] disabled:translate-x-0 disabled:translate-y-0 transition-all duration-150"
          >
            <ChevronLeft />
          </button>

          {/* Sliding track */}
          <div className="flex-1 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div key={pageIndex} className="w-full shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {testimonials
                    .slice(pageIndex * CARDS_PER_PAGE, (pageIndex + 1) * CARDS_PER_PAGE)
                    .map((testimonial) => (
                      <div
                        key={testimonial.name}
                        className="group relative overflow-hidden rounded-2xl bg-white p-4 sm:p-6 max-w-[260px] mx-auto sm:max-w-none sm:mx-0 flex flex-col"
                      >
                        <span className="absolute left-0 top-4 bottom-4 sm:top-6 sm:bottom-6 w-1 rounded-full bg-brand-button origin-center scale-y-100 sm:scale-y-0 transition-transform duration-300 ease-out sm:group-hover:scale-y-100" />

                        <div className="flex items-center gap-3 mb-3 sm:mb-4">
                          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0">
                            {testimonial.avatar ? (
                              <Image src={testimonial.avatar} alt={testimonial.name} fill sizes="56px" className="object-cover" />
                            ) : (
                              <AvatarPlaceholder />
                            )}
                          </div>
                          <div>
                            <p className="font-bricolage font-bold text-sm sm:text-base text-brand-black-dark">
                              {testimonial.name} {testimonial.flag}
                            </p>
                            <p className="font-poppins text-[10px] sm:text-xs text-brand-black-light/70">{testimonial.podcast}</p>
                          </div>
                        </div>

                        <p className="font-poppins text-xs sm:text-sm text-brand-black-light leading-relaxed mb-3 sm:mb-4 flex-1">
                          {testimonial.quote}
                        </p>

                        <div className="flex justify-end gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <StarIcon key={i} />
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={page === totalPages - 1}
            aria-label="Next testimonials"
            className="shrink-0 w-10 h-10 rounded-full border-2 border-brand-black-dark bg-white flex items-center justify-center shadow-[2px_2px_0px_0px_#060606] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#060606] disabled:opacity-30 disabled:cursor-not-allowed disabled:shadow-[2px_2px_0px_0px_#060606] disabled:translate-x-0 disabled:translate-y-0 transition-all duration-150"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
