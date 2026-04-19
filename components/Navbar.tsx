"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { HaarhafenLogo } from "./HaarhafenLogo"

const navLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Team", href: "#team" },
  { label: "Galerie", href: "#galerie" },
  { label: "Preise", href: "#preise" },
  { label: "Kontakt", href: "#kontakt" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false) }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  function smoothScroll(href: string) {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,108,0.12)" : "1px solid transparent",
        }}
      >
        <div
          className="flex items-center justify-between"
          style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem", height: "4.5rem" }}
        >
          {/* Logo + Wordmark */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center transition-opacity duration-200 hover:opacity-80"
            style={{ gap: "0.65rem", background: "none", border: "none", cursor: "pointer" }}
            aria-label="HAARHAFEN – zurück nach oben"
          >
            <HaarhafenLogo size={36} />
            <span
              style={{
                fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
                fontSize: "1.05rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                color: "#fff",
                textTransform: "uppercase",
              }}
            >
              HAARHAFEN
            </span>
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center" style={{ gap: "2rem" }}>
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => smoothScroll(l.href)}
                className="text-sm transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.5)", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#C9A86C")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center" style={{ gap: "0.75rem" }}>
            <button
              onClick={() => smoothScroll("#kontakt")}
              className="hidden md:flex items-center font-medium transition-all duration-200"
              style={{
                padding: "0.55rem 1.4rem",
                borderRadius: "9999px",
                border: "1px solid rgba(201,168,108,0.5)",
                color: "#C9A86C",
                background: "transparent",
                fontSize: "0.85rem",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#C9A86C"
                e.currentTarget.style.color = "#0a0a0a"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.color = "#C9A86C"
              }}
            >
              Termin buchen
            </button>

            <button
              className="md:hidden"
              style={{ color: "rgba(255,255,255,0.7)", background: "none", border: "none", cursor: "pointer", padding: "0.5rem" }}
              onClick={() => setMenuOpen(true)}
              aria-label="Menü öffnen"
              aria-expanded={menuOpen}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col" style={{ background: "#0a0a0a" }}>
          <div
            className="flex items-center justify-between"
            style={{ padding: "0 1.5rem", height: "4.5rem", borderBottom: "1px solid rgba(201,168,108,0.12)" }}
          >
            <div className="flex items-center" style={{ gap: "0.65rem" }}>
              <HaarhafenLogo size={30} />
              <span
                style={{
                  fontFamily: "var(--font-serif, serif)",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  color: "#C9A86C",
                  textTransform: "uppercase",
                }}
              >
                HAARHAFEN
              </span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              style={{ color: "rgba(255,255,255,0.6)", background: "none", border: "none", cursor: "pointer" }}
              aria-label="Menü schließen"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col flex-1" style={{ padding: "2rem 1.5rem 1.5rem" }}>
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => smoothScroll(l.href)}
                className="text-left transition-colors duration-200"
                style={{
                  padding: "1.1rem 0",
                  fontSize: "1.7rem",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: "var(--font-serif, serif)",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  background: "none",
                  cursor: "pointer",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                }}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => smoothScroll("#kontakt")}
              style={{
                marginTop: "2rem",
                width: "100%",
                padding: "1rem",
                borderRadius: "9999px",
                fontSize: "1rem",
                fontWeight: 500,
                background: "#C9A86C",
                color: "#0a0a0a",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              Termin buchen
            </button>
          </div>
        </div>
      )}
    </>
  )
}
