import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Instructions } from "@/components/landing/instructions";
import { Requirements } from "@/components/landing/requirements";
import { Support } from "@/components/landing/support";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="container mx-auto px-4 py-16 sm:py-24 space-y-16 sm:space-y-24">
          <Instructions />
          <Requirements />
          <Support />
        </div>
      </main>
      <Footer />
    </div>
  );
}
