import { Button } from "@/components/ui/button";
import Link from "next/link";
// 1. Import the wave.svg file
import Wave from "@/public/wave.svg";
import Image from "next/image"; // Needed for optimized SVG usage

export default function Home() {
  return (
    <main className="relative flex h-screen flex-col items-center justify-center bg-hero-gradient overflow-hidden">
      <div className="relative z-10 space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          Auth
        </h1>
        <Link href="/auth/login">
          <Button className="cursor-pointer">Sign In</Button>
        </Link>
      </div>
    </main>
  );
}
