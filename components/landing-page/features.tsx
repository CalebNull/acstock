import { FeatureCard } from "./feature-card";


export const Features = () => {
  return (
    <section id="features" className="relative z-10 py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            Everything you need to scale
          </h2>
          <p className="text-blue-100/70 max-w-2xl mx-auto">
            Powerful features designed to help you take control of your inventory and grow your business.
          </p>
        </div>

        <FeatureCard />
      </div>
    </section>
  );
};
