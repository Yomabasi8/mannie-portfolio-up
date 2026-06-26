import Image from "next/image";

export default function ClientsHero() {
  return (
    <section className="relative bg-brand-button overflow-hidden py-10 sm:py-14 flex items-center">
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="relative font-bricolage text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-none">
          <span className="relative inline-block">
            <div className="absolute -z-10 top-1/2 -translate-y-1/2 -left-2 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 pointer-events-none">
              <Image src="/images/black circle.png" alt="" fill className="object-contain" />
            </div>
            M
          </span>
          y Clients
        </h1>

        <p className="font-poppins text-base sm:text-lg text-white/90 max-w-xl mx-auto mt-6 leading-relaxed">
          We&apos;re grateful to have worked with amazing clients who trust us to bring their stories to life through engaging podcast experiences
        </p>
      </div>
    </section>
  );
}
