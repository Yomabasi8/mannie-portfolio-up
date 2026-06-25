import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="bg-brand-bg pt-20 sm:pt-28 pb-12 sm:pb-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image collage */}
        <div className="relative mx-auto w-full max-w-[480px] aspect-[648/443]">
          <div className="absolute left-0 top-0 w-[68%] aspect-[888/516] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/Mic 1.png"
              alt="Two hosts recording together in a home studio"
              fill
              sizes="(max-width: 1024px) 80vw, 35vw"
              className="object-cover"
            />
          </div>
          <div className="absolute left-[31%] top-[42%] w-[68%] aspect-[888/516] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/Mic 2.png"
              alt="Two hosts recording with a podcast mixer"
              fill
              sizes="(max-width: 1024px) 80vw, 35vw"
              className="object-cover"
            />
          </div>

          {/* Decorative scribbles */}
          <Image
            src="/images/glit.png"
            alt=""
            width={120}
            height={115}
            className="absolute -top-10 left-[68%] w-14 sm:w-16 pointer-events-none animate-blink"
          />
          <Image
            src="/images/glit.png"
            alt=""
            width={120}
            height={115}
            className="absolute -bottom-9 left-[18%] w-14 sm:w-16 rotate-180 pointer-events-none animate-blink [animation-delay:1.2s]"
          />
        </div>

        {/* Copy */}
        <div className="relative">
          <div className="absolute top-8 sm:top-9 right-6 sm:right-10 w-14 h-14 sm:w-16 sm:h-16 -z-10">
            <Image src="/images/Ellipse 1.png" alt="" fill sizes="64px" className="object-contain" />
          </div>

          <p className="font-jetbrains text-sm text-brand-black-light/70 mb-3">Who we are</p>
          <h2 className="font-bricolage text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-brand-black-dark leading-[1.2] tracking-tight mb-6">
            Giving You the Push to Make Waves with Your Voice
          </h2>
          <p className="font-poppins text-base text-brand-black-light leading-relaxed mb-5">
            Welcome to Wave Productions, where we take your raw audio files (WAV, MP3 & M4A) and shape them into smooth, powerful episodes. Like an ocean wave quietly building beneath the surface, your podcast already has the energy to be impactful. It just needs the right push. That&apos;s where we come in.
          </p>
          <p className="font-poppins text-base text-brand-black-light leading-relaxed mb-8">
            We take care of the editing, mixing and mastering, distribution and uploads across streaming platforms like Spotify, Apple Podcasts, and more. The finished product is an episode with clarity, and good sound quality your voice deserves.
          </p>

        </div>
      </div>
    </section>
  );
}
