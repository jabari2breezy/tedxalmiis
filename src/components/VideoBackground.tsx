import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoUrl = "https://stream.mux.com/jPyJ2YM6Nlly7U6EyfxM01tz4D4uPE3gyJ4PYuvY62Wg.m3u8";

  useEffect(() => {
    if (videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoUrl);
        hls.attachMedia(videoRef.current);
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = videoUrl;
      }
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-void-black">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover opacity-20 grayscale brightness-50"
      />
      
      {/* Subtle Clock SVG Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none">
        <svg width="1200" height="1200" viewBox="0 0 100 100" className="animate-[spin_240s_linear_infinite]">
          <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.05" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.05" />
          <line x1="50" y1="50" x2="50" y2="10" stroke="white" strokeWidth="0.2" />
          <line x1="50" y1="50" x2="80" y2="50" stroke="white" strokeWidth="0.2" />
          <text x="48.5" y="8" fill="white" fontSize="2" className="font-mono">12</text>
          <text x="92" y="51.5" fill="white" fontSize="2" className="font-mono">03</text>
          <text x="48.5" y="94" fill="white" fontSize="2" className="font-mono">06</text>
          <text x="5" y="51.5" fill="white" fontSize="2" className="font-mono">09</text>
        </svg>
      </div>

      <div className="absolute inset-0 bg-radial-gradient from-transparent to-void-black" />
    </div>
  );
}
