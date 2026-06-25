import Image from "next/image";

const podcasts = [
  { src: "/images/MDR2.png", alt: "Million Dollar Relationships with Kevin Thompson" },
  { src: "/images/ATG.png", alt: "Ain't That Good Podcast" },
  { src: "/images/Grieve_with_Christ_After_Loss_-_Podcast_Cover_Art86hh0 (2).png", alt: "Grieve With Christ After Loss" },
  { src: "/images/TUR.png", alt: "The Unity Rock Podcast" },
  { src: "/images/Unserious pod.png", alt: "The Unserious Podcast" },
  { src: "/images/Blank space.png", alt: "The Blank Page" },
  { src: "/images/Dark Academia.jpeg", alt: "Dark Academia: The Podcast" },
  { src: "/images/On record.png", alt: "On Record with Mannie" },
];

export default function Clients() {
  return (
    <section id="clients" className="bg-white py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-16">
          <p className="font-jetbrains text-sm tracking-widest text-brand-black-light/70 uppercase mb-3">
            Clients
          </p>
          <div className="relative inline-block mb-6">
            <div className="absolute -left-6 sm:-left-8 -top-3 sm:-top-4 w-16 h-16 sm:w-20 sm:h-20 -z-10">
              <Image src="/images/Ellipse 1.png" alt="" fill sizes="80px" className="object-contain" />
            </div>
            <h2 className="font-bricolage text-3xl sm:text-4xl font-extrabold text-brand-black-dark tracking-tight">
              Podcasters Who Trust Us
            </h2>
          </div>
          <p className="font-poppins text-base sm:text-lg text-brand-black-light max-w-2xl mx-auto leading-relaxed">
            Wave productions is the easiest way to get your podcast online and distributed to your listeners
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {podcasts.map((podcast) => (
            <div key={podcast.src} className="relative aspect-square rounded-2xl overflow-hidden">
              <Image src={podcast.src} alt={podcast.alt} fill sizes="(max-width: 640px) 45vw, 260px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
