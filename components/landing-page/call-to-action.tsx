import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="relative z-10 py-24 px-4">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 backdrop-blur-md p-8 sm:p-16 text-center relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
           <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl"></div>
           <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl"></div>
        </div>

        <h2 className="text-3xl font-bold text-white sm:text-5xl mb-6">
          Ready to transform your inventory?
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-blue-100/80">
          Join thousands of businesses that trust AC Stock to manage their operations. 
          Start your free 14-day trial today.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/auth/register">
            <Button size="lg" className="h-14 px-8 text-lg bg-white text-blue-950 hover:bg-blue-50 border-0 shadow-xl transition-all hover:scale-105">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="mt-4 text-sm text-blue-200/60 sm:mt-0 sm:ml-6">
            No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};
