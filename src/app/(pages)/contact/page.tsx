"use client";
import Footer from "@/Components/Footer";
import Header from "@/Components/Navbar";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";

function Page() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    description: "",
    role: "candidate",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { scrollYProgress } = useScroll();

  const headerRef = useRef(null);
  const headerY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Header />

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
              Contact
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
      </motion.header>

      <section className="my-20 container">
        <div className="flex items-center justify-center gap-20">
          <div className="flex flex-col justify-center max-w-lg ml-20">
            <h2 className="text-3xl font-bold self-start mb-3">
              Discutez avec notre équipe
            </h2>
            <p className="text-base text-gray-500 mb-5">
              Vous avez besoin d’aide ? Vous voulez une démo ? Contactez notre
              équipe amicale et nous reviendrons vers vous dans les 24 heures.
            </p>
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Prénom"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="p-2 w-full border rounded-lg focus-visible:border-[#58B195] focus:outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Nom de famille"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="p-2 w-full border rounded-lg focus-visible:border-[#58B195] focus:outline-none"
                    required
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-2 w-full border rounded-lg focus-visible:border-[#58B195] focus:outline-none"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Numéro de téléphone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="p-2 w-full border rounded-lg focus-visible:border-[#58B195] focus:outline-none"
                />
                <textarea
                  name="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleChange}
                  className="p-2 w-full border rounded-lg h-24 focus-visible:border-[#58B195] focus:outline-none"
                ></textarea>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="p-2 w-full border rounded-lg focus-visible:border-[#58B195] focus:outline-none"
                >
                  <option value="candidate">test2</option>
                  <option value="maldier">Test1</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-[#003c2a] text-white p-2 rounded-lg hover:bg-[#003c2a]"
                >
                  Soumettre
                </button>
              </form>
            </div>
          </div>
          <div>
            <Image
              src={
                "https://images.unsplash.com/photo-1688588162632-2a98e10058da?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="contact"
              width={600}
              height={500}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Page;
