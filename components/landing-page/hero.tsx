import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BarChart2 } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center px-4 py-24 text-center lg:py-32 overflow-hidden">
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 flex flex-col items-center space-y-8 max-w-4xl">

        <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-600 shadow-sm transition-colors hover:bg-slate-50">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
          Regular updates every week
        </div>

        <h1 className="text-5xl font-semibold tracking-tight text-[#1d1d1f] sm:text-7xl leading-[1.1]">Sign In to Start Editing<br />
          <span className="text-[#6e6e73]">
            ac.Stock
          </span>
        </h1>

        <p className="max-w-2xl text-lg text-[#1d1d1f] sm:text-xl leading-relaxed font-medium">
          The ultimate solution for tracking, managing, and optimizing the webpage.
          Simple, powerful, and designed for growth.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 pt-4 w-full items-center justify-center">
          <Link href="/auth/login">
            <Button size="lg" className="min-w-[180px] h-12 rounded-full text-base font-medium bg-[#0071e3] text-white hover:bg-[#0077ed] border-0 shadow-none transition-all hover:scale-[1.02]">
              Get Started
            </Button>
          </Link>
          <Link href="/features">
            <Button size="lg" variant="outline" className="min-w-[180px] h-12 rounded-full text-base font-medium border-[#0071e3] text-[#0071e3] bg-transparent hover:bg-[#0071e3]/5 transition-all hover:scale-[1.02]">
              <BarChart2 className="mr-1 h-4 w-4" />
              View Features
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
