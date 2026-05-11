import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-16 flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/50 via-background to-background" />
      
      {/* Flame effect at top */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-orange-600/20 via-red-900/10 to-transparent" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              <span className="block">WE <span className="text-primary">RAGE.</span></span>
              <span className="block">WE <span className="text-primary">TROLL.</span></span>
              <span className="block">WE <span className="text-primary">MOON.</span></span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Cute cat. Rage mindset.<br />
              Trolling the market, flipping the charts.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold glow-orange"
              >
                BUY $RAGECAT 🐱
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-muted-foreground/50 hover:bg-muted"
              >
                JOIN TELEGRAM
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Right content - Mascot */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tqmUhc7EBDoSXMi2P63mHCCT4fsfyH.png"
                alt="RageCat Mascot"
                width={600}
                height={600}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
