"use client";

import { useRef, useState } from "react";
import { TrackCard, type Track } from "./AudioTrackCard";

const blueGradient = "from-[#2546D6] to-[#0A2A6B]";
const purpleGradient = "from-[#A21CD6] to-[#5B0E9E]";

type TrackInput = string | { title: string; file: string };

function makeTracks(inputs: TrackInput[]): Track[] {
  return inputs.map((input, i) => {
    const title = typeof input === "string" ? input : input.title;
    const file = typeof input === "string" ? `${input}.mp3` : input.file;
    return {
      title,
      gradient: i % 2 === 0 ? blueGradient : purpleGradient,
      src: `/audio/${file}`,
    };
  });
}

const categories = [
  {
    title: "Episodes",
    tracks: makeTracks([
      "The Game Nobody Owned_mixdown",
      "TURP E4 - Benj Miller_mixdown",
      "MDR 391 - Jamie Dykstra_mixdown",
      "Heartbeats of Kigali S1E2_mixdown",
      "Heartbeats of Kigali S1E1_mixdown",
      "ATGP S7E4_mixdown",
      "ATGP S6E4_mixdown",
      "a2o Armika Podcast_mixdown",
    ]),
  },
  {
    title: "Intros, Outros & Trailers",
    tracks: makeTracks([
      "TMIB Podcast Outro_mixdown",
      "TMIB Podcast Intro_mixdown",
      "TMIB Podcast Intro_mixdown",
      "Black Family Therapy Podcast EP3",
      { title: "Black Family Therapy EP2 Trailer_mixdown", file: "Black Family Therapy EP2 Trailer_mixdown.mp3" },
      "TMIB Podcast Trailer_mixdown",
      { title: "MidLifeCrisis TrailerE3_mixdown", file: "MidLifeCrisis TrailerE3_mixdown.wav" },
      { title: "a2o Armika Podcast_mixdown", file: "a2o Armika Podcast_mixdown (1).mp3" },
    ]),
  },
];

export default function AudioSamples() {
  const [playingKey, setPlayingKey] = useState<string | null>(null);
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});

  const togglePlay = (key: string) => {
    const audio = audioRefs.current[key];
    if (!audio) return;

    if (playingKey === key) {
      audio.pause();
      setPlayingKey(null);
      return;
    }

    if (playingKey !== null) {
      audioRefs.current[playingKey]?.pause();
    }
    audio.play();
    setPlayingKey(key);
  };

  return (
    <section className="bg-[#E8F1FD] py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10">
          <h2 className="font-bricolage text-3xl sm:text-4xl font-extrabold text-brand-black-dark tracking-tight">
            Audio Samples
          </h2>
          <p className="font-poppins text-base text-brand-black-light/70 mt-1">{categories[0].title}</p>
        </div>

        {categories.map((category, categoryIndex) => (
          <div key={category.title} className={categoryIndex > 0 ? "mt-16 sm:mt-20" : ""}>
            {categoryIndex > 0 && (
              <h3 className="font-bricolage text-xl sm:text-2xl font-bold text-brand-black-dark mb-6 sm:mb-8">
                {category.title}
              </h3>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10 sm:gap-y-12">
              {category.tracks.map((track, trackIndex) => {
                const key = `${categoryIndex}-${trackIndex}`;
                return (
                  <TrackCard
                    key={key}
                    track={track}
                    isPlaying={playingKey === key}
                    onToggle={() => togglePlay(key)}
                    audioRef={(el) => {
                      audioRefs.current[key] = el;
                    }}
                    onEnded={() => setPlayingKey(null)}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
