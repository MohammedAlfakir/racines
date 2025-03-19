"use client";
import { TypewriterEffectSmooth } from "@/Components/ui/typewriter-effect";
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Un Espace",
    },
    {
      text: "Dédié à",
    },
    {
      text: "Votre Récupération",
    },
    {
      text: "et",
    },
    {
      text: "Votre Mobilité.",
      className: "text-[#58B195]",
    },
  ];
  return (
    <div className="flex flex-col items-center text-center justify-center h-[40rem]  ">
      <TypewriterEffectSmooth words={words} />
      <p className="text-neutral-600 mt-4 mb-8 dark:text-neutral-200 text-xs sm:text-base  w-1/2">
        Plus qu&quot;un simple cabinet, Racines est un lieu où chaque prise en
        charge repose sur l&quot;expertise, l&quot;écoute et une approche
        personnalisée. Ici, chaque patient est au cœur de notre engagement :
        restaurer le mouvement, soulager les douleurs et accompagner vers une
        récupération durable.
      </p>
      <div className="flex gap-5 flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="px-8 py-4 border bg-[#58B195] text-white rounded-full font-bold transform hover:-translate-y-1 transition text-sm duration-400">
          Prendre Rendez-Vous
        </button>
        <button className="underline text-[#5A5A5A] rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 text-sm">
          Découvrez Nos traitements
        </button>
      </div>
    </div>
  );
}
