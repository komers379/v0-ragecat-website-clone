import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TokenInfo } from "@/components/token-info"
import { About } from "@/components/about"
import { Tokenomics } from "@/components/tokenomics"
import { Roadmap } from "@/components/roadmap"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <TokenInfo />
      <About />
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Tokenomics />
        <Roadmap />
      </div>
      <Footer />
    </main>
  )
}
