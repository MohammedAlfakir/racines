"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Faq from "@/Components/Faq";
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

export default function ContactSection() {
  const [selectedOption, setSelectedOption] = useState("");

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
  const [activeForm, setActiveForm] = useState("general"); // "general" or "recruitment"
  const [formData, setFormData] = useState({
    general: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    recruitment: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      cv: null,
      coverLetter: null,
      message: "",
    },
  });
  const [cvFileName, setCvFileName] = useState("");
  const [coverLetterFileName, setCoverLetterFileName] = useState("");

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleFormChange = formType => {
    setActiveForm(formType);
  };

  const handleInputChange = (e, formType) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [formType]: {
        ...formData[formType],
        [name]: value,
      },
    });
  };

  const handleFileChange = (e, fileType) => {
    const file = e.target.files[0];
    if (!file) return;

    setFormData({
      ...formData,
      recruitment: {
        ...formData.recruitment,
        [fileType]: file,
      },
    });

    if (fileType === "cv") {
      setCvFileName(file.name);
    } else if (fileType === "coverLetter") {
      setCoverLetterFileName(file.name);
    }
  };

  const handleSubmit = (e, formType) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log(`Submitting ${formType} form:`, formData[formType]);

    // Form submission logic would go here
    // For now, just show an alert
    alert(
      `Formulaire ${
        formType === "general" ? "général" : "de recrutement"
      } envoyé avec succès!`
    );

    // Reset form
    if (formType === "general") {
      setFormData({
        ...formData,
        general: {
          name: "",
          email: "",
          subject: "",
          message: "",
        },
      });
    } else {
      setFormData({
        ...formData,
        recruitment: {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          cv: null,
          coverLetter: null,
          message: "",
        },
      });
      setCvFileName("");
      setCoverLetterFileName("");
    }
  };

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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
                stroke="#003c2a"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#58B195] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#003c2a] rounded-full opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Form Type Selector */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
              onClick={() => handleFormChange("general")}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all ${
                activeForm === "general"
                  ? "bg-[#003c2a] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Formulaire général de contact
            </motion.button>

            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
              onClick={() => handleFormChange("recruitment")}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all ${
                activeForm === "recruitment"
                  ? "bg-[#003c2a] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Formulaire de recrutement
            </motion.button>
          </div>
        </motion.div>
        {/* Form Container */}
        <motion.div
          className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Form Info Sidebar */}
            <div className="bg-[#003c2a] text-white p-8 md:col-span-2">
              <h3 className="text-2xl font-bold mb-5 mt-20">
                Comment pouvons-nous vous aider?
              </h3>
              <p className="mb-10 text-gray-300">
                {activeForm === "general"
                  ? "Utilisez ce formulaire pour nous poser une question, demander des informations, ou prendre rendez-vous."
                  : "Vous souhaitez rejoindre notre équipe? Envoyez-nous votre candidature via ce formulaire."}
              </p>

              <div className="mt-10">
                <h4 className="font-medium mb-2 text-[#58B195]">
                  Horaires d'ouverture
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex justify-between">
                    <span>Lundi - Mardi:</span>
                    <span>Fermé</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Mercredi - Dimanche:</span>
                    <span>9h00 - 20h00</span>
                  </li>
                </ul>
              </div>

              <div className="mt-10">
                <h4 className="font-medium mb-2 text-[#58B195]">
                  Réseaux sociaux
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#003c2a] transition-colors"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#003c2a] transition-colors"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#003c2a] transition-colors"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-8 md:col-span-3">
              <AnimatePresence mode="wait">
                {activeForm === "general" ? (
                  <motion.form
                    key="generalForm"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={e => handleSubmit(e, "general")}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-[#003c2a] mb-6">
                      Formulaire général de contact
                    </h3>

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Nom complet <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.general.name}
                        onChange={e => handleInputChange(e, "general")}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#58B195] transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.general.email}
                        onChange={e => handleInputChange(e, "general")}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#58B195] transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Objet <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.general.subject}
                        onChange={e => handleInputChange(e, "general")}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#58B195] transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.general.message}
                        onChange={e => handleInputChange(e, "general")}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#58B195] transition-all"
                      ></textarea>
                    </div>

                    <div>
                      <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ y: 0 }}
                        type="submit"
                        className="w-full py-3 px-6 bg-[#003c2a] text-white rounded-lg font-medium transition-all hover:bg-[#004d36] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003c2a]"
                      >
                        Envoyer le message
                      </motion.button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.form
                    key="recruitmentForm"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={e => handleSubmit(e, "recruitment")}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-[#003c2a] mb-6">
                      Formulaire de recrutement
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Prénom <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.recruitment.firstName}
                          onChange={e => handleInputChange(e, "recruitment")}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#58B195] transition-all"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Nom <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.recruitment.lastName}
                          onChange={e => handleInputChange(e, "recruitment")}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#58B195] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="recruitEmail"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="recruitEmail"
                          name="email"
                          value={formData.recruitment.email}
                          onChange={e => handleInputChange(e, "recruitment")}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#58B195] transition-all"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Téléphone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.recruitment.phone}
                          onChange={e => handleInputChange(e, "recruitment")}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#58B195] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CV <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          id="cv"
                          name="cv"
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          onChange={e => handleFileChange(e, "cv")}
                          required
                        />
                        <label
                          htmlFor="cv"
                          className="flex items-center justify-between w-full px-4 py-3 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-50 transition-colors text-gray-700"
                        >
                          <span>
                            {cvFileName ||
                              "Choisir un fichier (PDF, DOC, DOCX)"}
                          </span>
                          <svg
                            className="h-5 w-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Lettre de motivation
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          id="coverLetter"
                          name="coverLetter"
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          onChange={e => handleFileChange(e, "coverLetter")}
                        />
                        <label
                          htmlFor="coverLetter"
                          className="flex items-center justify-between w-full px-4 py-3 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-50 transition-colors text-gray-700"
                        >
                          <span>
                            {coverLetterFileName ||
                              "Choisir un fichier (PDF, DOC, DOCX)"}
                          </span>
                          <svg
                            className="h-5 w-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="recruitMessage"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message personnalisé
                      </label>
                      <textarea
                        id="recruitMessage"
                        name="message"
                        rows="4"
                        value={formData.recruitment.message}
                        onChange={e => handleInputChange(e, "recruitment")}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#58B195] transition-all"
                        placeholder="Décrivez brièvement votre parcours et vos motivations..."
                      ></textarea>
                    </div>

                    <div>
                      <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ y: 0 }}
                        type="submit"
                        className="w-full py-3 px-6 bg-[#003c2a] text-white rounded-lg font-medium transition-all hover:bg-[#004d36] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003c2a]"
                      >
                        Envoyer ma candidature
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <Faq />

        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20 mb-20">
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-16 h-16 rounded-full bg-[#edf7f3] flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#003c2a]"
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
            </div>
            <h3 className="text-xl font-bold text-[#003c2a] mb-3">Téléphone</h3>
            <p className="text-gray-600 mb-4">
              Appelez-nous pour une réponse immédiate
            </p>
            <a
              href="tel:+212641380017"
              className="text-lg font-medium text-[#58B195] hover:text-[#003c2a] transition-colors"
            >
              +212 641-380-017
            </a>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-16 h-16 rounded-full bg-[#edf7f3] flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#003c2a]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#003c2a] mb-3">Email</h3>
            <p className="text-gray-600 mb-4">
              Envoyez-nous un message électronique
            </p>
            <a
              href="mailto:info@lecabinetracines.ma"
              className="text-lg font-medium text-[#58B195] hover:text-[#003c2a] transition-colors"
            >
              info@lecabinetracines.ma
            </a>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-16 h-16 rounded-full bg-[#edf7f3] flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#003c2a]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#003c2a] mb-3">Adresse</h3>
            <p className="text-gray-600 mb-4">
              Venez nous rencontrer en personne
            </p>
            <address className="text-lg font-medium text-[#58B195] not-italic">
              Résidence maamora rue oued sebbou immeuble 7 Sala Al Jadida 11100
            </address>
          </motion.div>
        </div>

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
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
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
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="text-gray-600 mr-3">💡</div>
                  <div className="text-gray-700">
                    <strong>Besoin d'un itinéraire précis?</strong> Utilisez
                    Google Maps ou une application de navigation pour un trajet
                    en temps réel.
                  </div>
                </motion.div>
                <motion.div
                  className="rounded-xl overflow-hidden shadow-md border border-gray-200"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
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
                        selectedOption === option.id
                          ? "ring-2 ring-[#58B195]"
                          : ""
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
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Map Section */}
    </section>
  );
}
