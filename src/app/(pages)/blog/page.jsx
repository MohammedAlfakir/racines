"use client";
import { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
} from "framer-motion";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Link from "next/link";

// Blog post data - replace with your actual content
const blogPosts = [
  {
    id: 1,
    title: "La rééducation sportive : approches modernes",
    excerpt:
      "Découvrez les techniques avancées de rééducation pour les athlètes et sportifs amateurs.",
    date: "19 Mars 2025",
    category: "Rééducation",
    image: "/images/blog/sports-rehab.jpg", // Replace with your actual image path
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Comment prévenir les douleurs lombaires au quotidien",
    excerpt:
      "Des exercices simples et efficaces pour maintenir la santé de votre dos et prévenir les douleurs.",
    date: "15 Mars 2025",
    category: "Prévention",
    image: "/images/blog/back-pain.jpg",
    readTime: "4 min",
  },
  {
    id: 3,
    title: "Les bienfaits de la kinésithérapie respiratoire",
    excerpt:
      "Comprendre l'importance de la rééducation respiratoire pour améliorer votre qualité de vie.",
    date: "8 Mars 2025",
    category: "Respiratoire",
    image: "/images/blog/respiratory.jpg",
    readTime: "6 min",
  },
  {
    id: 4,
    title: "Physiothérapie et grossesse : ce que vous devez savoir",
    excerpt:
      "Conseils et techniques adaptées pour soulager les inconforts liés à la grossesse.",
    date: "2 Mars 2025",
    category: "Maternité",
    image: "/images/blog/pregnancy.jpg",
    readTime: "7 min",
  },
  {
    id: 5,
    title: "L'importance de la posture au travail",
    excerpt:
      "Comment aménager votre espace de travail et adopter les bonnes postures pour préserver votre santé.",
    date: "25 Février 2025",
    category: "Ergonomie",
    image: "/images/blog/posture.jpg",
    readTime: "5 min",
  },
  {
    id: 6,
    title: "Récupération après une intervention chirurgicale",
    excerpt:
      "Protocoles de rééducation post-opératoire pour optimiser votre rétablissement.",
    date: "18 Février 2025",
    category: "Post-opératoire",
    image: "/images/blog/recovery.jpg",
    readTime: "8 min",
  },
];

// Categories for filter
const categories = [
  "Tous",
  "Rééducation",
  "Prévention",
  "Respiratoire",
  "Maternité",
  "Ergonomie",
  "Post-opératoire",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  // Filter posts based on category and search term
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory =
      selectedCategory === "Tous" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
      <div className="min-h-screen bg-white">
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
                Blog
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
        {/* Search and Filter Section */}
        <section className="container mx-auto  px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <motion.div
              className="relative w-full md:w-1/3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <input
                type="text"
                placeholder="Rechercher un article..."
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#58B195] transition-all"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-2 justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-[#003c2a] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-500">
                  Aucun article ne correspond à votre recherche.
                </p>
              </div>
            )}
          </div>
        </section>
        {/* Newsletter Section */}
        <section
          ref={sectionRef}
          className="py-32 relative overflow-hidden mt-24 bg-[#58B195]"
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
                    Découvrez comment nous vous accompagnons à chaque étape, de
                    la première consultation jusqu&apos;à votre retour à une
                    pleine autonomie.
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
                    href="/contact"
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
      </div>
      <Footer />
    </>
  );
}

// Blog Card Component with animations
function BlogCard({ post, index }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -10,
        boxShadow:
          "0 20px 25px -5px rgba(0, 60, 42, 0.1), 0 10px 10px -5px rgba(0, 60, 42, 0.04)",
      }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      <Link href={`/blog/${post.id}`} className="block">
        <div className="relative h-52 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-[#003c2a] z-10 origin-left"
            initial={{ scaleX: 1 }}
            animate={isInView ? { scaleX: 0 } : { scaleX: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
          />
          <div className="h-full w-full bg-gray-200 relative">
            {/* Replace with actual Image component for Next.js */}
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
              {/* This is a placeholder - use Next Image in production */}
              <span>{post.category}</span>
            </div>
          </div>
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-[#58B195] text-white text-xs font-medium px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime} de lecture</span>
          </div>

          <h3 className="font-bold text-xl mb-2 text-gray-800 hover:text-[#58B195] transition-colors">
            {post.title}
          </h3>

          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

          <div className="flex items-center font-medium text-[#003c2a]">
            <span>Lire l'article</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
