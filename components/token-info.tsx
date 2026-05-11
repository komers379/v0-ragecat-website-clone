"use client"

import { Copy, Check } from "lucide-react"
import { useState } from "react"

const tokenData = [
  { label: "CA", value: "PLACEHOLDER", icon: "📋", copyable: true },
  { label: "NETWORK", value: "SOLANA", icon: "◎", copyable: false },
  { label: "SUPPLY", value: "1,000,000,000", icon: "🐱", copyable: false },
  { label: "TAX", value: "0/0", icon: "🔥", copyable: false },
]

export function TokenInfo() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("PLACEHOLDER")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="bg-card border border-border rounded-xl p-4 border-glow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tokenData.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
              >
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    {item.label}
                  </p>
                  <p className="font-bold text-sm truncate">{item.value}</p>
                </div>
                {item.copyable && (
                  <button
                    onClick={handleCopy}
                    className="p-1.5 hover:bg-muted rounded transition-colors"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4 text-muted-foreground" />
                    )}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
