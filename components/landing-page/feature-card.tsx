import { ShieldCheck, Zap, BarChart3, Users, Globe, Smartphone } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Real-time Tracking",
    description: "Monitor your inventory levels in real-time across multiple locations with zero latency.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Gain actionable insights with our powerful reporting tools and predictive forecasting.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "Bank-grade encryption and role-based access control to keep your data safe.",
  },
  {
    icon: Users,
    title: "Multi-user Access",
    description: "Collaborate seamlessly with your team with granular permission settings.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Manage stock across international borders with multi-currency support.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Access your dashboard from anywhere with our fully responsive mobile application.",
  },
];

export const FeatureCard = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-2xl bg-white/5 p-8 backdrop-blur-sm border border-white/10 transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:-translate-y-1"
        >
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl transition-all group-hover:scale-150" />

          <div className="relative">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-purple-400 shadow-lg">
              <feature.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">
              {feature.title}
            </h3>
            <p className="text-blue-100/60 leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}