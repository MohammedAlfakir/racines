import { AnimatedTestimonials } from "@/Components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "TPersonnel extrêmement compétent et sympathique. Prise en charge et suivi adapté à mes problèmes d'épaules. Véritable soin apporté à expliquer et corriger les habitudes quotidiennes qui conduisent à avoir mal. Matériel et technique de soin de grande qualité. Je conseille, sans aucune réserve",
      name: "Khadija TOURABI",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1584746591606-bd7cfe4e4caa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Ce cabinet est un trésor caché à Sala Al Jadida. Un havre de paix où chaque séance est un moment de détente et de soulagement. Mme Hajar est une véritable perle, son professionnalisme, sa douceur et son écoute font toute la différence. On ressort toujours de chez elle avec un réel bien-être. Une kiné exceptionnelle que je recommande sans hésiter !",
      name: "Wafae IDOUMJOUD",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1623887669121-5d4081c7bec1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Une équipe très professionnelle et toujours à l'écoute. Merci beaucoup pour le travail que vous faites. Je vous souhaite une bonne continuation",
      name: "Mohammed ZAHAR",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1712215544003-af10130f8eb3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      {/* Your existing testimonials component */}
      <AnimatedTestimonials testimonials={testimonials} />
    </>
  );
}
