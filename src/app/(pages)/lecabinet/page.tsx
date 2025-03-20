"use client";

import Navbar from "@/Components/Navbar";
import Tracing from "@/Components/tracing-beam";
// import Typewriter from "@/Components/Typewriter";
import Footer from "@/Components/Footer";
import { useScroll, useTransform, useSpring } from "framer-motion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

function Page() {
  const headerRef = useRef(null);

  // Parallax effect for header
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  return (
    <>
      <Navbar />
      {/* Hero Header */}
      <motion.header
        ref={headerRef}
        style={{ y: headerY, opacity: headerOpacity }}
        className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#003c2a] text-white"
      >
        <div className="absolute inset-0 z-0">
          {/* Animated background effect with flowing waves */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="relative w-full h-full bg-[#003c2a]">
              {/* Wave animations */}
              <svg
                className="absolute w-full h-full opacity-20"
                viewBox="0 0 1000 1000"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M0,800 C150,700 350,650 500,750 C650,850 850,800 1000,750 L1000,1000 L0,1000 Z"
                  fill="#58B195"
                  initial={{ y: 50, opacity: 0.5 }}
                  animate={{
                    y: [50, 30, 50],
                    opacity: [0.5, 0.7, 0.5],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 8,
                    ease: "easeInOut",
                  }}
                />
                <motion.path
                  d="M0,850 C200,800 350,900 500,800 C650,700 800,750 1000,800 L1000,1000 L0,1000 Z"
                  fill="#48A085"
                  initial={{ y: 0 }}
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                />
                <motion.path
                  d="M0,900 C250,850 350,950 500,900 C650,850 750,950 1000,900 L1000,1000 L0,1000 Z"
                  fill="#388A76"
                  initial={{ y: 0 }}
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 7,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
              </svg>

              {/* Floating particles effect */}
              <div className="absolute inset-0">
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-[#58B195]"
                    style={{
                      width: Math.random() * 8 + 4,
                      height: Math.random() * 8 + 4,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.5 + 0.1,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      x: [0, Math.random() * 20 - 10, 0],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: Math.random() * 10 + 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 5,
                    }}
                  />
                ))}
              </div>

              {/* Grid overlay for texture */}
              <div className="absolute inset-0 opacity-30">
                <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="grid"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="#58B195"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <motion.span
              className="inline-block"
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.1,
              }}
            >
              Le Cabinet
            </motion.span>{" "}
            <motion.span
              className="inline-block text-[#58B195]"
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.3,
              }}
            >
              Racines
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explorez nos articles sur la santé, la physiothérapie et le
            bien-être
          </motion.p>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 w-full h-16"
          style={{
            background: "linear-gradient(to top, white, transparent)",
            opacity: useTransform(smoothScroll, [0, 0.1], [1, 0]),
          }}
        />
      </motion.header>{" "}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 mt-36"
      >
        <h2 className="text-5xl font-bold text-[#003c2a] mb-6">
          Un Espace Dédié à Votre Récupération
          <span className="block text-[#58B195] drop-shadow-sm mt-2">
            et Votre Mobilité
          </span>
        </h2>
        <div className="w-20 h-1 bg-[#58B195] mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Plus qu&quot;un simple cabinet, Racines est un lieu où chaque prise en
          charge repose sur l&quot;expertise, l&quot;écoute et une approche
          personnalisée. Ici, chaque patient est au cœur de notre engagement :
          restaurer le mouvement, soulager les douleurs et accompagner vers une
          récupération durable.
        </p>
      </motion.div>
      {/* <Typewriter /> */}
      <Tracing />
      <section
        ref={sectionRef}
        className="py-32 relative overflow-hidden bg-[#58B195]"
      >
        {/* Background wave effect */}
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute w-full h-full"
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,120 C150,180 350,100 500,140 C650,180 850,120 1000,140 L1000,200 L0,200 Z"
              fill="#003c2a"
              opacity="0.1"
              initial={{ y: 50 }}
              animate={{
                y: [50, 30, 50],
              }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: "easeInOut",
              }}
            />
            <motion.path
              d="M0,150 C200,180 350,120 500,150 C650,180 800,150 1000,130 L1000,200 L0,200 Z"
              fill="#003c2a"
              opacity="0.15"
              initial={{ y: 0 }}
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "easeInOut",
                delay: 0.2,
              }}
            />
          </svg>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 6 + 2,
                height: Math.random() * 6 + 2,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.1,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col items-center justify-center text-center text-white relative z-10 mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-10 leading-tight"
                initial={{ y: 40, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
              >
                De la Thérapie à la
                <span className="block text-[#003c2a] drop-shadow-sm mt-2">
                  Récupération
                </span>
              </motion.h2>

              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.2,
                }}
              >
                <p className="text-lg md:text-xl text-white leading-relaxed mb-12 max-w-3xl mx-auto">
                  Nos traitements sont conçus pour soulager, rééduquer et
                  renforcer votre mobilité. Mais chaque patient est unique, et
                  la prise en charge ne s&apos;arrête pas au traitement.
                  Découvrez comment nous vous accompagnons à chaque étape, de la
                  première consultation jusqu&apos;à votre retour à une pleine
                  autonomie.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.4,
                }}
                whileHover={{ y: -5 }}
                whileTap={{ y: 0 }}
                className="relative"
              >
                <Link
                  href="/blog"
                  className="inline-block py-5 px-10 bg-transparent border-2 border-white text-white text-xl rounded-full font-bold hover:bg-white hover:text-[#58B195] shadow-lg hover:shadow-xl transition-all duration-300 transform md:min-w-[400px]"
                >
                  Découvrez votre parcours de soin
                  <span className="absolute right-10 top-1/2 transform -translate-y-1/2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </motion.div>

              {/* Small decorative elements */}
              <motion.div
                className="mt-12 flex justify-center space-x-3"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8, duration: 1 }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white opacity-70"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-white opacity-70"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-white opacity-70"></span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Page;
