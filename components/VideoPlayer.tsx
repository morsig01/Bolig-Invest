'use client';

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster, className }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMuteToggle = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true; // Ensure the video starts muted
      videoRef.current.play().catch((err) => {
        console.error("Autoplay failed:", err);
      });
    }
  }, []);

  return (
    <div className={`flex items-center justify-center w-screen py-40 bg-black ${className}`}>
      <div className="relative">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className="w-full max-w-9xl h-auto rounded shadow-lg border-2 border-white"
          autoPlay
          muted
          controls={false}
        />

        <button
          onClick={handlePlayPause}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 p-3 rounded-full hover:bg-opacity-75"
        >
          {isPlaying ? (
            <Image
              src="/pause.svg"
              width={24}
              height={24}
              alt="Pause"
            />
          ) : (
            <Image
              src="/play.svg"
              width={24}
              height={24}
              alt="Play"
            />
          )}
        </button>

        <button
          onClick={handleMuteToggle}
          className="absolute bottom-4 left-4 bg-gray-800 bg-opacity-50 p-3 rounded-full hover:bg-opacity-75"
        >
          {isMuted ? (
            <Image
              src="/mute.svg"
              width={24}
              height={24}
              alt="Mute"
            />
          ) : (
            <Image
              src="/unmute.svg"
              width={24}
              height={24}
              alt="Unmute"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
