import { HoverEffect } from "@/Components/ui/card-hover-effect";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Rééducation Fonctionnelle",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    popUpDescription:
      "La rééducation fonctionnelle est un ensemble de techniques utilisées pour rétablir les capacités physiques d'un patient après une blessure, une opération ou une maladie. Elle vise à améliorer la force musculaire, la mobilité articulaire et l’équilibre, tout en rééduquant les gestes du quotidien, afin de permettre une reprise d’activité normale et sans douleur.",
  },
  {
    title: "Thérapie Manuelle",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    popUpDescription:
      "La thérapie manuelle consiste en l'utilisation de techniques spécifiques de manipulation des articulations, muscles et tissus mous, afin de réduire la douleur, améliorer la mobilité et restaurer la fonction. Cela peut inclure des manipulations, des mobilisations et des étirements pour traiter diverses pathologies musculosquelettiques.",
  },
  {
    title: "Kinésithérapie Respiratoire",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    popUpDescription:
      "La kinésithérapie respiratoire est une spécialité qui vise à traiter les affections respiratoires en utilisant des techniques de désencombrement des voies respiratoires et d'amélioration de la ventilation pulmonaire. Elle est particulièrement bénéfique pour les patients atteints de maladies respiratoires chroniques, d’asthme, de bronchiolites chez les enfants, ou encore lors de la rééducation post-chirurgicale.",
  },
  {
    title: "Réadaptation Cardiorespiratoire",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    popUpDescription:
      "La réadaptation cardiorespiratoire s'adresse aux patients ayant souffert de maladies cardiaques ou respiratoires graves. Elle comprend un programme de rééducation physique personnalisé qui vise à améliorer l’endurance cardiovasculaire, renforcer la fonction cardiaque et respiratoire, tout en minimisant les risques futurs d’aggravation de ces maladies.",
  },
  {
    title: "Activité physique adaptée",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    popUpDescription:
      "La rééducation fonctionnelle est une méthode de rééducation qui vise à rétablir les fonctions motrices et sensorielles du corps. Elle est utilisée pour traiter les troubles musculaires, les douleurs articulaires, les problèmes de coordination et les troubles de la mobilité. La rééducation fonctionnelle est souvent utilisée pour traiter les personnes qui ont subi un accident vasculaire cérébral, une blessure à la moelle épinière, une fracture ou une chirurgie. Elle est également utilisée pour traiter les personnes qui ont des problèmes de mobilité dus à des maladies comme la sclérose en plaques, la maladie de Parkinson ou la dystrophie musculaire.",
  },
  {
    title: "Drainage lymphatique",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    popUpDescription:
      "La rééducation fonctionnelle est une méthode de rééducation qui vise à rétablir les fonctions motrices et sensorielles du corps. Elle est utilisée pour traiter les troubles musculaires, les douleurs articulaires, les problèmes de coordination et les troubles de la mobilité. La rééducation fonctionnelle est souvent utilisée pour traiter les personnes qui ont subi un accident vasculaire cérébral, une blessure à la moelle épinière, une fracture ou une chirurgie. Elle est également utilisée pour traiter les personnes qui ont des problèmes de mobilité dus à des maladies comme la sclérose en plaques, la maladie de Parkinson ou la dystrophie musculaire.",
  },
];
