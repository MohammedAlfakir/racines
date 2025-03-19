"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoPlayer() {
  const [isCinemaMode, setCinemaMode] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      console.log("Video element loaded:", videoRef.current);
    }
  }, []);

  const handlePlay = () => {
    console.log("Playing Video...");
    setCinemaMode(true);
  };

  const handlePause = () => {
    console.log("Pausing Video...");
    setCinemaMode(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setCinemaMode(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="relative min-h-screen flex items-center justify-center transition-colors duration-500"
      animate={{ backgroundColor: isCinemaMode ? "#" : "#fff" }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence>
        {isCinemaMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full bg-black z-10"
          />
        )}
      </AnimatePresence>
      <div className="relative z-20 max-w-6xl w-full p-4">
        <video
          ref={videoRef}
          className="w-full rounded-lg shadow-lg cursor-pointer"
          controls
          onPlay={handlePlay}
          onPause={handlePause}
          controlsList="nodownload"
        >
          <source src="/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </motion.div>
  );
}
