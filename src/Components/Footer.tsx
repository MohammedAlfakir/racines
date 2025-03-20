// components/Footer.tsx
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#003c2a] text-white pt-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Racines</h3>
            <p className="text-gray-400 text-sm">
              Racines incarne une vision : une prise en charge alliant science,
              écoute et respect du corps.
            </p>
            <div className="flex space-x-4 mt-4">
              {/* <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link> */}
              {/* Add other social icons similarly */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2 first-letter:uppercase lowercase">
              <li>
                <Link
                  href="/nostraitements"
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  NOS TRAITEMENTS
                </Link>
              </li>
              <li>
                <Link
                  href="/parcourspatients"
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  PARCOURS PATIENTS
                </Link>
              </li>
              <li>
                <Link
                  href="/lecabinet"
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  LE CABINET
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
              <li>20c, résidence maamora rue oued sebbou</li>
              <li>immeuble 7 Sala Al Jadida 11100</li>
              <li>Email: info@cabinetracines.com</li>
              <li>Téléphone: +212 641-380-017</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 py-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Point Virgul. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
