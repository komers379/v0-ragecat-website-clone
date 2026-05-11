"use client"

const tokenData = [
  { label: "PLATFORM", value: "PUMP.FUN", icon: "🚀" },
  { label: "NETWORK", value: "SOLANA", icon: "◎" },
  { label: "SUPPLY", value: "1,000,000,000", icon: "🐱" },
  { label: "TAX", value: "0/0", icon: "🔥" },
]

export function TokenInfo() {
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
