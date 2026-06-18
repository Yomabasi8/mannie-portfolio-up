"use client";

import { useRef, useState } from "react";

const bars = [
  { height: "35%", color: "bg-brand-button" },
  { height: "55%", color: "bg-brand-button" },
  { height: "80%", color: "bg-[#7C3AED]" },
  { height: "100%", color: "bg-[#7C3AED]" },
  { height: "70%", color: "bg-brand-button" },
  { height: "85%", color: "bg-[#7C3AED]" },
  { height: "45%", color: "bg-brand-button" },
  { height: "30%", color: "bg-brand-button" },
];

const tracks = [
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

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 ml-0.5">
      <polygon points="6,4 20,12 6,20" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
    </svg>
  );
}

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
            href="#"
            className="font-jetbrains text-sm font-bold text-brand-black-dark underline underline-offset-4 mt-2 transition-colors hover:text-brand-secondary"
          >
            View all
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          {tracks.map((track, index) => {
            const isPlaying = playingIndex === index;
            return (
              <div
                key={track.title}
                className="w-full sm:w-[calc((100%-3*1.5rem)/4)] bg-white rounded-2xl shadow-[6px_6px_0px_0px_#060606] p-6 flex flex-col items-center text-center"
              >
                <h3 className="font-jetbrains text-sm font-bold text-brand-black-dark mb-4 leading-snug">
                  {track.title}
                </h3>
                <div className="w-full h-20 bg-[#EDEAFB] rounded-xl flex items-end justify-center gap-1.5 px-4 py-3 mb-6">
                  {bars.map((bar, i) => (
                    <span
                      key={i}
                      className={`w-1.5 rounded-full origin-bottom ${bar.color} ${isPlaying ? "animate-wave-bar" : ""}`}
                      style={{ height: bar.height, animationDelay: `${i * 90}ms` }}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => togglePlay(index)}
                  aria-label={`${isPlaying ? "Pause" : "Play"} ${track.title}`}
                  className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br ${track.gradient}`}
                >
                  {isPlaying ? <PauseIcon /> : <PlayIcon />}
                </button>
                <audio
                  ref={(el) => {
                    audioRefs.current[index] = el;
                  }}
                  src={track.src}
                  onEnded={() => setPlayingIndex(null)}
                  preload="none"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
