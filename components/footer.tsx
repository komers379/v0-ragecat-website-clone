"use client"

import Link from "next/link"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

const socialLinks = [
  {
    name: "X (Twitter)",
    href: "https://x.com",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    href: "https://t.me",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
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
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("PLACEHOLDER")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="py-12 relative overflow-hidden">
      {/* Fire gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-950/50 via-red-950/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Join the Army */}
          <div className="bg-card border border-border rounded-xl p-8 text-center border-glow">
            <h3 className="text-3xl md:text-4xl font-black mb-6">
              JOIN THE <span className="text-primary">ARMY</span>
            </h3>
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

          {/* Contract Address */}
          <div className="bg-card border border-border rounded-xl p-8 border-glow">
            <div className="flex items-center gap-4">
              <div className="text-6xl">🐾</div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                  CONTRACT ADDRESS
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg">PLACEHOLDER</span>
                  <button
                    onClick={handleCopy}
                    className="p-2 hover:bg-muted rounded-lg border border-primary/50 transition-colors"
                    aria-label="Copy contract address"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4 text-primary" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>© 2024 RageCat. All rights reserved.</p>
          <p className="mt-2">Rage. Troll. Moon. 🐱🚀</p>
        </div>
      </div>
    </footer>
  )
}
