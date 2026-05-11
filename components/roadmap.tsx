const roadmapItems = [
  {
    phase: 1,
    title: "LAUNCH",
    description: "Token launch on Solana",
  },
  {
    phase: 2,
    title: "BUILD COMMUNITY",
    description: "Grow the most chaotic cat army",
  },
  {
    phase: 3,
    title: "CEX LISTINGS",
    description: "More eyes. More rage.",
  },
  {
    phase: 4,
    title: "TAKE OVER",
    description: "Troll the market. Moon together.",
  },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="h-full">
      <div className="bg-card border border-border rounded-xl p-6 h-full border-glow">
        <h2 className="text-3xl md:text-4xl font-black mb-8">ROADMAP</h2>

        <div className="space-y-6">
          {roadmapItems.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Phase number */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center font-black text-primary-foreground">
                {item.phase}
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>

              {/* Connector line */}
              {index < roadmapItems.length - 1 && (
                <div className="absolute left-5 top-10 w-0.5 h-12 bg-primary/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
