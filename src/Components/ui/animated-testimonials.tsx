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
    <div className="flex justify-center relative z-10 mb-10 sm:mb-20 px-4">
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
          target="_blank"
          href="https://www.google.com/search?q=cabinet+racines&sca_esv=63c9e37f8da915f5&sxsrf=AHTn8zriBCOoO_hkdjOz_qYrVVDkRNt_eg%3A1742552933962&source=hp&ei=ZT_dZ7u5N6KOkdUPitG12AY&iflsig=ACkRmUkAAAAAZ91NdQ0z6s-E1kvYj9twbHG2dv2TxglD&oq=cabin&gs_lp=Egdnd3Mtd2l6IgVjYWJpbioCCAAyBBAjGCcyChAjGIAEGCcYigUyBBAjGCcyDRAAGIAEGEMYyQMYigUyCxAAGIAEGJIDGIoFMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARI2iBQAFiJHHABeACQAQCYAcIBoAG_C6oBBDAuMTC4AQPIAQD4AQGYAgugAoYMwgIQEC4YgAQYxwEYJxiKBRivAcICCxAAGIAEGJECGIoFwgILEC4YgAQY0QMYxwHCAgUQLhiABMICChAAGIAEGEMYigXCAgoQLhiABBhDGIoFwgILEC4YgAQYxwEYrwHCAggQABiABBjJA8ICCBAAGIAEGJIDmAMAkgcEMS4xMKAHo4EBsgcEMC4xMLgHgAw&sclient=gws-wiz&lqi=Cg9jYWJpbmV0IHJhY2luZXNIrPHF3-KrgIAIWh0QABABGAAYASIPY2FiaW5ldCByYWNpbmVzMgJmcpIBD3BoeXNpb3RoZXJhcGlzdKoBOBABMh8QASIbIqre7swVDKGXNXyCTziJtwxQV6fvyj0MJ4g4MhMQAiIPY2FiaW5ldCByYWNpbmVz#lrd=0xda740331c555555:0x73be5d84a2f9cecf,3,,,,&rlimm=8340206384188083919"
          className="inline-flex items-center justify-center px-6 sm:px-8 md:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-bold text-[#003c2a] bg-white rounded-full relative overflow-hidden"
          whileHover={{
            scale: 1.08,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
          }}
          whileTap={{ scale: 0.95 }}
        >
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
            Je donne mon avis
          </motion.span>
        </motion.a>
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
      <div className="bg-[#003c2a] py-2 mb-10 sm:mb-20 mt-[-80px] sm:mt-[-100px] md:mt-[-150px]">
        <div className="">
          <section>
            <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 w-full sm:w-5/6 md:w-2/3 mx-auto text-center gap-3 sm:gap-5 mt-16 sm:mt-24 md:mt-32">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#fff]">
                Ils Ont Retrouvé Leurs Capacités, Pourquoi Pas Vous ?
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#f8f8f8] w-full sm:w-5/6 md:w-2/3">
                Laissez-vous inspirer par nos patients et franchissez le premier
                pas vers une récupération optimale.
              </p>
            </div>
          </section>
        </div>
        <div className="max-w-sm md:max-w-3xl lg:max-w-5xl mx-auto antialiased font-sans px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-16 md:py-20">
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
            <div>
              <div className="relative h-64 sm:h-72 md:h-80 w-full">
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
                        className="h-full w-full rounded-2xl md:rounded-3xl object-cover object-top"
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
            <div className="flex justify-between flex-col py-2 sm:py-4">
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
                <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-white">
                  {testimonials[active].name}
                </h3>

                <motion.p className="text-base sm:text-lg text-gray-100 mt-3 sm:mt-5 dark:text-neutral-300">
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
              <div className="flex gap-4 pt-6 sm:pt-8 md:pt-12">
                <button
                  onClick={handlePrev}
                  className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
                >
                  <IconArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
                </button>
                <button
                  onClick={handleNext}
                  className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
                >
                  <IconArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
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
