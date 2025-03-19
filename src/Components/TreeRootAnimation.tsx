// components/RootsFromRightToLeft.js
export default function RootsFromRightToLeft() {
  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center">
      <svg
        viewBox="0 0 1000 500"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* 
          Each path starts at x=1000 (right side) and curves to x=0 (left side).
          You can adjust the control points (the C x,y coordinates) 
          to match your desired “root” shapes.
        */}

        {/* Root 1 (near the top) */}
        <path
          d="M1000 80 C 750 60, 500 120, 200 50 C 1 20, 10 10, 10 10"
          stroke="#118c89"
          strokeWidth="3"
          fill="none"
          className="stroke-grow-rtl"
          style={{
            strokeDasharray: 1200,
            strokeDashoffset: 1200,
            animationDelay: "0s",
          }}
        />

        {/* Root 2 (slightly below root 1) */}
        <path
          d="M1000 120 C 800 140, 600 90, 300 140 C 150 180, 50 160, 0 180"
          stroke="#118c89"
          strokeWidth="3"
          fill="none"
          className="stroke-grow-rtl"
          style={{
            strokeDasharray: 1200,
            strokeDashoffset: 1200,
            animationDelay: "0.5s",
          }}
        />

        {/* Root 3 (middle area, arcs up then down) */}
        <path
          d="M1000 200 C 850 250, 500 180, 300 220 C 150 240, 80 200, 0 230"
          stroke="#118c89"
          strokeWidth="3"
          fill="none"
          className="stroke-grow-rtl"
          style={{
            strokeDasharray: 1200,
            strokeDashoffset: 1200,
            animationDelay: "1s",
          }}
        />

        {/* Root 4 (lower middle, arcs downward) */}
        <path
          d="M1000 300 C 700 350, 500 280, 250 310 C 150 330, 50 340, 0 350"
          stroke="#118c89"
          strokeWidth="3"
          fill="none"
          className="stroke-grow-rtl"
          style={{
            strokeDasharray: 1200,
            strokeDashoffset: 1200,
            animationDelay: "1.5s",
          }}
        />

        {/* Root 5 (near the bottom) */}
        <path
          d="M1000 400 C 800 420, 600 450, 400 420 C 250 400, 80 410, 0 430"
          stroke="#000000"
          strokeWidth="3"
          fill="none"
          className="stroke-grow-rtl"
          style={{
            strokeDasharray: 1200,
            strokeDashoffset: 1200,
            animationDelay: "2s",
          }}
        />
      </svg>
    </div>
  );
}
