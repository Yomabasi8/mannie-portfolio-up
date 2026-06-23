"use client";

import { useRef, useState } from "react";
import { TrackCard, type Track } from "./AudioTrackCard";

const tracks: Track[] = [
  {
    title: "The Game Nobody Owned_mixdown",
    gradient: "from-[#2546D6] to-[#0A2A6B]",
    src: "/audio/The Game Nobody Owned_mixdown.mp3",
  },
  {
    title: "TURP E4 - Benj Miller_mixdown",
    gradient: "from-[#A21CD6] to-[#5B0E9E]",
    src: "/audio/TURP E4 - Benj Miller_mixdown.mp3",
  },
  {
    title: "MDR 391 - Jamie Dykstra_mixdown",
    gradient: "from-[#2546D6] to-[#0A2A6B]",
    src: "/audio/MDR 391 - Jamie Dykstra_mixdown.mp3",
  },
  {
    title: "Heartbeats of Kigali S1E2_mixdown",
    gradient: "from-[#A21CD6] to-[#5B0E9E]",
    src: "/audio/Heartbeats of Kigali S1E2_mixdown.mp3",
  },
];

export default function Work() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);

  const togglePlay = (index: number) => {
    const audio = audioRefs.current[index];
    if (!audio) return;

    if (playingIndex === index) {
      audio.pause();
      setPlayingIndex(null);
      return;
    }

    if (playingIndex !== null) {
      audioRefs.current[playingIndex]?.pause();
    }
    audio.play();
    setPlayingIndex(index);
  };

  return (
    <section id="work" className="bg-[#E8F1FD] py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between mb-10 sm:mb-12">
          <div>
            <p className="font-jetbrains text-sm tracking-widest text-brand-black-light/70 uppercase mb-2">
              Our Work
            </p>
            <h2 className="font-bricolage text-3xl sm:text-4xl font-extrabold text-brand-black-dark tracking-tight">
              Audio Samples
            </h2>
          </div>
          <a
            href="/work"
            className="font-jetbrains text-sm font-bold text-brand-black-dark underline underline-offset-4 mt-2 transition-colors hover:text-brand-secondary"
          >
            View all
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          {tracks.map((track, index) => (
            <div key={track.title} className="sm:w-[calc((100%-3*1.5rem)/4)]">
              <TrackCard
                track={track}
                isPlaying={playingIndex === index}
                onToggle={() => togglePlay(index)}
                audioRef={(el) => {
                  audioRefs.current[index] = el;
                }}
                onEnded={() => setPlayingIndex(null)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
