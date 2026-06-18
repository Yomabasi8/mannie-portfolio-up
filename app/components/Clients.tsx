import Image from "next/image";

const podcasts = [
  { src: "/images/Unserious pod.png", alt: "The Unserious Podcast" },
  { src: "/images/ATG.png", alt: "Ain't That Good Podcast" },
  { src: "/images/GWCA.png", alt: "Grieve With Christ After Loss" },
  { src: "/images/TUR.png", alt: "The Unity Rock Podcast" },
  { src: "/images/MDR.png", alt: "Million Dollar Relationships, Episode 392" },
  { src: "/images/Blank space.png", alt: "The Blank Page" },
  { src: "/images/MDR2.png", alt: "Million Dollar Relationships with Kevin Thompson" },
  { src: "/images/On record.png", alt: "On Record with Mannie" },
];

const row1 = podcasts.slice(0, 4);
const row2 = podcasts.slice(4);

function Tile({ podcast }: { podcast: (typeof podcasts)[number] }) {
  return (
    <div className="relative w-[180px] sm:w-[260px] aspect-square rounded-2xl overflow-hidden shrink-0">
      <Image src={podcast.src} alt={podcast.alt} fill sizes="260px" className="object-cover" />
    </div>
  );
}

function MarqueeRow({ items, reverse }: { items: typeof podcasts; reverse?: boolean }) {
  return (
    <div className="overflow-hidden">
      <div
        className={`flex animate-scroll-x ${reverse ? "[animation-direction:reverse]" : ""}`}
        style={{ width: "max-content" }}
      >
        <div className="flex gap-6 mr-6">
          {items.map((podcast) => (
            <Tile key={podcast.src} podcast={podcast} />
          ))}
        </div>
        <div className="flex gap-6 mr-6">
          {items.map((podcast) => (
            <Tile key={`${podcast.src}-dup`} podcast={podcast} />
          ))}
        </div>
      </div>
    </div>
  );
}

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
      </div>

      <div className="w-screen space-y-6">
        <MarqueeRow items={row1} reverse />
        <MarqueeRow items={row2} />
      </div>
    </section>
  );
}
