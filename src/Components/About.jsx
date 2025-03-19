"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function PhilosophySection() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-[#003c2a] text-white overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {/* Flowing line decoration */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,50 C150,20 350,80 500,50 C650,20 850,80 1000,50"
            stroke="#58B195"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M0,150 C200,120 300,180 500,150 C700,120 800,180 1000,150"
            stroke="#58B195"
            strokeWidth="1"
            fill="none"
          />
        </svg>

        {/* Corner decoration - top right */}
        <div className="absolute top-0 right-0 w-64 h-64">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 0 L100 100 L0 0 Z" fill="#58B195" opacity="0.2" />
          </svg>
        </div>

        {/* Corner decoration - bottom left */}
        <div className="absolute bottom-0 left-0 w-64 h-64 transform rotate-180">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 0 L100 100 L0 0 Z" fill="#58B195" opacity="0.2" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Main content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-[#58B195]">Histoire</span> et{" "}
              <span className="text-[#58B195]">Philosophie</span>
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              Nous sommes nés d'une volonté d'offrir des soins personnalisés,
              alliant expertise et bienveillance. Chaque patient bénéficie d'un
              suivi adapté, axé sur une récupération complète et durable. Notre
              approche globale place vos besoins au cœur de nos actions, pour
              améliorer votre qualité de vie avec professionnalisme et humanité.
            </p>

            {/* Leaf decoration */}
            <div className="hidden lg:block w-32 h-32 absolute -bottom-16 left-0 opacity-20 pointer-events-none">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10,90 C30,70 20,40 10,30 C20,40 50,30 70,10"
                  stroke="#58B195"
                  strokeWidth="0.8"
                  fill="none"
                />
                <path
                  d="M15,90 C35,70 25,40 15,30 C25,40 55,30 75,10"
                  stroke="#58B195"
                  strokeWidth="0.6"
                  fill="none"
                />
                <path
                  d="M20,90 C40,70 30,40 20,30 C30,40 60,30 80,10"
                  stroke="#58B195"
                  strokeWidth="0.4"
                  fill="none"
                />
              </svg>
            </div>
          </motion.div>

          {/* Right column - Missions & Values */}
          <div>
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="inline-block w-8 h-8 mr-3 rounded-full bg-[#58B195] flex items-center justify-center text-[#003c2a] font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </span>
                Missions
              </h3>

              <ul className="space-y-4">
                <MissionItem title="Rééducation">
                  Améliorer la santé physique avec des soins innovants.
                </MissionItem>

                <MissionItem title="Innovation">
                  Techniques modernes basées sur la science.
                </MissionItem>

                <MissionItem title="Accompagnement">
                  Suivi personnalisé tout au long du parcours de soin.
                </MissionItem>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="inline-block w-8 h-8 mr-3 rounded-full bg-[#58B195] flex items-center justify-center text-[#003c2a] font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Valeurs
              </h3>

              <ul className="space-y-4">
                <ValueItem title="Transparence">
                  Infos claires sur les soins et tarifs.
                </ValueItem>

                <ValueItem title="Qualité">
                  Équipements modernes et techniques avancées.
                </ValueItem>

                <ValueItem title="Ponctualité">
                  Respect des horaires, gestion optimisée.
                </ValueItem>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Mission item component
function MissionItem({ title, children }) {
  return (
    <li className="flex items-start">
      <div className="mt-1 mr-4 flex-shrink-0">
        <span className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-[#58B195]">
          <span className="w-2 h-2 rounded-full bg-[#58B195]"></span>
        </span>
      </div>
      <div>
        <h4 className="font-bold text-[#58B195]">{title}</h4>
        <p className="text-gray-100">{children}</p>
      </div>
    </li>
  );
}

// Value item component
function ValueItem({ title, children }) {
  return (
    <li className="flex items-start">
      <div className="mt-1 mr-4 flex-shrink-0">
        <span className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-[#58B195]">
          <span className="w-2 h-2 rounded-full bg-[#58B195]"></span>
        </span>
      </div>
      <div>
        <h4 className="font-bold text-[#58B195]">{title}</h4>
        <p className="text-gray-100">{children}</p>
      </div>
    </li>
  );
}
