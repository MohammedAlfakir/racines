"use client";
import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
} from "framer-motion";
import Link from "next/link";

// This would be in your app/blog/[id]/page.jsx file
export default function BlogPost({ params }) {
  // In a real app, you would fetch the post data based on the ID
  // For this example, we'll use mock data
  const post = {
    id: params.id,
    title: "La rééducation sportive : approches modernes",
    date: "19 Mars 2025",
    author: "Dr. Marie Laurent",
    authorRole: "Physiothérapeute spécialisée",
    category: "Rééducation",
    image: "/images/blog/sports-rehab.jpg",
    readTime: "5 min",
    content: `
      <p>La rééducation sportive a considérablement évolué ces dernières années, intégrant des techniques innovantes et des approches personnalisées pour optimiser la récupération des athlètes.</p>
      
      <h2>L'importance d'une approche individualisée</h2>
      
      <p>Chaque athlète est unique, avec des besoins spécifiques liés à sa morphologie, sa discipline sportive et son historique de blessures. Une approche individualisée est donc essentielle pour une rééducation efficace.</p>
      
      <p>Chez Cabinet Racines, nous commençons toujours par une évaluation complète qui prend en compte non seulement la blessure actuelle, mais aussi l'ensemble des facteurs qui peuvent influencer la récupération :</p>
      
      <ul>
        <li>Analyse biomécanique du mouvement</li>
        <li>Évaluation de la force et de la souplesse</li>
        <li>Historique médical et sportif</li>
        <li>Objectifs de performance à court et long terme</li>
      </ul>
      
      <h2>Les techniques modernes de rééducation</h2>
      
      <p>Les avancées technologiques ont permis le développement de nombreuses techniques innovantes en rééducation sportive :</p>
      
      <h3>1. La thérapie par ondes de choc</h3>
      
      <p>Cette technique utilise des ondes acoustiques de haute énergie pour stimuler les processus de guérison naturels du corps. Elle est particulièrement efficace pour traiter les tendinopathies chroniques, comme la tendinite d'Achille ou l'épicondylite (tennis elbow).</p>
      
      <h3>2. La rééducation proprioceptive avancée</h3>
      
      <p>La proprioception, ou conscience de la position de son corps dans l'espace, est cruciale pour les athlètes. Les techniques modernes incluent l'utilisation de plateformes instables, de réalité virtuelle et d'exercices spécifiques pour améliorer cette capacité souvent compromise après une blessure.</p>
      
      <h2>L'importance de la prévention</h2>
      
      <p>La meilleure approche reste la prévention. Un programme d'entraînement bien conçu, incluant des exercices de renforcement ciblés et un travail sur la technique, peut considérablement réduire le risque de blessures.</p>
      
      <p>Notre équipe propose des bilans préventifs pour identifier les faiblesses et déséquilibres avant qu'ils ne conduisent à des blessures.</p>
      
      <h2>Conclusion</h2>
      
      <p>La rééducation sportive moderne est un domaine en constante évolution, intégrant des connaissances de plus en plus pointues en physiologie, biomécanique et sciences du sport. Chez Cabinet Racines, nous nous engageons à rester à la pointe de ces avancées pour offrir à nos patients sportifs les meilleures chances de récupération et de performance.</p>
    `,
    tags: ["Sport", "Rééducation", "Techniques innovantes", "Prévention"],
    relatedPosts: [2, 5, 6],
  };

  // Animation refs
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const isContentInView = useInView(contentRef, {
    once: true,
    margin: "-100px",
  });

  // Scroll progress animations
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  // Parallax effect for header image
  const headerParallax = useTransform(smoothScroll, [0, 1], [0, -150]);

  // Progress bar animation
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="min-h-screen bg-white">
      {/* Reading progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#58B195] z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Back button */}
      <div className="container mx-auto px-4 py-6">
        <Link
          href="/blog"
          className="inline-flex items-center text-[#003c2a] hover:text-[#58B195] transition-colors"
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Retour aux articles
        </Link>
      </div>

      {/* Article Header */}
      <header ref={headerRef} className="relative overflow-hidden">
        <div className="h-[60vh] relative overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{ y: headerParallax }}
          >
            {/* Dynamic background with animated elements */}
            <div className="h-full w-full bg-[#003c2a] flex items-center justify-center relative">
              {/* Animated leaf-like shapes */}
              {Array.from({ length: 15 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    background: `rgba(88, 177, 149, ${
                      Math.random() * 0.4 + 0.2
                    })`,
                    width: `${Math.random() * 180 + 100}px`,
                    height: `${Math.random() * 180 + 100}px`,
                    borderRadius: `${Math.random() * 40 + 30}% ${
                      Math.random() * 40 + 30
                    }% ${Math.random() * 40 + 30}% ${Math.random() * 40 + 30}%`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.4 + 0.1,
                    filter: "blur(8px)",
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [
                      `${Math.random() * 360}deg`,
                      `${Math.random() * 360 + 40}deg`,
                    ],
                    borderRadius: [
                      `${Math.random() * 40 + 30}% ${
                        Math.random() * 40 + 30
                      }% ${Math.random() * 40 + 30}% ${
                        Math.random() * 40 + 30
                      }%`,
                      `${Math.random() * 40 + 30}% ${
                        Math.random() * 40 + 30
                      }% ${Math.random() * 40 + 30}% ${
                        Math.random() * 40 + 30
                      }%`,
                    ],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "reverse",
                  }}
                />
              ))}

              {/* Floating lines for visual interest */}
              <svg
                className="absolute inset-0 w-full h-full overflow-visible opacity-30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M0,100 C150,50 250,150 400,100 C550,50 700,150 1000,100"
                  stroke="#58B195"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: 1,
                    opacity: 0.8,
                    y: [0, 20, 0],
                  }}
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
                <motion.path
                  d="M0,200 C200,150 400,250 600,200 C800,150 900,250 1000,200"
                  stroke="#58B195"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: 1,
                    opacity: 0.5,
                    y: [0, -20, 0],
                  }}
                  transition={{
                    pathLength: { duration: 2, delay: 0.5, ease: "easeInOut" },
                    opacity: { duration: 1, delay: 0.5 },
                    y: {
                      repeat: Infinity,
                      duration: 12,
                      ease: "easeInOut",
                    },
                  }}
                />
              </svg>
            </div>
          </motion.div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-[#003c2a]/50 to-transparent" />

          <div className="container mx-auto px-4 h-full flex items-end pb-16 relative z-10">
            <div className="text-white max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.8 }}
              >
                <div className="mb-4">
                  <span className="bg-[#58B195] text-white text-sm font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center text-sm md:text-base gap-x-4 gap-y-2 text-gray-200">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime} de lecture</span>
                  <span>•</span>
                  <span>
                    Par {post.author}, {post.authorRole}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <motion.article
            ref={contentRef}
            className="lg:w-2/3"
            initial={{ opacity: 0, y: 50 }}
            animate={
              isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.8 }}
          >
            <div
              className="prose prose-lg max-w-none prose-headings:text-[#003c2a] prose-a:text-[#58B195]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-medium mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag}`}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Author box */}
            <div className="mt-12 p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-300 flex-shrink-0">
                  {/* Author image placeholder */}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{post.author}</h3>
                  <p className="text-gray-600">{post.authorRole}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                Spécialiste en physiothérapie sportive avec plus de 10 ans
                d'expérience auprès d'athlètes de haut niveau. Passionnée par
                les approches innovantes en rééducation.
              </p>
            </div>
          </motion.article>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <motion.div
              className="sticky top-24"
              initial={{ opacity: 0, x: 50 }}
              animate={
                isContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Table of Contents */}
              <div className="mb-12 p-6 bg-gray-50 rounded-xl">
                <h3 className="text-lg font-medium mb-4 text-[#003c2a]">
                  Dans cet article
                </h3>
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-[#58B195] transition-colors"
                      >
                        L'importance d'une approche individualisée
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-[#58B195] transition-colors"
                      >
                        Les techniques modernes de rééducation
                      </a>
                    </li>
                    <li className="pl-4">
                      <a
                        href="#"
                        className="text-gray-700 hover:text-[#58B195] transition-colors"
                      >
                        La thérapie par ondes de choc
                      </a>
                    </li>
                    <li className="pl-4">
                      <a
                        href="#"
                        className="text-gray-700 hover:text-[#58B195] transition-colors"
                      >
                        La rééducation proprioceptive avancée
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-[#58B195] transition-colors"
                      >
                        L'importance de la prévention
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-[#58B195] transition-colors"
                      >
                        Conclusion
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Related Posts */}
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="text-lg font-medium mb-6 text-[#003c2a]">
                  Articles similaires
                </h3>
                <div className="space-y-6">
                  {[1, 2, 3].map((_, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-20 h-20 rounded-lg bg-gray-300 flex-shrink-0">
                        {/* Image placeholder */}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 hover:text-[#58B195] transition-colors">
                          <Link href={`/blog/${index + 2}`}>
                            {index === 0
                              ? "Comment prévenir les douleurs lombaires"
                              : index === 1
                              ? "L'importance de la posture au travail"
                              : "Récupération après une intervention chirurgicale"}
                          </Link>
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          {index === 0
                            ? "15 Mars 2025"
                            : index === 1
                            ? "25 Février 2025"
                            : "18 Février 2025"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </aside>
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-[#003c2a] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Besoin d'un accompagnement personnalisé ?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Notre équipe de spécialistes est prête à vous aider dans votre
              rééducation.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[#58B195] text-white rounded-full font-bold hover:bg-[#489e84] transition-colors"
            >
              Prendre rendez-vous
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
