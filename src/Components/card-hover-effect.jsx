"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// The services content with enhanced short descriptions
const servicesData = [
  {
    id: 1,
    title: "Rééducation Fonctionnelle",
    shortDesc:
      "Retrouvez votre mobilité et votre force après une blessure ou une opération grâce à nos techniques spécialisées de rééducation fonctionnelle adaptées à votre condition.",
    fullDesc:
      "La rééducation fonctionnelle est un ensemble de techniques utilisées pour rétablir les capacités physiques d'un patient après une blessure, une opération ou une maladie. Elle vise à améliorer la force musculaire, la mobilité articulaire et l'équilibre, tout en rééduquant les gestes du quotidien, afin de permettre une reprise d'activité normale et sans douleur.",
  },
  {
    id: 2,
    title: "Thérapie Manuelle",
    shortDesc:
      "Notre approche de thérapie manuelle combine différentes techniques de manipulation pour soulager vos douleurs et restaurer le mouvement de vos articulations.",
    fullDesc:
      "La thérapie manuelle consiste en l'utilisation de techniques spécifiques de manipulation des articulations, muscles et tissus mous, afin de réduire la douleur, améliorer la mobilité et restaurer la fonction. Cela peut inclure des manipulations, des mobilisations et des étirements pour traiter diverses pathologies musculosquelettiques.",
  },
  {
    id: 3,
    title: "Kinésithérapie Respiratoire",
    shortDesc:
      "Améliorez votre fonction respiratoire grâce à nos techniques de désencombrement et de renforcement, adaptées aussi bien aux adultes qu'aux enfants.",
    fullDesc:
      "La kinésithérapie respiratoire est une spécialité qui vise à traiter les affections respiratoires en utilisant des techniques de désencombrement des voies respiratoires et d'amélioration de la ventilation pulmonaire. Elle est particulièrement bénéfique pour les patients atteints de maladies respiratoires chroniques, d'asthme, de bronchiolites chez les enfants, ou encore lors de la rééducation post-chirurgicale.",
  },
  {
    id: 4,
    title: "Réadaptation Cardiorespiratoire",
    shortDesc:
      "Programmes personnalisés pour les patients cardiaques visant à renforcer votre système cardiovasculaire et améliorer votre qualité de vie au quotidien.",
    fullDesc:
      "La réadaptation cardiorespiratoire s'adresse aux patients ayant souffert de maladies cardiaques ou respiratoires graves. Elle comprend un programme de rééducation physique personnalisé qui vise à améliorer l'endurance cardiovasculaire, renforcer la fonction cardiaque et respiratoire, tout en minimisant les risques futurs d'aggravation de ces maladies.",
  },
  {
    id: 5,
    title: "Activité physique adaptée",
    shortDesc:
      "Un programme d'exercices sur mesure qui tient compte de votre condition physique, vos objectifs de santé et vos éventuelles limitations ou pathologies.",
    fullDesc:
      "Ce traitement consiste à prescrire un programme d'exercice physique spécifiquement conçu pour répondre aux besoins et capacités de chaque patient, en fonction de son état de santé, son âge et ses objectifs. Elle est souvent utilisée pour traiter ou prévenir des maladies chroniques comme le diabète, l'hypertension, les maladies cardiaques, etc., et peut aussi être un complément dans les parcours de rééducation.",
  },
  {
    id: 6,
    title: "Drainage lymphatique",
    shortDesc:
      "Technique douce pour réduire les œdèmes et favoriser la circulation lymphatique. Disponible en version manuelle ou avec assistance mécanique selon vos besoins.",
    fullDesc:
      "Le drainage lymphatique est une technique de massage douce qui stimule la circulation de la lymphe pour favoriser l'élimination des toxines et réduire l'œdème. La version manuelle implique des gestes lents et rythmiques, tandis que le drainage lymphatique mécanique utilise des dispositifs spécifiques (comme des appareils de compression) pour accomplir ce même objectif.",
  },
  {
    id: 7,
    title: "Dry Needling",
    shortDesc:
      "Technique précise utilisant de fines aiguilles pour cibler les points de tension musculaire et offrir un soulagement rapide des douleurs chroniques et des contractures.",
    fullDesc:
      'Le Dry Needling, ou "aiguilletage sec", consiste à insérer de fines aiguilles dans des points spécifiques de tension musculaire appelés "trigger points" (points de déclenchement) afin de libérer la tension, réduire la douleur et améliorer la fonction musculaire. Il est utilisé pour traiter des douleurs musculaires chroniques, des contractures ou des troubles musculosquelettiques.',
  },
  {
    id: 8,
    title: "Bandage et Strapping",
    shortDesc:
      "Solutions de maintien et stabilisation pour les articulations fragilisées, que ce soit en phase de récupération ou en prévention pendant vos activités physiques.",
    fullDesc:
      "Le bandage et le strapping sont des techniques de soutien utilisées pour stabiliser une articulation ou un muscle après une blessure. Ils permettent de limiter les mouvements, réduire l'inflammation, et soutenir la guérison. Le strapping est souvent utilisé en prévention ou pour soulager des douleurs aiguës pendant l'activité physique.",
  },
  {
    id: 9,
    title: "Rééducation Périnéale",
    shortDesc:
      "Programme complet pour renforcer les muscles du plancher pelvien, particulièrement bénéfique après un accouchement ou en cas d'incontinence urinaire.",
    fullDesc:
      "La rééducation périnéale consiste en un ensemble de techniques qui visent à renforcer les muscles du périnée, un groupe musculaire important pour le contrôle de la vessie, de l'intestin et pour la fonction sexuelle. Cette rééducation est souvent recommandée après un accouchement, dans le cadre du traitement de l'incontinence urinaire, ou encore après une chirurgie pelvienne.",
  },
  {
    id: 10,
    title: "Cupping Thérapie",
    shortDesc:
      "Méthode ancestrale revisitée pour stimuler la circulation sanguine, détendre les muscles tendus et accélérer la récupération après l'effort ou en cas de douleurs.",
    fullDesc:
      "La thérapie par ventouses (Cupping) est une méthode de traitement qui consiste à appliquer des ventouses sur la peau pour créer une succion. Cela améliore la circulation sanguine, soulage les douleurs musculaires et réduit les tensions. Elle est utilisée pour traiter diverses pathologies, comme les douleurs chroniques, les tensions musculaires, ou encore pour stimuler la guérison des tissus.",
  },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = service => {
    setSelectedService(service);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-[#003c2a] mb-6">
            Physiothérapie & Réadaptation
          </h2>
          <div className="w-20 h-1 bg-[#58B195] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services de physiothérapie et de
            réadaptation conçus pour vous aider à retrouver votre bien-être et
            votre mobilité
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl h-full flex flex-col transform group-hover:-translate-y-1">
                {/* Accent color bar */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#003c2a] to-[#58B195]"></div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-bold text-2xl mb-4 text-[#003c2a] group-hover:text-[#58B195] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <button
                    onClick={() => openModal(service)}
                    className="inline-flex items-center justify-center font-medium transition-all px-6 py-3 rounded-lg text-white bg-[#003c2a] hover:bg-[#004d36] mt-auto"
                  >
                    <span>Voir plus</span>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-[#003c2a]">
                  {selectedService.title}
                </h2>
                <button
                  onClick={closeModal}
                  className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
                >
                  <span className="block w-6 h-6 flex items-center justify-center text-gray-500">
                    ✕
                  </span>
                </button>
              </div>

              <div className="w-24 h-1 bg-[#58B195] mb-6"></div>

              <p className="text-gray-600 leading-relaxed text-lg">
                {selectedService.fullDesc}
              </p>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={closeModal}
                  className="bg-[#003c2a] text-white px-5 py-2 rounded-lg hover:bg-[#004d36] transition-colors"
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
