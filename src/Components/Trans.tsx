"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Trans() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
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
                renforcer votre mobilité. Mais chaque patient est unique, et la
                prise en charge ne s&apos;arrête pas au traitement. Découvrez
                comment nous vous accompagnons à chaque étape, de la première
                consultation jusqu&apos;à votre retour à une pleine autonomie.
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
                href="/parcourspatients"
                className="inline-block py-5 px-10 bg-transparent border-2 border-white text-white text-xl rounded-full font-bold hover:bg-white hover:text-[#58B195] shadow-lg hover:shadow-xl transition-all duration-300 transform md:min-w-[400px]"
              >
                Découvrez votre parcours de soin
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
  );
}
