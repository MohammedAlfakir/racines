"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
const transportOptions = [
  {
    id: "tram",
    title: "En tramway",
    icon: "tram",
    description:
      "Prenez la ligne TramWay T1 jusqu'au terminus Hôpital Moulay Abdellah.<br />De là, vous pouvez marcher 15 minutes ou prendre un grand taxi (5 min) jusqu'au cabinet.",
    color: "#58B195",
  },
  {
    id: "bus",
    title: "En bus",
    icon: "bus",
    description:
      "Les lignes 204, 201 et 9 desservent l'arrêt \"...\" Sala Al Jadida.<br />Descendez à l'arrêt le plus proche de la résidence Maâmora.",
    color: "#003c2a",
  },
  {
    id: "taxi",
    title: "En taxi",
    icon: "taxi",
    description:
      "Grands taxis disponibles depuis le terminus du tramway ou les quartiers voisins.<br />Petits taxis accessibles dans toute la ville de Salé.",
    color: "#58B195",
  },
  {
    id: "car",
    title: "En voiture",
    icon: "car",
    description: "Stationnement gratuit dans le quartier résidentiel.",
    color: "#003c2a",
  },
];

import { FaMapPin } from "react-icons/fa";
import { MdTram } from "react-icons/md";
import { FaBus } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaDirections } from "react-icons/fa";

// Icon components
const IconComponent = ({ name }) => {
  switch (name) {
    case "tram":
      return <MdTram size={28} />;
    case "bus":
      return <FaBus size={28} />;
    case "taxi":
      return <FaTaxi size={28} />;
    case "car":
      return <FaCar size={28} />;
    case "pin":
      return <FaMapPin size={24} />;
    case "direction":
      return <FaDirections size={24} />;
    default:
      return null;
  }
};

export default function DirectionsSection() {
  const [selectedOption, setSelectedOption] = useState("");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b overflow-hidden relative"
    >
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#003c2a] mb-4">
            Comment s'y rendre ?
          </h2>
          <div className="w-20 h-1 bg-[#58B195] mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Plusieurs options s'offrent à vous pour venir à notre cabinet.
            Choisissez celle qui vous convient le mieux.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Map and address column */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8">
              <div className="flex items-start gap-4 mb-5">
                <div className="text-[#58B195]">
                  <IconComponent name="pin" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#003c2a] mb-2">
                    Adresse
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    20c résidence Maâmora, immeuble 7, Sala Al Jadida 11100,
                    Salé, Maroc.
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map with animation wrapper */}
            <motion.div
              className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="text-gray-600 mr-3">💡</div>
              <div className="text-gray-700">
                <strong>Besoin d'un itinéraire précis?</strong> Utilisez Google
                Maps ou une application de navigation pour un trajet en temps
                réel.
              </div>
            </motion.div>
            <motion.div
              className="rounded-xl overflow-hidden shadow-md border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.2630732977173!2d-6.737722088648485!3d34.01145761977073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda740331c555555%3A0x73be5d84a2f9cecf!2sCabinet%20racines%20de%20physio-kin%C3%A9sith%C3%A9rapie!5e0!3m2!1sen!2sma!4v1742553738078!5m2!1sen!2sma"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>

          {/* Transportation options column */}
          <motion.div
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="grid grid-cols-1 gap-4">
              {transportOptions.map((option, index) => (
                <motion.div
                  key={option.id}
                  variants={itemVariants}
                  className={`bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300 ${
                    selectedOption === option.id ? "ring-2 ring-[#58B195]" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-[#58B195]">
                      <IconComponent name={option.icon} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#003c2a]">
                        {option.title}
                      </h3>
                      <div className="mt-2 text-gray-700">
                        <AnimatePresence mode="wait">
                          {(selectedOption === option.id ||
                            selectedOption === "") && (
                            <motion.div
                              key={`content-${option.id}`}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: option.description,
                                }}
                              ></p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        {selectedOption !== "" &&
                          selectedOption !== option.id && (
                            <motion.button
                              className="text-[#58B195] font-medium mt-2 flex items-center"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              whileHover={{ x: 5 }}
                            >
                              Voir les détails
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 ml-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </motion.button>
                          )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact CTA */}
            <motion.div
              className="mt-8 bg-[#003c2a] text-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-3">
                Une question sur l'itinéraire ?
              </h3>
              <p className="text-white/80 mb-4">
                Notre équipe est à votre disposition pour vous aider à trouver
                le meilleur itinéraire jusqu'à notre cabinet.
              </p>
              <motion.button
                className="px-6 py-2 bg-[#58B195] text-white rounded-full font-medium inline-flex items-center"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#489e84",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/contact">Nous contacter</Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
