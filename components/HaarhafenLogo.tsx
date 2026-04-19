export function HaarhafenLogo({ size = 38 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="HAARHAFEN Logo"
    >
      {/* Outer circle */}
      <circle cx="24" cy="24" r="21.5" stroke="#C9A86C" strokeWidth="0.75" fill="none" />

      {/* Scissors arm 1: upper-right tip → pivot → lower-left ring entry */}
      <line x1="33" y1="8" x2="17.2" y2="32.6" stroke="#C9A86C" strokeWidth="1.35" strokeLinecap="round" />

      {/* Scissors arm 2: upper-left tip → pivot → lower-right ring entry */}
      <line x1="15" y1="8" x2="30.8" y2="32.6" stroke="#C9A86C" strokeWidth="1.35" strokeLinecap="round" />

      {/* Handle ring 1 – lower-left */}
      <circle cx="15" cy="36" r="4" stroke="#C9A86C" strokeWidth="1.2" fill="none" />

      {/* Handle ring 2 – lower-right */}
      <circle cx="33" cy="36" r="4" stroke="#C9A86C" strokeWidth="1.2" fill="none" />

      {/* Pivot dot */}
      <circle cx="24" cy="22" r="1.6" fill="#C9A86C" />

      {/* Harbor wave – represents the Elbe/port */}
      <path
        d="M13 42 Q18.5 39.5 24 42 Q29.5 44.5 35 42"
        stroke="#C9A86C"
        strokeWidth="0.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
