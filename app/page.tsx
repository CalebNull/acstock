import { Hero } from "@/components/landing-page/hero";

export default function Home() {
  return (
    <main className="relative flex h-screen flex-col items-center justify-center bg-hero-gradient overflow-hidden">
      <Hero />
    </main>
  );
}
