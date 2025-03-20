"use client";
import React from "react";
import Image from "next/image";
// import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/Components/ui/tracing-beam";

export default function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6 mt-24 mb-24">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-[#58B195] text-white rounded-full text-base w-fit px-8 py-1 mb-4">
              {item.badge}
            </h2>

            {/* <p className={twMerge("text-xl mb-4")}>{item.title}</p> */}
            <div className="mb-6">{item.description}</div>
            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    // title: "Un Espace Dédié à Votre Récupération et Votre Mobilité :",
    description: (
      <>
        <p className="mb-4">
          Le cabinet est né d&quot;une volonté d&quot;offrir des soins
          personnalisés et de qualité, axés sur la récupération et
          l&quot;amélioration durable de la mobilité. Composé de
          kinésithérapeutes hautement qualifiés et cumulant plusieurs années
          d&quot;expérience, le cabinet garantit des traitements adaptés aux
          besoins spécifiques de chaque patient.
        </p>
        {/* <p className="mb-6">
          Découvrez notre histoire, nos valeurs et la mission qui guide notre
          approche au quotidien.
        </p>
        <button className="px-6 mb-8 py-3 border bg-[#58B195] text-white rounded-xl font-bold transform hover:-translate-y-1 transition text-sm duration-400">
          Prendre Rendez-Vous
        </button> */}
      </>
    ),
    badge: "Origine",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    // title: "Au Cabinet Racines",
    description: (
      <>
        <p>
          nous accordons une importance primordiale à l&quot;écoute, aux valeurs
          humaines et au respect des besoins spécifiques de chaque patient.
          Chaque personne bénéficie d&quot;un suivi personnalisé et d&quot;une
          attention particulière, afin de garantir un rétablissement optimal.
        </p>
      </>
    ),
    badge: "Au Cabinet Racines",
    image:
      "https://images.unsplash.com/photo-1580281780460-82d277b0e3f8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Philosophie",
    description: (
      <>
        <p>
          nous adoptons une approche globale et personnalisée, où chaque patient
          est au centre de notre démarche. Chaque étape de la guérison, de la
          prise de rendez-vous à l&quot;élaboration du programme de fin de
          traitement, est considérée comme essentielle pour assurer une guérison
          complète et durable. Nous croyons que la réussite du projet de chaque
          patient repose sur une attention minutieuse à ses besoins,
        </p>
        <br />
        <p>
          un suivi constant et une communication ouverte. Notre philosophie
          repose sur un équilibre entre expertise médicale et bienveillance,
          afin d&quot;accompagner nos patients avec professionnalisme et
          humanité tout au long de leur parcours de soins.
        </p>
      </>
    ),
    badge: "Philosophie",
    image:
      "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=1383&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Notre objectif",
    description: (
      <>
        <p>
          est de répondre au besoin croissant de la patientèle marocaine en
          matière de soins de santé. Nous nous engageons à développer, maintenir
          et restaurer le mouvement et la fonction physique pour améliorer la
          qualité de vie de nos patients, qu&quot;il s&quot;agisse de
          rééducation après une blessure ou de gestion de douleurs chroniques.
        </p>
      </>
    ),
    badge: "Notre objectif",
    image:
      "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=1383&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
