"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

type Testimonial = {
  quote: string;
  name: string;
  src: string;
};

// CTA Button Component to be used within the testimonials section
const TestimonialCTA = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center relative z-10 mb-20">
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
          delay: 0.3,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.a
          href="https://www.google.com/search?q=cabinet+racines&sca_esv=63c9e37f8da915f5&sxsrf=AHTn8zriBCOoO_hkdjOz_qYrVVDkRNt_eg%3A1742552933962&source=hp&ei=ZT_dZ7u5N6KOkdUPitG12AY&iflsig=ACkRmUkAAAAAZ91NdQ0z6s-E1kvYj9twbHG2dv2TxglD&oq=cabin&gs_lp=Egdnd3Mtd2l6IgVjYWJpbioCCAAyBBAjGCcyChAjGIAEGCcYigUyBBAjGCcyDRAAGIAEGEMYyQMYigUyCxAAGIAEGJIDGIoFMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARI2iBQAFiJHHABeACQAQCYAcIBoAG_C6oBBDAuMTC4AQPIAQD4AQGYAgugAoYMwgIQEC4YgAQYxwEYJxiKBRivAcICCxAAGIAEGJECGIoFwgILEC4YgAQY0QMYxwHCAgUQLhiABMICChAAGIAEGEMYigXCAgoQLhiABBhDGIoFwgILEC4YgAQYxwEYrwHCAggQABiABBjJA8ICCBAAGIAEGJIDmAMAkgcEMS4xMKAHo4EBsgcEMC4xMLgHgAw&sclient=gws-wiz&lqi=Cg9jYWJpbmV0IHJhY2luZXNIrPHF3-KrgIAIWh0QABABGAAYASIPY2FiaW5ldCByYWNpbmVzMgJmcpIBD3BoeXNpb3RoZXJhcGlzdKoBOBABMh8QASIbIqre7swVDKGXNXyCTziJtwxQV6fvyj0MJ4g4MhMQAiIPY2FiaW5ldCByYWNpbmVz#lrd=0xda740331c555555:0x73be5d84a2f9cecf,3,,,,&rlimm=8340206384188083919"
          className="inline-flex items-center justify-center px-12 py-4 text-lg font-bold text-[#003c2a] bg-white rounded-full relative overflow-hidden"
          whileHover={{
            scale: 1.08,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Animated background gradient */}

          {/* Text and icon with animation */}
          <motion.span
            className="relative z-10 mr-1 text-[#003c2a]"
            animate={{
              scale: isHovered ? [1, 1.05, 1] : 1,
              transition: {
                duration: 0.4,
                repeat: isHovered ? Infinity : 0,
                repeatType: "reverse",
              },
            }}
          >
            Voir les témoignages.
          </motion.span>
        </motion.a>

        {/* Pulsing circles effect */}
      </motion.div>
    </div>
  );
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  // Memoize handleNext to avoid redefinition on every render
  const handleNext = useCallback(() => {
    setActive(prev => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActive(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 3000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <>
      <div className="bg-[#003c2a] py-2 mb-20 mt-[-150px]">
        <div className="">
          <section>
            <div className="flex flex-col items-center justify-center px-10 w-2/3 mx-auto text-center gap-5 mt-32">
              <h2 className="text-5xl font-extrabold text-[#fff]">
                Ils Ont Retrouvé Leurs Capacités, Pourquoi Pas Vous ?
              </h2>
              <p className="text-xl text-[#f8f8f8] w-2/3">
                Laissez-vous inspirer par nos patients et franchissez le premier
                pas vers une récupération optimale.
              </p>
            </div>
          </section>
        </div>
        <div className="max-w-sm md:max-w-5xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20">
          <div className="relative grid grid-cols-1 md:grid-cols-2  gap-20">
            <div>
              <div className="relative h-80 w-full">
                <AnimatePresence>
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.src}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: randomRotateY(),
                      }}
                      animate={{
                        opacity: isActive(index) ? 1 : 0.7,
                        scale: isActive(index) ? 1 : 0.95,
                        z: isActive(index) ? 0 : -100,
                        rotate: isActive(index) ? 0 : randomRotateY(),
                        zIndex: isActive(index)
                          ? 999
                          : testimonials.length + 2 - index,
                        y: isActive(index) ? [0, -80, 0] : 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 100,
                        rotate: randomRotateY(),
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 origin-bottom"
                    >
                      <Image
                        src={testimonial.src}
                        alt={testimonial.name}
                        width={500}
                        height={500}
                        draggable={false}
                        className="h-full w-full rounded-3xl object-cover object-top"
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
            <div className="flex justify-between flex-col py-4">
              <motion.div
                key={active}
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -20,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
              >
                <h3 className="text-2xl font-bold dark:text-white text-white">
                  {testimonials[active].name}
                </h3>

                <motion.p className="text-lg text-gray-100 mt-5 dark:text-neutral-300">
                  {testimonials[active].quote.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{
                        filter: "blur(10px)",
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>
              <div className="flex gap-4 pt-12 md:pt-0">
                <button
                  onClick={handlePrev}
                  className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
                >
                  <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
                </button>
                <button
                  onClick={handleNext}
                  className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
                >
                  <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Add the CTA button inside the testimonials section */}
        <TestimonialCTA />
      </div>
    </>
  );
};
