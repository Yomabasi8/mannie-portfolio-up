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

const episodeGroups = [
  {
    label: "Storytelling Episode Samples",
    tracks: makeTracks([
      "The Game Nobody Owned_mixdown",
      "Heartbeats of Kigali S1E2_mixdown",
      "Heartbeats of Kigali S1E1_mixdown",
      "Who Owns a Virtual Person_mixdown",
    ]),
  },
  {
    label: "Interview-style Episode Samples",
    tracks: makeTracks([
      "TURP E6 - Jill Young_mixdown",
      "MDR 391 - Jamie Dykstra_mixdown",
    ]),
  },
  {
    label: "Faith-based Conversation-style Sample",
    tracks: makeTracks([
      "ATGP S7E4_mixdown",
    ]),
  },
  {
    label: "Sound Quality Enhanced Sample",
    tracks: makeTracks([
      "a2o Armika Podcast_mixdown",
    ]),
  },
];

const introTracks = makeTracks([
  "TMIB Podcast Outro_mixdown",
  "CJBL Pod Intro_mixdown",
  "TMIB Podcast Intro_mixdown",
  { title: "Excitebrites Podcast Outro_mixdown", file: "Excitebrites Podcast Outro_mixdown.wav" },
  { title: "Black Family Therapy EP2 Trailer_mixdown", file: "Black Family Therapy EP2 Trailer_mixdown.mp3" },
  "TMIB Podcast Trailer_mixdown",
  { title: "MidLifeCrisis TrailerE3_mixdown", file: "MidLifeCrisis TrailerE3_mixdown.wav" },
  "Saage Sayers Intro_mixdown",
]);

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

  let globalIndex = 0;

  return (
    <section className="bg-[#E8F1FD] py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Episodes section */}
        <div className="mb-8 sm:mb-10">
          <h2 className="font-bricolage text-3xl sm:text-4xl font-extrabold text-brand-black-dark tracking-tight">
            Audio Samples
          </h2>
          <p className="font-poppins text-base text-brand-black-light/70 mt-1">Episodes</p>
        </div>

        {episodeGroups.map((group) => {
          const startIndex = globalIndex;
          globalIndex += group.tracks.length;
          return (
            <div key={group.label} className="mb-12 sm:mb-16">
              <h3 className="font-bricolage text-lg sm:text-xl font-bold text-brand-black-dark mb-5 pb-2 border-b-2 border-brand-black-dark/10">
                {group.label}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10 sm:gap-y-12">
                {group.tracks.map((track, i) => {
                  const key = `ep-${startIndex + i}`;
                  return (
                    <TrackCard
                      key={key}
                      track={track}
                      isPlaying={playingKey === key}
                      onToggle={() => togglePlay(key)}
                      audioRef={(el) => { audioRefs.current[key] = el; }}
                      onEnded={() => setPlayingKey(null)}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Intros, Outros & Trailers section */}
        <div className="mt-16 sm:mt-20">
          <h3 className="font-bricolage text-xl sm:text-2xl font-bold text-brand-black-dark mb-6 sm:mb-8">
            Intros, Outros &amp; Trailers
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10 sm:gap-y-12">
            {introTracks.map((track, i) => {
              const key = `intro-${i}`;
              return (
                <TrackCard
                  key={key}
                  track={track}
                  isPlaying={playingKey === key}
                  onToggle={() => togglePlay(key)}
                  audioRef={(el) => { audioRefs.current[key] = el; }}
                  onEnded={() => setPlayingKey(null)}
                />
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
