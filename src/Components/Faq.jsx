"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// FAQ data
const faqData = [
  {
    id: 1,
    question:
      "Ai-je besoin d'une ordonnance pour consulter un kinésithérapeute ?",
    answer:
      "Oui, l'ordonnance médicale est obligatoire incluant votre diagnostic défini par le médecin traitant.",
  },
  {
    id: 2,
    question: 'Est-ce que la première séance "Bilan" est nécessaire ?',
    answer:
      "Oui, c'est la séance clef qui permet de définir exactement les besoins et établir un plan de traitement adapté.",
  },
  {
    id: 3,
    question: "Combien de séances sont nécessaires ?",
    answer:
      "Le nombre de séances dépend de votre état et de l'évolution de votre condition.",
  },
  {
    id: 4,
    question: "Une séance de kinésithérapie dure combien de temps ?",
    answer: "En général, une séance dure entre 45 minutes et 1 heure.",
  },
  {
    id: 5,
    question: "Quels types de pathologies traitez-vous ?",
    answer:
      "Nous prenons en charge les troubles musculosquelettiques, neurologiques, respiratoires et bien d'autres.",
  },
  {
    id: 6,
    question: "Est-ce que les séances sont douloureuses ?",
    answer:
      "Certaines techniques peuvent être inconfortables, mais nous veillons à minimiser la douleur.",
  },
  {
    id: 7,
    question: "Quels équipements utilisez-vous lors des séances ?",
    answer:
      "Nous utilisons des techniques manuelles, du matériel de rééducation et des dispositifs spécifiques selon les besoins.",
  },
  {
    id: 8,
    question: "Quels vêtements porter pour une séance ?",
    answer:
      "Portez des vêtements confortables et amples qui permettent une bonne mobilité.",
  },
  {
    id: 9,
    question: "Les séances sont-elles remboursées par l'assurance ?",
    answer:
      "Cela dépend de votre contrat d'assurance, vérifiez auprès de votre mutuelle. Les organismes suivants : CNOPS, CNSS, FAR et les assurances privées remboursent les séances.",
  },
  {
    id: 10,
    question: "Puis-je pratiquer une activité physique en parallèle ?",
    answer: "Oui, sauf avis contraire de votre kinésithérapeute.",
  },
  {
    id: 11,
    question: "Faut-il annuler une séance en cas de douleur ?",
    answer:
      "Pas nécessairement, mais informez toujours votre kinésithérapeute.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const toggleQuestion = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="faq-grid"
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
          <rect width="100%" height="100%" fill="url(#faq-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#003c2a] mb-6">
            Questions fréquentes
          </h2>
          <div className="w-20 h-1 bg-[#58B195] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tout ce que vous devez savoir sur nos services de kinésithérapie
          </p>
        </motion.div>
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.1 + 0.3 },
                    }
                  : {}
              }
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div
                className="cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <div
                  className={`px-6 py-5 flex justify-between items-center ${
                    activeIndex === index ? "bg-[#edf7f3]" : ""
                  }`}
                >
                  <h3
                    className={`text-lg font-semibold ${
                      activeIndex === index ? "text-[#003c2a]" : "text-gray-800"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-8 h-8 flex items-center justify-center rounded-full ${
                      activeIndex === index
                        ? "bg-[#003c2a] text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-5 border-t border-gray-100 bg-white">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
        {/* Additional Help Section
        <motion.div
          className="mt-16 bg-white rounded-xl shadow-lg p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-[#003c2a] mb-4">
            Vous avez d'autres questions ?
          </h3>
          <p className="text-gray-600 mb-6">
            N'hésitez pas à nous contacter directement. Notre équipe est à votre
            disposition pour répondre à toutes vos questions.
          </p>
          <motion.div whileHover={{ y: -5 }} whileTap={{ y: 0 }}>
            <a
              href="/contact"
              className="inline-block py-3 px-8 bg-[#58B195] text-white rounded-full font-medium hover:bg-[#489e84] transition-colors shadow-md"
            >
              Contactez-nous
            </a>
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
}
