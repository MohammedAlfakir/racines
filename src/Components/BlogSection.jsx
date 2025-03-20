"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import img from "@/images/image 34.png";

// Sample featured blog posts for the landing page
const featuredPosts = [
  {
    id: 1,
    title: "La rééducation sportive : approches modernes",
    excerpt:
      "Découvrez les techniques avancées de rééducation pour les athlètes et sportifs amateurs.",
    date: "19 Mars 2025",
    category: "Rééducation",
    image:
      "https://images.unsplash.com/photo-1556476874-c98062c7027a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Comment prévenir les douleurs lombaires au quotidien",
    excerpt:
      "Des exercices simples et efficaces pour maintenir la santé de votre dos et prévenir les douleurs.",
    date: "15 Mars 2025",
    category: "Prévention",
    image:
      "https://images.unsplash.com/photo-1653106520197-2134f341c11b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29tbWVudCUyMHByJUMzJUE5dmVuaXIlMjBsZXMlMjBkb3VsZXVycyUyMGxvbWJhaXJlcyUyMGF1JTIwcXVvdGlkaWVufGVufDB8fDB8fHww",
    readTime: "4 min",
  },
  {
    id: 3,
    title: "Les bienfaits de la kinésithérapie respiratoire",
    excerpt:
      "Comprendre l'importance de la rééducation respiratoire pour améliorer votre qualité de vie.",
    date: "8 Mars 2025",
    category: "Respiratoire",
    image:
      "https://images.unsplash.com/photo-1612278247108-4a9e82d2ca57?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fExlcyUyMGJpZW5mYWl0cyUyMGRlJTIwbGElMjBraW4lQzMlQTlzaXRoJUMzJUE5cmFwaWUlMjByZXNwaXJhdG9pcmV8ZW58MHx8MHx8fDA%3D",
    readTime: "6 min",
  },
];

export default function LandingPageBlogSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gray-50"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative circles */}
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#58B195]/5"
          style={{
            filter: "blur(80px)",
            transform: "translate(30%, -30%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#003c2a]/5"
          style={{
            filter: "blur(80px)",
            transform: "translate(-30%, 30%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        />

        {/* Animated path */}
        <svg
          className="absolute bottom-0 w-full overflow-visible opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,80 C150,30 350,130 500,80 C650,30 850,130 1000,80"
            stroke="#58B195"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              isInView
                ? {
                    pathLength: 1,
                    opacity: 0.6,
                    y: [0, 15, 0],
                  }
                : {}
            }
            transition={{
              pathLength: { duration: 2, ease: "easeInOut" },
              opacity: { duration: 1 },
              y: {
                repeat: Infinity,
                duration: 10,
                ease: "easeInOut",
              },
            }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#58B195] font-medium uppercase text-sm tracking-wider">
              Nos connaissances à votre service
            </span>
            <h2 className="text-4xl font-bold mt-2 mb-6 text-[#003c2a]">
              <motion.span
                className="inline-block"
                initial={{ y: 40 }}
                animate={isInView ? { y: 0 } : {}}
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
                initial={{ y: 40 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.3,
                }}
              >
                Racines
              </motion.span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explorez nos articles sur la santé, la physiothérapie et le
              bien-être pour vous accompagner dans votre parcours vers une
              meilleure santé.
            </p>
          </motion.div>
        </div>

        {/* Featured Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <FeaturedBlogCard
              key={post.id}
              post={post}
              index={index}
              inView={isInView}
            />
          ))}
        </div>

        {/* "View All" Button */}
        <div className="text-center mt-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#003c2a] text-white rounded-full font-medium hover:bg-[#002a1e] transition-colors group"
            >
              Voir tous nos articles
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  repeatDelay: 1,
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </motion.svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Featured Blog Card Component with animations
function FeaturedBlogCard({ post, index, inView }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
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
            animate={inView ? { scaleX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
          />
          <div className="h-full w-full bg-gray-200 relative">
            {/* Replace with actual Image component for Next.js */}
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
              {/* This is a placeholder - use Next Image in production */}
              <Image
                src={post.image}
                width={500}
                height={500}
                alt="Blog image"
              />
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

          <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

          <div className="flex items-center font-medium text-[#003c2a] group">
            <span>Lire l'article</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              whileHover={{ x: 3 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
