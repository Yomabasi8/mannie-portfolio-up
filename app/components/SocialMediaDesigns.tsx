import Image from "next/image";

const designs = [
  { src: "/images/blnk.png", alt: "The Blank Page podcast cover" },
  { src: "/images/t1ur.png", alt: "The Unity Rock Podcast episode 10 cover" },
  { src: "/images/uns.png", alt: "The Unserious Podcast 500 plays thank you graphic" },
  { src: "/images/waq.png", alt: "Glory, co-host of The Blank Page" },
  { src: "/images/Dark Academia Social.jpeg", alt: "Dark Academia: The Podcast cover" },
  { src: "/images/Fortune.png", alt: "Fortune, co-host of The Blank Page" },
  { src: "/images/quote.png", alt: "The Unserious Podcast inspirational quote graphic" },
  { src: "/images/christmas.png", alt: "The Unserious Podcast Merry Christmas graphic" },
];

const row1 = designs.slice(0, 4);
const row2 = designs.slice(4);

function Tile({ design }: { design: (typeof designs)[number] }) {
  return (
    <div className="relative w-[180px] sm:w-[260px] aspect-square rounded-2xl overflow-hidden shrink-0">
      <Image src={design.src} alt={design.alt} fill sizes="260px" className="object-cover" />
    </div>
  );
}

function MarqueeRow({ items, reverse }: { items: typeof designs; reverse?: boolean }) {
  return (
    <div className="overflow-hidden">
      <div
        className={`flex animate-scroll-x-triple transform-gpu ${reverse ? "[animation-direction:reverse]" : ""}`}
        style={{ width: "max-content" }}
      >
        <div className="flex gap-6 mr-6">
          {items.map((design) => (
            <Tile key={design.src} design={design} />
          ))}
        </div>
        <div className="flex gap-6 mr-6">
          {items.map((design) => (
            <Tile key={`${design.src}-dup`} design={design} />
          ))}
        </div>
        <div className="flex gap-6 mr-6">
          {items.map((design) => (
            <Tile key={`${design.src}-dup2`} design={design} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SocialMediaDesigns() {
  return (
    <section className="bg-brand-bg pt-12 sm:pt-16 pb-20 sm:pb-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative inline-flex items-center justify-center w-full mb-14 sm:mb-16">
          <h2 className="font-bricolage text-3xl sm:text-4xl font-extrabold text-brand-black-dark tracking-tight">
            Social Media Designs
          </h2>
          <span className="absolute left-1/2 translate-x-10 sm:translate-x-12 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-button/20 -z-10" />
        </div>
      </div>

      <div className="w-screen space-y-6">
        <MarqueeRow items={row1} reverse />
        <MarqueeRow items={row2} />
      </div>
    </section>
  );
}
