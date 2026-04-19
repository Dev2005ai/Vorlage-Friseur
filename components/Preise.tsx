import { AnimateOnScroll } from "./AnimateOnScroll"

const preise = [
  {
    kategorie: "Damen",
    items: [
      { name: "Schnitt & Styling",      preis: "ab 65 €" },
      { name: "Farbe komplett",         preis: "ab 95 €" },
      { name: "Balayage / Ombré",       preis: "ab 130 €" },
      { name: "Strähnen (komplett)",    preis: "ab 85 €" },
      { name: "Extensions",            preis: "ab 250 €" },
      { name: "Keratin-Behandlung",     preis: "ab 120 €" },
      { name: "Olaplex (Add-on)",       preis: "25 €" },
      { name: "Blow-Dry & Styling",     preis: "ab 45 €" },
    ],
  },
  {
    kategorie: "Herren",
    items: [
      { name: "Haarschnitt",           preis: "ab 38 €" },
      { name: "Schnitt & Bart-Trim",   preis: "ab 52 €" },
      { name: "Bart-Styling",          preis: "ab 22 €" },
      { name: "Hot Towel Rasur",       preis: "ab 35 €" },
      { name: "Haarpflege",            preis: "ab 30 €" },
      { name: "Color & Toning",        preis: "ab 45 €" },
    ],
  },
  {
    kategorie: "Specials",
    items: [
      { name: "Braut-Styling",          preis: "auf Anfrage" },
      { name: "Intensiv-Haarkur",       preis: "ab 45 €" },
      { name: "Event-Styling",          preis: "ab 55 €" },
      { name: "Kopfhaut-Analyse",       preis: "kostenlos" },
      { name: "Kinder-Schnitt (–12)",   preis: "ab 25 €" },
    ],
  },
]

export function Preise() {
  return (
    <section id="preise" style={{ background: "#0f0f0f", padding: "9rem 1.5rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <p
              className="text-xs font-semibold tracking-[0.15em] uppercase"
              style={{ color: "#C9A86C", marginBottom: "1rem" }}
            >
              Preisliste
            </p>
            <h2
              className="font-light"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.15,
                marginBottom: "0.75rem",
              }}
            >
              Transparente Preise
            </h2>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.38)" }}>
              Alle Preise inkl. MwSt. · Endpreis je nach Haarlänge und Aufwand
            </p>
          </div>
        </AnimateOnScroll>

        {/* Price tables – align-items: start so different lengths don't stretch */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "1.5rem", alignItems: "start" }}
        >
          {preise.map((cat, i) => (
            <AnimateOnScroll key={cat.kategorie} delay={i * 100}>
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.07)" }}
              >
                {/* Category header */}
                <div
                  style={{
                    padding: "1.1rem 1.5rem",
                    borderBottom: "1px solid rgba(201,168,108,0.18)",
                    background: "rgba(201,168,108,0.05)",
                  }}
                >
                  <h3
                    className="font-light"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.25rem",
                      color: "#C9A86C",
                    }}
                  >
                    {cat.kategorie}
                  </h3>
                </div>

                {/* Items */}
                <div style={{ padding: "0.5rem 1.5rem 1rem" }}>
                  {cat.items.map((item, j) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between"
                      style={{
                        padding: "0.75rem 0",
                        borderBottom: j < cat.items.length - 1
                          ? "1px solid rgba(255,255,255,0.05)"
                          : "none",
                        fontSize: "0.875rem",
                      }}
                    >
                      <span style={{ color: "rgba(255,255,255,0.65)" }}>{item.name}</span>
                      <span className="font-medium" style={{ color: "#C9A86C" }}>{item.preis}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Hinweis */}
        <AnimateOnScroll delay={200}>
          <p className="text-center" style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.28)", marginTop: "2.5rem" }}>
            Alle Preise sind Richtwerte. Ihr genaues Angebot erhalten Sie beim Beratungsgespräch im Salon.
          </p>
        </AnimateOnScroll>

      </div>
    </section>
  )
}
