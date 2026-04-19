"use client"

import { Scissors } from "lucide-react"

export function Footer() {
  return (
    <footer
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(201,168,108,0.1)",
        padding: "3rem 1.5rem",
      }}
    >
      <div
        className="flex flex-col md:flex-row items-center justify-between"
        style={{ maxWidth: "72rem", margin: "0 auto", gap: "1.5rem" }}
      >

        {/* Logo */}
        <div className="flex items-center" style={{ gap: "0.65rem" }}>
          <div
            className="flex items-center justify-center"
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              background: "rgba(201,168,108,0.12)",
              border: "1px solid rgba(201,168,108,0.28)",
            }}
          >
            <Scissors size={12} style={{ color: "#C9A86C" }} strokeWidth={1.5} />
          </div>
          <span
            className="font-bold tracking-[0.2em] uppercase"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            HAARHAFEN
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center" style={{ gap: "2rem" }}>
          {["Impressum", "Datenschutz", "AGB"].map(link => (
            <a
              key={link}
              href="#"
              style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.color = "#C9A86C" }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.3)" }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)" }}>
          © 2025 HAARHAFEN Hamburg
        </p>

      </div>
    </footer>
  )
}
