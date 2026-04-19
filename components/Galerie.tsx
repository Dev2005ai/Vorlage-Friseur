"use client"

import { AnimateOnScroll } from "./AnimateOnScroll"
import { useState } from "react"

const galerie = [
  { label: "Balayage & Beach Waves", gradient: "linear-gradient(135deg, #2c1a08 0%, #5c3614 50%, #1a0e04 100%)", tall: true },
  { label: "Bob Precision Cut",       gradient: "linear-gradient(135deg, #08101e 0%, #102040 50%, #040c18 100%)", tall: true },
  { label: "Copper Coloring",         gradient: "linear-gradient(135deg, #2e1008 0%, #6b2808 50%, #1c0804 100%)", tall: false },
  { label: "Classic Mens Cut",        gradient: "linear-gradient(135deg, #0e0e14 0%, #1e1e30 50%, #080810 100%)", tall: false },
  { label: "Bridal Updo",             gradient: "linear-gradient(135deg, #1a1610 0%, #3a2e1c 50%, #100e08 100%)", tall: false },
  { label: "Platinum Blonde",         gradient: "linear-gradient(135deg, #1a1a20 0%, #32323c 50%, #0e0e12 100%)", tall: false },
]

function GalerieItem({ item }: { item: typeof galerie[0] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="relative rounded-xl overflow-hidden cursor-pointer"
      style={{
        background: item.gradient,
        gridRow: item.tall ? "span 2" : "span 1",
        transition: "transform 0.3s ease",
        transform: hovered ? "scale(1.01)" : "scale(1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex items-end"
        style={{
          padding: "1.25rem",
          background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <p className="font-medium text-sm" style={{ color: "#C9A86C" }}>{item.label}</p>
      </div>

      {/* Mobile label always visible */}
      <div
        className="absolute inset-0 flex items-end md:hidden"
        style={{
          padding: "1rem",
          background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)",
        }}
      >
        <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.7)" }}>{item.label}</p>
      </div>

      {/* Gold dot */}
      <div
        className="absolute top-3 right-3 rounded-full"
        style={{ width: "6px", height: "6px", background: "#C9A86C", opacity: 0.55 }}
      />
    </div>
  )
}

export function Galerie() {
  return (
    <section id="galerie" style={{ background: "#0f0f0f", padding: "9rem 1.5rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <p
              className="text-xs font-semibold tracking-[0.15em] uppercase"
              style={{ color: "#C9A86C", marginBottom: "1rem" }}
            >
              Galerie
            </p>
            <h2
              className="font-light"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.15,
              }}
            >
              Unsere Arbeit spricht für sich
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Mosaic grid */}
        <AnimateOnScroll>
          <div
            className="grid grid-cols-2 md:grid-cols-3"
            style={{ gap: "0.75rem", gridAutoRows: "200px" }}
          >
            {galerie.map(item => (
              <GalerieItem key={item.label} item={item} />
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={150}>
          <p className="text-center text-sm" style={{ color: "rgba(255,255,255,0.28)", marginTop: "2rem" }}>
            Echte Fotos folgen · Alle Arbeiten von unserem Team
          </p>
        </AnimateOnScroll>

      </div>
    </section>
  )
}
