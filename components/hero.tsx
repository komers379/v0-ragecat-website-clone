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
                BUY ON PUMP.FUN
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-muted-foreground/50 hover:bg-muted"
                asChild
              >
                <a href="https://x.com/AndyBones91" target="_blank" rel="noopener noreferrer">
                  FOLLOW ON X
                  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
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
