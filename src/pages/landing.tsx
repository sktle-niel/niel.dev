import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Footer } from "@/components/sections/footer";

/** The landing page is the deck: an intro line and one floating card per page. */
export function Landing() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
