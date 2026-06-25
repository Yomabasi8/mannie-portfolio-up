import React from "react";
import Image from "next/image";

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function WaveformIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5">
      <line x1="4" y1="10" x2="4" y2="14" />
      <line x1="8" y1="6" x2="8" y2="18" />
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="16" y1="7" x2="16" y2="17" />
      <line x1="20" y1="9" x2="20" y2="15" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="16" y2="17" />
    </svg>
  );
}

function PodcastIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5">
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      <path d="M8.5 8.5a5 5 0 0 0 0 7" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7" />
      <path d="M5.5 5.5a9 9 0 0 0 0 13" />
      <path d="M18.5 5.5a9 9 0 0 1 0 13" />
    </svg>
  );
}

function BrushIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  );
}

const services = [
  {
    title: "Podcast Consultation",
    description:
      "Not sure where to start? We help you find your frequency, shape your concept, and build a clear roadmap for your show before you ever hit record.",
    icon: ChatIcon,
    iconBg: "bg-brand-button",
    iconColor: "text-white",
    featured: false,
  },
  {
    title: "Audio Podcast Editing",
    description:
      "We clean up your raw audio, remove distractions, and shape every episode into a smooth, professional listen your audience will keep coming back for.",
    icon: WaveformIcon,
    iconBg: "bg-white",
    iconColor: "text-brand-navy",
    featured: true,
  },
  {
    title: "Show Notes Writing",
    description:
      "We write clear, engaging show notes that capture your episode highlights, make your content searchable, and give your audience a reason to tune in.",
    icon: DocumentIcon,
    iconBg: "bg-[#DCEAFF]",
    iconColor: "text-brand-secondary",
    featured: false,
  },
  {
    title: "Podcast Distribution",
    description:
      "We handle your uploads to Spotify, Apple Podcasts, and other streaming platforms so your episodes go live on time, every time, without the back and forth.",
    icon: PodcastIcon,
    iconBg: "bg-[#3B5FE3]",
    iconColor: "text-white",
    featured: false,
  },
  {
    title: "Cover Art Design",
    description:
      "Your podcast cover is the first wave your audience sees. We design artwork that is bold, on-brand, and built to stand out on every platform.",
    icon: BrushIcon,
    iconBg: "bg-brand-navy",
    iconColor: "text-white",
    featured: false,
  },
];

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const Icon = service.icon;
  return (
    <div
      className={`w-full sm:w-[calc((100%-3rem)/3)] rounded-2xl border-2 p-7 shadow-[6px_6px_0px_0px_#0A3774] hover:animate-card-bounce ${
        service.featured
          ? "bg-brand-button border-brand-navy text-white"
          : "bg-white border-brand-button text-brand-black-dark"
      }`}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${service.iconBg} ${service.iconColor}`}>
        <Icon />
      </div>
      <h3 className="font-bricolage text-xl font-bold mb-3">{service.title}</h3>
      <p className={`font-poppins text-sm leading-relaxed ${service.featured ? "text-white/90" : "text-brand-black-light"}`}>
        {service.description}
      </p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-brand-bg pt-12 sm:pt-16 pb-20 sm:pb-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-16">
          <p className="font-jetbrains text-sm tracking-widest text-brand-black-light/70 mb-3 uppercase">
            Our Services
          </p>
          <div className="relative inline-block">
            <div className="absolute top-7 sm:top-9 lg:top-12 left-[16%] w-14 h-14 sm:w-16 sm:h-16 -z-10">
              <Image src="/images/Ellipse 1.png" alt="" fill sizes="64px" className="object-contain" />
            </div>
            <h2 className="font-bricolage text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-brand-black-dark leading-[1.25] tracking-tight">
              Everything Your Podcast Needs, Handled with Care and Crafted to Make Waves
            </h2>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
          {services.slice(3).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
