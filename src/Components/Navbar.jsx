"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import logo from "@/images/logov1.png";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3 transition-all duration-300`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src={logo} width={55} />
          </Link>

          {/* Desktop Navigation links */}
          <div className="hidden md:flex space-x-8 text-sm">
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
          <button
            className="md:hidden text-[#003c2a]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
            )}
          </button>
        </div>

        {/* Decorative line at the bottom of navbar */}
        {/* <div className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden">
          <div
            className={`w-full h-full ${
              scrolled ? "bg-gray-200" : "bg-transparent"
            }`}
          ></div>
        </div> */}
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 md:hidden`}
        style={{
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? "auto" : "none",
        }}
      >
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col space-y-6">
            <MobileNavLink
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
            >
              À propos
            </MobileNavLink>
            <MobileNavLink
              href="/treatments"
              onClick={() => setMobileMenuOpen(false)}
            >
              Traitements
            </MobileNavLink>
            <MobileNavLink
              href="/team"
              onClick={() => setMobileMenuOpen(false)}
            >
              Équipe
            </MobileNavLink>
            <MobileNavLink
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </MobileNavLink>
            <MobileNavLink
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </MobileNavLink>

            <Link
              href="/contact"
              className="mt-4 px-6 py-3 rounded-full border-2 border-[#003c2a] bg-[#003c2a] text-white text-center font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Prendre Rendez-Vous
            </Link>
          </div>

          {/* Decorative element */}
          <div className="absolute bottom-10 left-6 right-6 opacity-10">
            <svg viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0,10 C20,5 40,15 60,10 C80,5 90,15 100,10"
                stroke="#003c2a"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>

          {/* Corner decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 0 L100 100 L0 0 Z" fill="#58B195" opacity="0.3" />
              <path d="M100 0 L100 70 L30 0 Z" fill="#003c2a" opacity="0.3" />
              <path d="M100 0 L100 40 L60 0 Z" fill="#58B195" opacity="0.3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from hiding behind the navbar */}
      <div className="h-20"></div>
    </>
  );
}

// Desktop Navigation Link component
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

// Mobile Navigation Link component
function MobileNavLink({ href, children, onClick }) {
  return (
    <Link
      href={href}
      className="text-2xl text-[#003c2a] font-medium"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
