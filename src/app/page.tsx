import Hero from "@/Components/Hero";
// import About from "@/Components/About";
// import Link from "next/link";
// import Image from "next/image";
// import logo from "@/images/logov1.png";
import Footer from "@/Components/Footer";
import Testimonails from "@/Components/Testimonails";
import BlogSection from "@/Components/BlogSection";
import Contact from "@/Components/Contact";
import Parallax from "@/Components/Parallax";
import CommentSyRendre from "@/Components/CommentSyRendre";
// import ServicesSlider from "@/Components/ServicesSlider";
// import Caro from "@/Components/Caro";

function page() {
  return (
    <>
      {/* <section className="w-full mx-auto items-center bg-gradient-to-b from-white to-gray-50">
        <div className="flex justify-between items-center px-10 py-4">
          <Link href="/">
            <div>
              <Image
                src={logo}
                width={50}
                height={50}
                alt="Logo"
                className="cursor-pointer transform hover:-translate-y-1 transition duration-400"
              />
            </div>
          </Link>

          <nav
            className="flex gap-10 items-center list-none text-sm font-semibold"
            role="navigation"
          >
            <Link href="/NosTraitements">
              <li className="transform hover:-translate-y-1 transition duration-400 cursor-pointer">
                NOS TRAITEMENTS
              </li>
            </Link>
            <Link href="/ParcoursPatients">
              <li className="transform hover:-translate-y-1 transition duration-400 cursor-pointer">
                PARCOURS PATIENTS
              </li>
            </Link>

            <Link href="/LeCabinet">
              <li className="transform hover:-translate-y-1 transition duration-400 cursor-pointer">
                LE CABINET
              </li>
            </Link>

            <Link href="/Blog">
              <li className="transform hover:-translate-y-1 transition duration-400 cursor-pointer">
                BlOG
              </li>
            </Link>
          </nav>
          <Link href={"/Contact"}>
            <button className="px-10 py-4 border-2 border-[#003c2a]  text-[#003c2a] rounded-full font-bold transform hover:-translate-y-1 transition duration-400">
              Prendre Rendez-Vous
            </button>
          </Link>
        </div>
      </section> */}
      <Hero />
      <Parallax />
      <Testimonails />
      <BlogSection />
      <Contact />
      <CommentSyRendre />
      <Footer />
    </>
  );
}

export default page;
