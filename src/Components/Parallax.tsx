"use client";
import React from "react";
import { HeroParallax } from "@/Components/ui/hero-parallax";

export default function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Rééducation Fonctionnelle",
    link: "/nostraitements",
    thumbnail:
      "https://images.unsplash.com/photo-1631248055158-edec7a3c072b?q=80&w=1461&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Restaurez force, équilibre et mobilité après une blessure, une opération ou une maladie. Nos techniques visent une reprise d’activité normale et sans douleur.",
  },
  {
    title: "Thérapie Manuelle",
    link: "/nostraitements",
    thumbnail:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Techniques de manipulation pour réduire la douleur, améliorer la mobilité et restaurer la fonction articulaire et musculaire.",
  },
  {
    title: "Kinésithérapie Respiratoire",
    link: "/nostraitements",
    thumbnail:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Spécialisée pour adultes et enfants, elle améliore la ventilation pulmonaire et aide à désencombrer les voies respiratoires.",
  },

  {
    title: "Réadaptation Cardiorespiratoire",
    link: "/nostraitements",
    thumbnail:
      "https://images.unsplash.com/photo-1606318313647-137d1f3b4d3c?q=80&w=1477&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Prise en charge pour retrouver la fonction cardiorespiratoire après des maladies ou chirurgies du cœur et des poumons.",
  },
  {
    title: "Activité Physique Adaptée",
    link: "/nostraitements",
    thumbnail:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Programme personnalisé avec des exercices sur-mesure pour traiter ou prévenir des maladies chroniques comme le diabète, l’ostéoporose ou l’arthrose.",
  },
  {
    title: "Drainage Lymphatique",
    link: "/nostraitements",
    thumbnail:
      "https://images.unsplash.com/photo-1612375689547-b5351e63050b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Technique manuelle ou mécanique, pour réduire les œdèmes et améliorer la circulation veineuse.",
  },

  {
    title: "Dry Needling",
    link: "/nostraitements",
    thumbnail:
      "https://images.unsplash.com/photo-1580281780460-82d277b0e3f8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Utilisation d&quot;aiguilles pour soulager les tensions musculaires et réduire les douleurs chroniques.",
  },
  {
    title: "Bandage et Strapping",
    link: "/nostraitements",
    thumbnail:
      "https://images.unsplash.com/photo-1629909614456-6b1c5c94cecc?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Stabilisation des articulations ou muscles pour prévenir les blessures et faciliter la récupération.",
  },
  {
    title: "Rééducation Périnéale",
    link: "/nostraitements",
    thumbnail:
      "https://images.unsplash.com/photo-1630226040750-d934f017f0e4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Prise en charge pré et post-partum pour renforcer le périnée et prévenir ou traiter les troubles urinaires.",
  },
  {
    title: "Cupping Thérapie",
    link: "/nostraitements",
    thumbnail:
      "https://images.unsplash.com/photo-1575886876783-ea3cbbc8204d?q=80&w=1434&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Pose de ventouses pour améliorer la circulation, réduire les douleurs et favoriser la récupération.",
  },
  {
    title: "Réadaptation Cardiorespiratoire",
    link: "/nostraitements",
    thumbnail:
      "https://images.unsplash.com/photo-1575886876783-ea3cbbc8204d?q=80&w=1434&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Prise en charge pour retrouver la fonction cardiorespiratoire après des maladies ou chirurgies du cœur et des poumons.",
  },

  {
    title: "Cupping Thérapie",
    link: "/nostraitements",
    thumbnail:
      "https://images.unsplash.com/photo-1581982231900-6a1a46b744c9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Pose de ventouses pour améliorer la circulation, réduire les douleurs et favoriser la récupération.",
  },
  {
    title: "Rééducation Périnéale et Préparation à l&quot;accouchement",
    link: "/nostraitements",
    thumbnail:
      "https://images.unsplash.com/photo-1602052577122-f73b9710adba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Prise en charge pré et post-partum pour renforcer le périnée et prévenir ou traiter les troubles urinaires.",
  },
  {
    title: "Bandage et Strapping",
    link: "/nostraitements",
    thumbnail:
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Stabilisation des articulations ou muscles pour prévenir les blessures et faciliter la récupération.",
  },
  {
    title: "Dry Needling",
    link: "/nostraitements",
    thumbnail:
      "https://images.unsplash.com/photo-1589554882513-691f8f071f72?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Utilisation d&quot;aiguilles pour soulager les tensions musculaires et réduire les douleurs chroniques.",
  },
];
