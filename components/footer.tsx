"use client"

import Link from "next/link"

const socialLinks = [
  {
    name: "X (Twitter)",
    href: "https://x.com/AndyBones91",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Pump.fun",
    href: "https://pump.fun",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "RageCat",
    href: "#",
    icon: <span className="text-2xl">😼</span>,
  },
  {
    name: "DexScreener",
    href: "https://dexscreener.com",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="py-12 relative overflow-hidden">
      {/* Fire gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-950/50 via-red-950/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Join the Army */}
        <div className="bg-card border border-border rounded-xl p-8 text-center border-glow max-w-xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-black mb-2">
            JOIN THE <span className="text-primary">ARMY</span>
          </h3>
          <p className="text-muted-foreground mb-6">Launched on Pump.fun - The home of meme coins</p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>© 2024 RageCat. All rights reserved.</p>
          <p className="mt-2">Rage. Troll. Moon.</p>
        </div>
      </div>
    </footer>
  )
}
