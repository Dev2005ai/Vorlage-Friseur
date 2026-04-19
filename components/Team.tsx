"use client"

import { AnimateOnScroll } from "./AnimateOnScroll"
import { Scissors, Palette, Sparkles, User } from "lucide-react"

const team = [
  {
    name: "Lena Brandt",
    role: "Inhaberin & Color Expertin",
    spec: "Colorationen, Balayage, Beratung",
    years: "12 Jahre Erfahrung",
    icon: Palette,
    gradient: "linear-gradient(160deg, #1c1308 0%, #3d2b0e 55%, #1a1006 100%)",
  },
  {
    name: "Marco Stein",
    role: "Senior Stylist",
    spec: "Balayage, Schnitt-Architektur, Herrenschnitt",
    years: "9 Jahre Erfahrung",
    icon: Scissors,
    gradient: "linear-gradient(160deg, #0c1818 0%, #0e2e2a 55%, #071412 100%)",
  },
  {
    name: "Nina Weber",
    role: "Junior Stylistin",
    spec: "Extensions, Styling, Brautfrisuren",
    years: "4 Jahre Erfahrung",
    icon: Sparkles,
    gradient: "linear-gradient(160deg, #1a0c18 0%, #2e0e28 55%, #160812 100%)",
  },
  {
    name: "Jan Hoffmann",
    role: "Barbier & Herrenspezialist",
    spec: "Herrenschnitt, Bartpflege, Hot Towel Rasur",
    years: "7 Jahre Erfahrung",
    icon: User,
    gradient: "linear-gradient(160deg, #0c1220 0%, #111828 55%, #080e18 100%)",
  },
]

export function Team() {
  return (
    <section id="team" style={{ background: "#0a0a0a", padding: "9rem 1.5rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <p
              className="text-xs font-semibold tracking-[0.15em] uppercase"
              style={{ color: "#C9A86C", marginBottom: "1rem" }}
            >
              Unser Team
            </p>
            <h2
              className="font-light"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.15,
              }}
            >
              Vier Köpfe. Eine Leidenschaft.
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Team grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: "1.5rem" }}
        >
          {team.map((member, i) => (
            <AnimateOnScroll key={member.name} delay={i * 80}>
              <div
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.07)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(201,168,108,0.3)" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)" }}
              >
                {/* Photo placeholder */}
                <div className="relative w-full" style={{ height: "260px", background: member.gradient }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="flex items-center justify-center"
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "50%",
                        background: "rgba(201,168,108,0.15)",
                        border: "1px solid rgba(201,168,108,0.3)",
                      }}
                    >
                      <member.icon size={22} style={{ color: "#C9A86C" }} strokeWidth={1.2} />
                    </div>
                  </div>
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 55%)" }}
                  />
                </div>

                {/* Info */}
                <div style={{ padding: "1.5rem", background: "rgba(255,255,255,0.02)" }}>
                  <p className="font-semibold" style={{ fontSize: "0.9rem", marginBottom: "0.25rem" }}>{member.name}</p>
                  <p style={{ fontSize: "0.75rem", color: "#C9A86C", marginBottom: "0.65rem" }}>{member.role}</p>
                  <p
                    className="leading-relaxed"
                    style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", marginBottom: "0.85rem" }}
                  >
                    {member.spec}
                  </p>
                  <p
                    className="font-medium tracking-[0.08em] uppercase"
                    style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.22)" }}
                  >
                    {member.years}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  )
}
