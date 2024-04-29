export default function Logo() {
  return (
    <svg
      aria-labelledby="estelle-logo-title-header"
      fill="none"
      role="img"
      viewBox="0 0 200 40"
      width="200"
      height="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="estelle-logo-title-header">
        Estelle Floral Logo
      </title>
      <!-- Leafy vines -->
      <path
        d="M10 20 C 15 25, 20 30, 25 35 L 30 40 L 35 35 C 40 30, 45 25, 50 20 L 55 15 L 50 10 C 45 5, 40 0, 35 5 L 30 10 L 25 5 C 20 0, 15 5, 10 10 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M60 20 C 65 25, 70 30, 75 35 L 80 40 L 85 35 C 90 30, 95 25, 100 20 L 105 15 L 100 10 C 95 5, 90 0, 85 5 L 80 10 L 75 5 C 70 0, 65 5, 60 10 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
      />
      <!-- Floral motifs -->
      <circle cx="120" cy="20" r="10" fill="currentColor" />
      <circle cx="140" cy="20" r="10" fill="currentColor" />
      <circle cx="160" cy="20" r="10" fill="currentColor" />
      <path
        d="M130 15 L 135 20 L 140 25 L 145 20 L 150 15 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M150 25 L 155 20 L 160 15 L 165 20 L 170 25 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
      />
      <!-- Text -->
      <text x="50" y="30" fontSize="24" fontFamily="Pacifico" fill="currentColor">
        Estelle
      </text>
    </svg>
  );
}
