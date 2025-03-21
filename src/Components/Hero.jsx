"use client";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import logo from "@/images/logov1.png";
import Image from "next/image";

export default function ExtendedHeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Animation controls
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.8], [0, 600]), {
    stiffness: 150,
    damping: 25,
  });

  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 1]);

  // State for visibility toggle
  const [showContent, setShowContent] = useState(true);
  const [showRevealText, setShowRevealText] = useState(false);

  // For navbar transparency effect on scroll
  const [scrolled, setScrolled] = useState(false);

  // Animating text and buttons position
  const textPosition = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const buttonsPosition = useTransform(scrollYProgress, [0, 0.3], [0, 100]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", latest => {
      setShowContent(latest < 0.15);
      setShowRevealText(latest > 0.15);
    });

    // Handle navbar background change on scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      unsubscribe();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollYProgress]);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src={logo} width={55} />
          </Link>

          {/* Navigation links */}
          <div className="hidden text-sm md:flex space-x-8">
            <NavLink href="/nostraitements" scrolled={scrolled}>
              NOS TRAITEMENTS
            </NavLink>
            <NavLink href="/parcourspatients" scrolled={scrolled}>
              PARCOURS PATIENTS
            </NavLink>
            <NavLink href="/lecabinet" scrolled={scrolled}>
              LE CABINET
            </NavLink>
            <NavLink href="/blog" scrolled={scrolled}>
              BLOG
            </NavLink>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className={`hidden md:block px-6 py-2 rounded-full border-2 transition-colors ${
              scrolled
                ? "border-[#003c2a] text-[#003c2a] hover:bg-[#003c2a] hover:text-white"
                : "border-[#003c2a] text-[#003c2a] hover:bg-[#003c2a] hover:text-white"
            }`}
          >
            Prendre RDV
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#003c2a]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Decorative element in navbar */}
      </motion.nav>

      {/* Hero Section */}
      <section
        ref={containerRef}
        className="w-full min-h-[130vh] relative overflow-hidden"
      >
        {/* Light gradient background - low GPU impact */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />

        {/* Decorative elements - static SVG instead of animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Decorative lines - fixed position */}
          <svg
            className="absolute inset-0 w-full h-full overflow-visible opacity-30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,200 C200,150 400,250 600,200 C800,150 900,250 1000,200"
              stroke="#58B195"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M0,400 C150,350 350,450 500,400 C650,350 850,450 1000,400"
              stroke="#003c2a"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M0,600 C200,550 400,650 600,600 C800,550 900,650 1000,600"
              stroke="#58B195"
              strokeWidth="1"
              fill="none"
            />
          </svg>

          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-32 h-32 opacity-50">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0 L100 0 L0 100 Z" fill="#58B195" opacity="0.2" />
              <path d="M0 0 L70 0 L0 70 Z" fill="#003c2a" opacity="0.2" />
              <path d="M0 0 L40 0 L0 40 Z" fill="#58B195" opacity="0.3" />
            </svg>
          </div>

          <div className="absolute bottom-0 right-0 w-32 h-32 opacity-50 rotate-180">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0 L100 0 L0 100 Z" fill="#58B195" opacity="0.2" />
              <path d="M0 0 L70 0 L0 70 Z" fill="#003c2a" opacity="0.2" />
              <path d="M0 0 L40 0 L0 40 Z" fill="#58B195" opacity="0.3" />
            </svg>
          </div>
        </div>

        {/* Expanding dark overlay (centered) */}
        <motion.div
          style={{ scale, opacity: overlayOpacity }}
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 
          w-[100%] h-[1vh] bg-[#003c2a] origin-center z-20"
        />

        <div className="relative w-screen h-screen flex items-center justify-center">
          {/* Foreground Content */}
          {showContent && (
            <div className="relative z-10 h-screen flex flex-col items-center justify-center">
              <section className="container uppercase text-[#262626] flex justify-between items-center mx-auto gap-10">
                <div className="font-medium text-8xl w-[100%]">
                  <motion.h1
                    style={{ x: textPosition }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="ml-[-150px] mb-3">Cabinet Racines</div>
                    <div className="flex items-center gap-5">
                      <div className=" text-[#003c2a] mb-3">ensemble</div>
                      <p className="text-sm w-96">
                        Chez Racines Physio, nous combinons expertise et soins
                        personnalisés pour une rééducation complète et durable.
                      </p>
                    </div>
                  </motion.h1>
                  <motion.div
                    style={{ x: buttonsPosition }}
                    className="uppercase"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <div className="text-8xl mb-4 ml-[-150px]">
                      faisons le premier pas
                    </div>
                    <div className="ml-1 w-[100%] border-[#003c2a] text-[#003c2a] py-2 border-2 px-10 rounded-full text-center">
                      <div>vers la guérison.</div>
                    </div>
                  </motion.div>
                </div>
                {/* <div className="self-end w-[30%]">
                  <motion.div
                    style={{ x: buttonsPosition }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <div className="text-[#5A5A5A] mb-5 text-start">
                      Chez Racines Physio, nous combinons expertise et soins
                      personnalisés pour une rééducation complète et durable.
                    </div>
                    <div className="flex mt-5">
                      <button className="underline text-[#5A5A5A] rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 text-sm">
                        Découvrez Nos traitements
                      </button>
                    </div>
                  </motion.div>
                </div> */}
              </section>
            </div>
          )}
        </div>

        {/* Reveal content (appears on scroll) */}
        {showRevealText && (
          <div
            className="mt-24 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                   text-white text-center z-30 space-y-4"
          >
            <motion.h2
              className="font-bold text-3xl italic"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1 }}
            >
              &quot;Un cabinet, c'est avant tout une vision. Racines est né
              d'une volonté : offrir une prise en charge fondée sur la science,
              l'écoute et un profond respect du corps. Découvrez ce qui nous
              anime et comment nous avons bâti cette approche.&quot;
            </motion.h2>
            <motion.p
              className="text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              - La Fondatrice
            </motion.p>
            <motion.button
              className="px-10 py-4 border-2 border-[#fff] text-[#fff] rounded-full font-bold transform hover:-translate-y-1 transition duration-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/lecabinet">
                Plongez dans l&quot;histoire de Racines
              </Link>
            </motion.button>
          </div>
        )}

        {/* Decorative plant motif - bottom left */}
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-30 pointer-events-none">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10,90 C30,70 20,40 10,30 C20,40 50,30 70,10"
              stroke="#003c2a"
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
              stroke="#003c2a"
              strokeWidth="0.4"
              fill="none"
            />

            <circle cx="10" cy="30" r="2" fill="#003c2a" opacity="0.8" />
            <circle cx="15" cy="30" r="1.5" fill="#58B195" opacity="0.8" />
            <circle cx="20" cy="30" r="1" fill="#003c2a" opacity="0.8" />

            <circle cx="70" cy="10" r="2" fill="#003c2a" opacity="0.8" />
            <circle cx="75" cy="10" r="1.5" fill="#58B195" opacity="0.8" />
            <circle cx="80" cy="10" r="1" fill="#003c2a" opacity="0.8" />
          </svg>
        </div>
      </section>

      {/* About Content Section with green background */}
      <section className="relative bg-[#003c2a] text-white pt-10 pb-48 overflow-hidden">
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
          {/* Histoire et Philosophie content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-6xl font-bold mb-6 text-center">
              <span className="text-[#58B195]">Histoire</span> et{" "}
              <span className="text-[#58B195]">Philosophie</span>
            </h2>

            <p className="text-xl leading-relaxed text-center">
              Nous sommes nés d'une volonté d'offrir des soins personnalisés,
              alliant expertise et bienveillance. Chaque patient bénéficie d'un
              suivi adapté, axé sur une récupération complète et durable. Notre
              approche globale place vos besoins au cœur de nos actions, pour
              améliorer votre qualité de vie avec professionnalisme et humanité.
            </p>
          </motion.div>

          {/* Missions and Valeurs columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-20 ml-[300px]">
            {/* Left column - Missions */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-3xl font-bold mb-6 flex items-center">
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

              <ul className="space-y-4 text-lg">
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

            {/* Right column - Valeurs */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-3xl font-bold mb-6 flex items-center">
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

              <ul className="space-y-4 text-lg">
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
      </section>
    </>
  );
}

// Navigation Link component
function NavLink({ href, children, scrolled }) {
  return (
    <Link
      href={href}
      className={`relative group font-medium transition-colors ${
        scrolled
          ? "text-[#262626] hover:text-[#003c2a]"
          : "text-[#003c2a] hover:text-[#58B195]"
      }`}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#58B195] transition-all duration-300 group-hover:w-full"></span>
    </Link>
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
