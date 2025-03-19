"use client";
import { motion } from "framer-motion";

// Tree Roots Decorative Components
// Place this file in: components/decorations/roots.js

// 1. Side Roots - for page edges
export function SideRoots({
  position = "left",
  color = "#003c2a",
  height = "md",
  opacity = 0.2,
}) {
  // Convert position to CSS classes
  const positionClasses = {
    left: "left-0 bottom-0",
    right: "right-0 bottom-0",
  };

  // Convert height to actual size
  const heightClasses = {
    sm: "h-40",
    md: "h-80",
    lg: "h-120",
  };

  // Determine which paths to show based on position
  const isLeft = position === "left";

  return (
    <div
      className={`absolute ${positionClasses[position]} ${heightClasses[height]} pointer-events-none`}
      style={{ opacity }}
    >
      <svg
        className="h-full"
        viewBox="0 0 200 400"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={
            isLeft
              ? "M20,0 Q30,50 10,100 Q0,150 20,200 Q30,250 10,300 Q0,350 20,400"
              : "M180,0 Q170,50 190,100 Q200,150 180,200 Q170,250 190,300 Q200,350 180,400"
          }
          stroke={color}
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d={
            isLeft
              ? "M20,0 Q40,40 30,80 Q20,120 35,160 Q50,200 40,240 Q30,280 45,320 Q60,360 50,400"
              : "M180,0 Q160,40 170,80 Q180,120 165,160 Q150,200 160,240 Q170,280 155,320 Q140,360 150,400"
          }
          stroke={color}
          strokeWidth="0.8"
          fill="none"
        />

        {/* Smaller branch-like roots */}
        <path
          d={isLeft ? "M20,80 Q40,85 50,75" : "M180,80 Q160,85 150,75"}
          stroke={color}
          strokeWidth="0.6"
          fill="none"
        />
        <path
          d={isLeft ? "M10,160 Q20,170 30,165" : "M190,160 Q170,170 160,165"}
          stroke={color}
          strokeWidth="0.6"
          fill="none"
        />
        <path
          d={isLeft ? "M20,240 Q30,260 40,250" : "M180,240 Q160,260 150,250"}
          stroke={color}
          strokeWidth="0.6"
          fill="none"
        />
        <path
          d={isLeft ? "M35,320 Q50,325 60,315" : "M155,320 Q140,325 130,315"}
          stroke={color}
          strokeWidth="0.6"
          fill="none"
        />
      </svg>
    </div>
  );
}

// 2. Bottom Roots - horizontal roots across the bottom
export function BottomRoots({ height = "sm", opacity = 0.3 }) {
  // Convert height to actual size
  const heightClasses = {
    xs: "h-12",
    sm: "h-24",
    md: "h-32",
    lg: "h-40",
  };

  return (
    <div
      className={`absolute bottom-0 left-0 w-full ${heightClasses[height]} pointer-events-none`}
      style={{ opacity }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,100 C150,90 300,95 450,90 C600,85 750,80 900,90 C950,95 975,97 1000,95"
          stroke="#003c2a"
          strokeWidth="0.8"
          fill="none"
        />
        <path
          d="M0,90 C100,95 200,85 300,95 C400,105 500,90 600,85 C700,80 800,90 900,95 C950,97 975,92 1000,90"
          stroke="#58B195"
          strokeWidth="0.6"
          fill="none"
        />

        {/* Small root tendrils */}
        {[100, 250, 400, 550, 700, 850].map((x, i) => (
          <path
            key={i}
            d={`M${x},95 Q${x + 10},85 ${x + 20},90`}
            stroke={i % 2 === 0 ? "#003c2a" : "#58B195"}
            strokeWidth="0.5"
            fill="none"
          />
        ))}
      </svg>
    </div>
  );
}

// 3. Roots Divider - for section separations
export function RootsDivider({ position = "bottom", opacity = 0.25 }) {
  const positionClasses = {
    bottom: "bottom-0 left-0 rotate-0",
    top: "top-0 left-0 rotate-180",
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} w-full h-10 pointer-events-none`}
      style={{ opacity }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 20"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,20 C50,15 70,10 100,15 C130,20 150,15 180,10 C210,5 230,15 260,20 C290,18 310,12 340,15 C370,18 390,20 420,15 C450,10 470,5 500,10 C530,15 550,20 580,15 C610,10 630,5 660,10 C690,15 710,18 740,15 C770,12 790,18 820,20 C850,15 870,10 900,15 C930,20 950,10 980,5 C990,8 995,12 1000,15"
          stroke="#003c2a"
          strokeWidth="0.7"
          fill="none"
        />
        <path
          d="M0,10 C50,15 70,20 100,15 C130,10 150,15 180,20 C210,15 230,10 260,5 C290,8 310,15 340,10 C370,5 390,10 420,15 C450,20 470,15 500,10 C530,5 550,10 580,15 C610,20 630,15 660,10 C690,5 710,10 740,15 C770,10 790,5 820,8 C850,12 870,15 900,10 C930,5 950,15 980,20 C990,15 995,10 1000,5"
          stroke="#58B195"
          strokeWidth="0.5"
          fill="none"
        />
      </svg>
    </div>
  );
}

// 4. Corner Roots - for corners of sections or cards
export function CornerRoots({
  position = "bottom-left",
  size = "md",
  opacity = 0.2,
}) {
  // Convert position to CSS classes
  const positionClasses = {
    "bottom-left": "bottom-0 left-0 rotate-0",
    "bottom-right": "bottom-0 right-0 rotate-90",
    "top-left": "top-0 left-0 -rotate-90",
    "top-right": "top-0 right-0 rotate-180",
  };

  // Convert size to width/height
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} pointer-events-none`}
      style={{ opacity }}
    >
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,100 C10,80 5,60 15,50 C25,40 15,20 0,0"
          stroke="#003c2a"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M30,100 C35,70 25,50 40,40 C55,30 45,15 30,0"
          stroke="#58B195"
          strokeWidth="0.8"
          fill="none"
        />
        <path
          d="M15,50 C25,55 30,45 25,40"
          stroke="#003c2a"
          strokeWidth="0.6"
          fill="none"
        />
        <path
          d="M40,40 C50,45 55,35 50,30"
          stroke="#58B195"
          strokeWidth="0.6"
          fill="none"
        />
      </svg>
    </div>
  );
}

// 5. Navbar Roots - subtle root decoration for navbar
export function NavbarRoots({ opacity = 0.3 }) {
  return (
    <div
      className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none h-2"
      style={{ opacity }}
    >
      <svg
        className="w-full"
        viewBox="0 0 1000 10"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,5 C50,2 70,8 100,5 C130,2 150,8 180,5 C210,2 230,8 260,5 C290,2 310,8 340,5 C370,2 390,8 420,5 C450,2 470,8 500,5 C530,2 550,8 580,5 C610,2 630,8 660,5 C690,2 710,8 740,5 C770,2 790,8 820,5 C850,2 870,8 900,5 C930,2 950,8 980,5 C990,4 995,6 1000,5"
          stroke="#003c2a"
          strokeWidth="0.7"
          fill="none"
        />
      </svg>
    </div>
  );
}

// 6. Animated Root Growth - subtle animation for special sections
export function AnimatedRoots({ position = "bottom", opacity = 0.2 }) {
  const positionClasses = {
    bottom: "bottom-0 left-0",
    left: "left-0 bottom-1/4 -rotate-90 origin-bottom-left",
    right: "right-0 bottom-1/4 rotate-90 origin-bottom-right",
  };

  // Path animation variants
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: opacity,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} w-full h-40 pointer-events-none`}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0,100 C150,90 300,95 450,90 C600,85 750,80 900,90 C950,95 975,97 1000,95"
          stroke="#003c2a"
          strokeWidth="0.8"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        />
        <motion.path
          d="M0,90 C100,95 200,85 300,95 C400,105 500,90 600,85 C700,80 800,90 900,95 C950,97 975,92 1000,90"
          stroke="#58B195"
          strokeWidth="0.6"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3 }}
        />

        {/* Small root tendrils */}
        {[100, 250, 400, 550, 700, 850].map((x, i) => (
          <motion.path
            key={i}
            d={`M${x},95 Q${x + 10},85 ${x + 20},90`}
            stroke={i % 2 === 0 ? "#003c2a" : "#58B195"}
            strokeWidth="0.5"
            fill="none"
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 + i * 0.1 }}
          />
        ))}
      </svg>
    </div>
  );
}
