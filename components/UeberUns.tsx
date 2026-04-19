"use client"

import { AnimateOnScroll } from "./AnimateOnScroll"
import { Award, Heart, Leaf } from "lucide-react"

const usps = [
  {
    icon: Award,
    title: "Premium Produkte",
    desc: "Wir arbeiten ausschließlich mit hochwertigen Marken wie Kerastase, Olaplex und Schwarzkopf Professional.",
  },
  {
    icon: Heart,
    title: "Individuelle Beratung",
    desc: "Jeder Mensch ist einzigartig. Wir nehmen uns die Zeit, den perfekten Look für Sie zu entwickeln.",
  },
  {
    icon: Leaf,
    title: "Hamburger Herz",
    desc: "Seit 2018 verwurzelt in Altona – mit echtem Engagement für unsere Kunden und den Kiez.",
  },
]

export function UeberUns() {
  return (
    <section
      id="ueber-uns"
      style={{ background: "#0f0f0f", padding: "9rem 1.5rem" }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "5rem", alignItems: "center" }}>

          {/* Text */}
          <AnimateOnScroll>
            <p
              className="text-xs font-semibold tracking-[0.15em] uppercase"
              style={{ color: "#C9A86C", marginBottom: "1.25rem" }}
            >
              Über uns
            </p>
            <h2
              className="font-light"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.15,
                marginBottom: "1.75rem",
              }}
            >
              Mehr als ein Friseur –<br />
              <span className="italic" style={{ color: "#C9A86C" }}>ein Ort zum Wohlfühlen.</span>
            </h2>

            {/* Divider */}
            <div style={{ width: "32px", height: "1px", background: "rgba(201,168,108,0.35)", marginBottom: "1.75rem" }} />

            <p
              className="leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.05rem", marginBottom: "1.25rem" }}
            >
              HAARHAFEN wurde 2018 von Lena Brandt mitten in Hamburg-Altona gegründet –
              nur wenige Gehminuten von der Elbe entfernt. Was als kleines Zwei-Personen-Studio
              begann, ist heute ein angesagter Salon mit einem eingespielten Team aus vier
              leidenschaftlichen Stylisten.
            </p>
            <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.05rem" }}>
              Unser Anspruch: Jeder Kunde verlässt uns mit einem Lächeln und einem Look,
              der wirklich zu ihm passt. Kein Schema F – sondern echte Handwerkskunst
              mit Hamburger Direktheit und Herzlichkeit.
            </p>
          </AnimateOnScroll>

          {/* USP Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {usps.map((u, i) => (
              <AnimateOnScroll key={u.title} delay={i * 100}>
                <div
                  className="flex transition-all duration-300"
                  style={{
                    gap: "1.25rem",
                    padding: "1.5rem",
                    borderRadius: "1rem",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "rgba(201,168,108,0.25)"
                    e.currentTarget.style.background = "rgba(201,168,108,0.05)"
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)"
                  }}
                >
                  <div
                    className="flex-shrink-0 flex items-center justify-center"
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "0.75rem",
                      background: "rgba(201,168,108,0.12)",
                      border: "1px solid rgba(201,168,108,0.25)",
                    }}
                  >
                    <u.icon size={16} style={{ color: "#C9A86C" }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ marginBottom: "0.35rem" }}>{u.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{u.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
