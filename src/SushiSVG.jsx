export function SushiSVG() {
  return (
    <svg width="160" height="140" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Rice base shadow */}
      <ellipse cx="80" cy="102" rx="62" ry="22" fill="#f8f3e8"/>
      {/* Rice base */}
      <ellipse cx="80" cy="98" rx="62" ry="22" fill="url(#riceGrad)"/>
      {/* Rice texture dots */}
      {[40,55,68,80,93,106,118].map((x,i) => (
        <ellipse key={`rt1-${i}`} cx={x} cy={95 + (i%2)*5} rx="3" ry="2" fill="#ede4cc" opacity="0.7"/>
      ))}
      {[50,65,78,90,105].map((x,i) => (
        <ellipse key={`rt2-${i}`} cx={x} cy={103 + (i%2)*3} rx="2.5" ry="1.5" fill="#ede4cc" opacity="0.5"/>
      ))}
      {/* Nori band */}
      <rect x="22" y="88" width="116" height="14" rx="4" fill="#2d3a2e" opacity="0.85"/>
      <rect x="22" y="88" width="116" height="3" rx="2" fill="#3d4e3e" opacity="0.5"/>
      {/* Salmon body */}
      <ellipse cx="80" cy="72" rx="58" ry="24" fill="url(#salmonGrad)"/>
      <ellipse cx="80" cy="68" rx="56" ry="22" fill="url(#salmonTop)"/>
      {/* Salmon fat marbling */}
      <path d="M 38 70 Q 55 62 72 68 Q 88 74 105 66 Q 120 60 138 68" stroke="#f5c4a0" strokeWidth="3" fill="none" opacity="0.6" strokeLinecap="round"/>
      <path d="M 44 78 Q 60 72 76 76 Q 92 80 110 74" stroke="#f5c4a0" strokeWidth="2" fill="none" opacity="0.4" strokeLinecap="round"/>
      {/* Salmon sheen */}
      <ellipse cx="66" cy="62" rx="22" ry="8" fill="white" opacity="0.2"/>
      <ellipse cx="60" cy="60" rx="10" ry="4" fill="white" opacity="0.25"/>
      {/* Wasabi dot */}
      <ellipse cx="80" cy="88" rx="12" ry="4" fill="#8aba7a" opacity="0.7"/>
      <defs>
        <linearGradient id="riceGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fdfaf2"/>
          <stop offset="100%" stopColor="#f0e8d4"/>
        </linearGradient>
        <linearGradient id="salmonGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f4a07a"/>
          <stop offset="50%" stopColor="#e8855a"/>
          <stop offset="100%" stopColor="#d4704a"/>
        </linearGradient>
        <linearGradient id="salmonTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f8b08a"/>
          <stop offset="100%" stopColor="#e47c58"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
