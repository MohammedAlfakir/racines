// components/Footer.tsx
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#003c2a] text-white pt-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Cabinet Racines</h3>
            <p className="text-gray-400 text-sm">
              Le Cabinet Racines vous accompagne avec expertise en
              physiokinésithérapie pour une prise en charge personnalisée et
              efficace
            </p>
            <div className="flex space-x-4 mt-4">
              <Link
                href="https://www.facebook.com/cabinetracines20"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook className="text-2xl" />
              </Link>
              <Link
                href="https://www.instagram.com/cabinet.racines/"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
              >
                <FaInstagram className="text-2xl" />
              </Link>
              {/* Add other social icons similarly */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/nostraitements"
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Nos traitements
                </Link>
              </li>
              <li>
                <Link
                  href="/parcourspatients"
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Parcours patients
                </Link>
              </li>
              <li>
                <Link
                  href="/lecabinet"
                  className="text-gray-400 hover:text-primary-400  transition-colors text-sm"
                >
                  Le cabinet
                </Link>
              </li>

              {/* Add more links */}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Plus</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  FAQ&lsquo;s
                </Link>
              </li>
              {/* Add more legal links */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nous contacter</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>20C, Résidence Maamora Rue Oued Sebbou</li>
              <li>Immeuble 7 Sala Al Jadida 11100</li>
              <li>Email: info@cabinetracines.com</li>
              <li>Téléphone: +212 641-380-017</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 py-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()}
            <Link href="https://pointvirgul.com/" target="_blank">
              {" "}
              Point Virgul.{" "}
            </Link>
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
