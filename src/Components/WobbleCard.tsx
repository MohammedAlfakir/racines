"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/Components/ui/wobble-card";
import img from "@/images/2.jpg";
import img2 from "@/images/1.jpg";

export default function WobbleCardDemo() {
  return (
    <>
      <section className="mb-16 container mx-auto">
        <div className="flex flex-col items-start justify-center px-10 gap-5 mt-32 w-[50%]">
          <h2 className="text-5xl font-extrabold text-[#262626]">
            Prenez soin de vous-même à la maison.
          </h2>
          <p className="text-xl text-[#5A5A5A] w-[70%]">
            Découvrez nos articles, vidéos et astuces pour prolonger les
            bienfaits de vos séances.
          </p>
        </div>
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Gippity AI alimente tout l&apos;univers
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Avec plus de 100 000 utilisateurs actifs mensuels, Gippity AI est
              la plateforme d&apos;IA la plus populaire pour les développeurs.
            </p>
          </div>
          <Image
            src={img}
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Pas de chemise, pas de chaussures, pas d&apos;armes.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Si quelqu&apos;un crie &apos;arrêtez !&apos;, devient mou, ou tape,
            le combat est terminé.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Inscrivez-vous pour une expérience ultra-rapide avec le Gippity AI
              de pointe !
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Avec plus de 100 000 utilisateurs actifs mensuels, Gippity AI est
              la plateforme d&apos;IA la plus populaire pour les développeurs.
            </p>
          </div>
          <Image
            src={img2}
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </>
  );
}
