import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-background");

  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 text-shadow-lg font-headline">
          LatamRust Launcher
        </h1>
        <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
          Your gateway to the most intense Rust experience in Latin America.
          Download the official launcher to get started.
        </p>
        <Button size="lg" className="text-lg font-semibold px-8 py-6">
          <Download className="mr-2 h-5 w-5" />
          Download for Windows
        </Button>
      </div>
    </section>
  );
}
