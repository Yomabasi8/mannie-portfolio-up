import Image from "next/image";
import Link from "next/link";

export default function Founder() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Image collage */}
        <div className="relative mx-auto w-full max-w-[480px] h-[520px]">
          {/* Top-left blue rectangle */}
          <div className="absolute top-0 left-0 w-[55%] h-[55%] rounded-2xl overflow-hidden">
            <Image src="/images/blugsh (1).png" alt="" fill className="object-cover" sizes="264px" />
          </div>

          {/* Founder photo */}
          <div className="absolute top-[6%] left-[12%] w-[65%] h-[80%] rounded-2xl overflow-hidden shadow-lg z-10 group">
            <Image
              src="/images/manie Founder.png"
              alt="Emmanuel Okonko, Founder of Wave Productions"
              fill
              sizes="(max-width: 1024px) 60vw, 320px"
              className="object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-105"
              priority
            />
          </div>

          {/* Bottom-right blue rectangle */}
          <div className="absolute bottom-[4%] right-[4%] w-[55%] h-[55%] rounded-2xl overflow-hidden">
            <Image src="/images/blugsh (1).png" alt="" fill className="object-cover" sizes="264px" />
          </div>
        </div>

        {/* Copy */}
        <div>
          <p className="font-jetbrains text-sm tracking-widest text-brand-black-light/70 mb-4">
            Meet Our Founder
          </p>
          <h2 className="font-bricolage text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-black-dark leading-tight mb-6">
            Hi, I&apos;m Emmanuel Okonko
          </h2>
          <p className="font-poppins text-base text-brand-black-light leading-relaxed mb-5">
            Founder of Wave Productions with over 5 years editing for podcasters across genres, plus years behind the mic as a host myself. I bring a perspective most editors don&apos;t have.
          </p>
          <p className="font-poppins text-base text-brand-black-light leading-relaxed mb-8">
            I started Wave Productions because I know how much of yourself goes into a single episode, and I wanted hosts to have an editor who treats their show with that same care.
          </p>
          <Link
            href="/about"
            className="bg-brand-button text-white font-jetbrains text-sm font-bold px-8 py-3.5 rounded-lg border-2 border-brand-black-dark shadow-[3px_3px_0px_0px_#060606] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#060606] active:translate-x-[3px] active:translate-y-[3px] active:shadow-[0px_0px_0px_0px_#060606] transition-all duration-150 inline-block"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
