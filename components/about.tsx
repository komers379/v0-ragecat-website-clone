import { Button } from "@/components/ui/button"

const memeCards = [
  { question: "DUMPS?", answer: "RAGE.", color: "from-red-600 to-orange-600" },
  { question: "CHARTS?", answer: "TRASH.", color: "from-purple-600 to-pink-600" },
  { question: "HOLD?", answer: "YES.", color: "from-amber-600 to-yellow-600" },
  { question: "MOON?", answer: "SOON.", color: "from-blue-600 to-cyan-600" },
]

export function About() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-card border border-border rounded-xl p-8 border-glow">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Text content */}
            <div className="lg:col-span-1">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                ABOUT <span className="text-primary">RAGECAT</span>
              </h2>
              <p className="text-muted-foreground mb-4">
                RageCat is a meme on Solana with one mission: rage-quit the dips,
                troll the market, and{" "}
                <span className="text-primary font-semibold">moon</span> with the
                community.
              </p>
              <p className="text-muted-foreground mb-4">
                We don&apos;t follow charts — we make chaos.
                <br />
                We don&apos;t panic — we laugh.
              </p>
              <p className="text-lg font-bold mb-6">Rage. Troll. Repeat.</p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                JOIN THE RAGE 🐱
              </Button>
            </div>

            {/* Meme cards grid */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {memeCards.map((card, index) => (
                <div
                  key={index}
                  className={`relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br ${card.color} p-1`}
                >
                  <div className="absolute inset-0 bg-card/90 m-1 rounded-lg flex flex-col items-center justify-center p-4">
                    <p className="text-lg md:text-xl text-muted-foreground font-bold">
                      {card.question}
                    </p>
                    <p className="text-3xl md:text-5xl font-black text-primary">
                      {card.answer}
                    </p>
                    <div className="mt-4 text-5xl md:text-6xl">
                      {index === 0 && "😤"}
                      {index === 1 && "🗑️"}
                      {index === 2 && "💎"}
                      {index === 3 && "🚀"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
