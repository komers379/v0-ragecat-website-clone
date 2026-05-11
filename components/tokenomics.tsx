"use client"

const tokenomicsData = [
  { label: "Liquidity", value: 40, color: "#22c55e", icon: "💧" },
  { label: "Marketing", value: 20, color: "#ef4444", icon: "📣" },
  { label: "Community", value: 20, color: "#3b82f6", icon: "👥" },
  { label: "CEX/DEX", value: 10, color: "#a855f7", icon: "🔄" },
  { label: "Team", value: 5, color: "#f59e0b", icon: "🐱" },
  { label: "Airdrop", value: 5, color: "#06b6d4", icon: "🎁" },
]

export function Tokenomics() {
  // Calculate cumulative angles for the donut chart
  let cumulativePercent = 0
  const segments = tokenomicsData.map((item) => {
    const startPercent = cumulativePercent
    cumulativePercent += item.value
    return {
      ...item,
      startPercent,
      endPercent: cumulativePercent,
    }
  })

  return (
    <section id="tokenomics" className="h-full">
      <div className="bg-card border border-border rounded-xl p-6 h-full border-glow">
        <h2 className="text-3xl md:text-4xl font-black mb-8">TOKENOMICS</h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Donut Chart */}
          <div className="relative w-48 h-48 flex-shrink-0">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              {segments.map((segment, index) => {
                const startAngle = (segment.startPercent / 100) * 360
                const endAngle = (segment.endPercent / 100) * 360
                const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0

                const startX =
                  50 + 40 * Math.cos((startAngle * Math.PI) / 180)
                const startY =
                  50 + 40 * Math.sin((startAngle * Math.PI) / 180)
                const endX = 50 + 40 * Math.cos((endAngle * Math.PI) / 180)
                const endY = 50 + 40 * Math.sin((endAngle * Math.PI) / 180)

                return (
                  <path
                    key={index}
                    d={`M 50 50 L ${startX} ${startY} A 40 40 0 ${largeArcFlag} 1 ${endX} ${endY} Z`}
                    fill={segment.color}
                    className="hover:opacity-80 transition-opacity cursor-pointer"
                  />
                )
              })}
              {/* Inner circle to create donut effect */}
              <circle cx="50" cy="50" r="25" fill="hsl(var(--card))" />
            </svg>
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 gap-3 flex-1">
            {tokenomicsData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-lg">{item.icon}</span>
                <div>
                  <p className="text-sm font-semibold">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.value}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
