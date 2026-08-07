const paths = [
  {
    emoji: "🔍",
    title: "What's Wrong?",
    description:
      "Describe how you're feeling in your own words. Our AI health assistant asks a few questions and gives you clear, actionable guidance — not a wall of scary articles.",
    features: [
      "Conversational symptom checker",
      "Photo analysis for skin issues",
      "Know when to go to ER vs. wait",
      "Cost estimates with & without insurance",
    ],
    cta: "Start Chat",
    href: "/symptoms",
    color: "primary",
    bgColor: "bg-primary-50",
    borderColor: "border-primary-200",
    ctaColor: "bg-primary-600 hover:bg-primary-700",
  },
  {
    emoji: "📚",
    title: "Learn Something",
    description:
      "Browse health guides designed for real people — organized by life stage, topic, or what matters to you right now. Short, visual, and jargon-free.",
    features: [
      "Life stage guides (baby → elderly)",
      "60-second video explainers",
      "Insurance decoded in plain English",
      "Nutrition on a real budget",
    ],
    cta: "Browse Guides",
    href: "/learn",
    color: "accent",
    bgColor: "bg-accent-50",
    borderColor: "border-accent-200",
    ctaColor: "bg-accent-600 hover:bg-accent-700",
  },
  {
    emoji: "💬",
    title: "Ask the Community",
    description:
      "Real people sharing what works. Home remedies, tips, and local resources — all reviewed by healthcare professionals so you know it's safe.",
    features: [
      "Community-sourced remedies",
      "Professional verification badges",
      "Anonymous mode for sensitive topics",
      "Local free resources by zip code",
    ],
    cta: "Join Forum",
    href: "/community",
    color: "warm",
    bgColor: "bg-warm-50",
    borderColor: "border-yellow-200",
    ctaColor: "bg-yellow-500 hover:bg-yellow-600",
  },
];

export function ThreePaths() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
          Three ways to take control of your health
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          No matter where you are in life, CareOne meets you there.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {paths.map((path) => (
            <div
              key={path.title}
              className={`${path.bgColor} ${path.borderColor} border rounded-2xl p-8 hover:shadow-lg transition-shadow`}
            >
              <span className="text-4xl mb-4 block">{path.emoji}</span>
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">
                {path.title}
              </h3>
              <p className="text-slate-600 mb-6">{path.description}</p>
              <ul className="space-y-2 mb-8">
                {path.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <span className="text-primary-500 mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={path.href}
                className={`${path.ctaColor} text-white px-6 py-3 rounded-full text-sm font-medium inline-block transition`}
              >
                {path.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
