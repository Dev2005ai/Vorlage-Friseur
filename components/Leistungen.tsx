"use client"

import { AnimateOnScroll } from "./AnimateOnScroll"
import { Scissors, User, Sparkles } from "lucide-react"

const categories = [
  {
    icon: Scissors,
    title: "Damen",
    services: [
      "Schnitt & Styling",
      "Farbe komplett",
      "Balayage / Ombré",
      "Strähnen",
      "Extensions",
      "Keratin-Behandlung",
      "Olaplex (Add-on)",
      "Blow-Dry & Styling",
    ],
  },
  {
    icon: User,
    title: "Herren",
    services: [
      "Haarschnitt",
      "Schnitt & Bart-Trim",
      "Bart-Styling",
      "Hot Towel Rasur",
      "Haarpflege-Behandlung",
      "Color & Toning",
    ],
  },
  {
    icon: Sparkles,
    title: "Specials",
    services: [
      "Braut-Styling",
      "Intensiv-Haarkur",
      "Kopfhaut-Analyse",
      "Farb-Beratung",
      "Event-Styling",
      "Kinder-Schnitt (bis 12)",
    ],
  },
]

export function Leistungen() {
  return (
    <section id="leistungen" style={{ background: "#0a0a0a", padding: "9rem 1.5rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <p
              className="text-xs font-semibold tracking-[0.15em] uppercase"
              style={{ color: "#C9A86C", marginBottom: "1rem" }}
            >
              Leistungen
            </p>
            <h2
              className="font-light"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.15,
              }}
            >
              Alles für Ihr perfektes Haar
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Grid – items-stretch so all cards share equal height */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "1.5rem", alignItems: "stretch" }}
        >
          {categories.map((cat, i) => (
            <AnimateOnScroll key={cat.title} delay={i * 100} className="flex">
              <div
                className="flex flex-col w-full transition-all duration-300"
                style={{
                  padding: "2rem",
                  borderRadius: "1rem",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(201,168,108,0.3)"
                  e.currentTarget.style.background = "rgba(201,168,108,0.04)"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)"
                }}
              >
                {/* Icon + Title */}
                <div className="flex items-center" style={{ gap: "0.75rem", marginBottom: "1.75rem" }}>
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "0.75rem",
                      background: "rgba(201,168,108,0.12)",
                      border: "1px solid rgba(201,168,108,0.25)",
                      flexShrink: 0,
                    }}
                  >
                    <cat.icon size={16} style={{ color: "#C9A86C" }} strokeWidth={1.5} />
                  </div>
                  <h3
                    className="font-light"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.35rem",
                      color: "#fff",
                    }}
                  >
                    {cat.title}
                  </h3>
                </div>

                {/* Service list */}
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                  {cat.services.map((s) => (
                    <li
                      key={s}
                      className="flex items-center text-sm"
                      style={{ gap: "0.65rem", color: "rgba(255,255,255,0.6)" }}
                    >
                      <span
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: "#C9A86C",
                          flexShrink: 0,
                          opacity: 0.8,
                        }}
                      />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  )
}
