"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function ContactCTA() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="py-36 relative overflow-hidden bg-[#003c2a]"
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
            fill="#58B195"
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
            fill="#58B195"
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

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <motion.span
                className="inline-block"
                initial={{ y: 40 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
              >
                Prêt à commencer votre
              </motion.span>{" "}
              <motion.span
                className="inline-block text-[#58B195]"
                initial={{ y: 40 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.2,
                }}
              >
                parcours de guérison?
              </motion.span>
            </h2>

            <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
              Notre équipe de spécialistes est prête à vous accompagner.
              Contactez-nous dès aujourd'hui pour prendre rendez-vous ou pour
              toute information.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div whileHover={{ y: -5 }} whileTap={{ y: 0 }}>
                <Link
                  href="/contact"
                  className="inline-block py-4 px-8 bg-[#58B195] text-white rounded-full font-medium hover:bg-[#4aa084] transition-colors"
                >
                  Prendre rendez-vous
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} whileTap={{ y: 0 }}>
                <a
                  href="tel:+212641380017"
                  className="inline-flex items-center py-4 px-8 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[#003c2a] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +212 641-380-017
                </a>
              </motion.div>
            </div>

            <div className="mt-10 text-gray-200 text-sm">
              <p>Horaires de travail • 8h30 - 16h30 (Ramadan)</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
