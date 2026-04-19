import { AnimateOnScroll } from "./AnimateOnScroll"

const bewertungen = [
  {
    name: "Jana M.",
    datum: "März 2025",
    text: "Absolut begeistert! Lena hat genau verstanden, was ich wollte – das Ergebnis hat all meine Erwartungen übertroffen. Der Salon hat eine tolle Atmosphäre und das Team ist super freundlich.",
  },
  {
    name: "Thomas K.",
    datum: "Februar 2025",
    text: "Bester Herrenschnitt in Hamburg, ohne Frage. Jan nimmt sich wirklich Zeit und erklärt alles. Werde auf keinen Fall mehr woanders hingehen!",
  },
  {
    name: "Sarah L.",
    datum: "Januar 2025",
    text: "Das Balayage von Marco ist einfach der Hammer. Habe endlich die natürlichen Highlights bekommen, von denen ich jahrelang geträumt habe. Danke HAARHAFEN!",
  },
  {
    name: "Patrick R.",
    datum: "Dezember 2024",
    text: "Toller Laden, entspannte Atmosphäre und wirklich kompetente Stylisten. Die Beratung war kostenlos und ohne Druck – so muss das sein.",
  },
]

function Stars() {
  return (
    <div className="flex" style={{ gap: "2px" }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#C9A86C">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  )
}

export function Bewertungen() {
  return (
    <section style={{ background: "#0a0a0a", padding: "9rem 1.5rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <p
              className="text-xs font-semibold tracking-[0.15em] uppercase"
              style={{ color: "#C9A86C", marginBottom: "1rem" }}
            >
              Bewertungen
            </p>
            <h2
              className="font-light"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Was unsere Kunden sagen
            </h2>
            <div className="flex items-center justify-center" style={{ gap: "0.6rem" }}>
              <Stars />
              <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)" }}>
                <span style={{ color: "#fff", fontWeight: 600 }}>4.9</span>
                {" "}· 127 Bewertungen auf Google
              </span>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2"
          style={{ gap: "1.5rem" }}
        >
          {bewertungen.map((b, i) => (
            <AnimateOnScroll key={b.name} delay={i * 80}>
              <div
                style={{
                  padding: "2rem",
                  borderRadius: "1rem",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  height: "100%",
                }}
              >
                <Stars />
                <p
                  className="leading-relaxed"
                  style={{
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.62)",
                    marginTop: "1.1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  &ldquo;{b.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold" style={{ fontSize: "0.875rem" }}>{b.name}</p>
                  <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>{b.datum}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  )
}
