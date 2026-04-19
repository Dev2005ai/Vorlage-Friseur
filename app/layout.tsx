import type { Metadata } from "next"
import { DM_Sans, Cormorant_Garamond } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "HAARHAFEN – Friseur & Studio Hamburg",
  description:
    "Premium-Friseur in Hamburg-Altona. Individuelle Haarschnitte, Colorationen, Balayage und mehr. Termin online buchen.",
  keywords: ["Friseur Hamburg", "Haarschnitt Altona", "Balayage Hamburg", "Friseur Altona", "HAARHAFEN"],
  openGraph: {
    title: "HAARHAFEN – Friseur & Studio Hamburg",
    description: "Premium-Friseur in Hamburg-Altona. Buchen Sie jetzt Ihren Termin.",
    locale: "de_DE",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  )
}
