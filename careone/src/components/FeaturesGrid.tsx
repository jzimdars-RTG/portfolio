const features = [
  {
    icon: "🤖",
    title: "AI Health Assistant",
    description:
      "Describe symptoms in plain language. Get clear answers, not medical jargon. Knows when to tell you to seek help.",
  },
  {
    icon: "📱",
    title: "Photo Analysis",
    description:
      "Upload a photo of a rash, wound, or swelling for instant visual assessment powered by medical imaging AI.",
  },
  {
    icon: "💊",
    title: "Medication Checker",
    description:
      "Check drug interactions, set reminders, and find cheaper generic alternatives at pharmacies near you.",
  },
  {
    icon: "🏥",
    title: "Insurance Decoder",
    description:
      "Upload your plan or card. We translate the fine print into plain English so you know exactly what's covered.",
  },
  {
    icon: "💸",
    title: "Cost Estimator",
    description:
      "Search any procedure and see real price ranges, cheaper alternatives, and financial aid programs you qualify for.",
  },
  {
    icon: "📍",
    title: "Local Resources",
    description:
      "Find free clinics, sliding-scale providers, WIC offices, and community health programs by zip code.",
  },
  {
    icon: "📋",
    title: "Bill Dispute Help",
    description:
      "Got a surprise medical bill? We walk you through disputing it and generate appeal letters automatically.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family Profiles",
    description:
      "Track health for your whole family — baby, kids, parents, grandparents — each with personalized recommendations.",
  },
  {
    icon: "🔔",
    title: "Smart Follow-ups",
    description:
      "We check in after 24 hours: \"How are you feeling?\" Updates your care plan based on how symptoms progress.",
  },
  {
    icon: "🚨",
    title: "Emergency Detection",
    description:
      "If your symptoms match a stroke, heart attack, or severe reaction — full-screen alert with 911 and nearest ER.",
  },
  {
    icon: "🌐",
    title: "Multilingual",
    description:
      "Available in English, Spanish, Mandarin, Arabic, Haitian Creole, and Vietnamese. More languages coming.",
  },
  {
    icon: "📴",
    title: "Works Offline",
    description:
      "Core guides available without internet. Designed for low-bandwidth and limited data plans.",
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
          Everything you need. Nothing you don&apos;t.
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Unlike WebMD, we don&apos;t overwhelm you with 10,000 articles. We give you the one answer you need, when you need it.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-5 rounded-xl border border-slate-100 hover:border-primary-200 hover:bg-primary-50/30 transition"
            >
              <span className="text-2xl mb-3 block">{feature.icon}</span>
              <h3 className="font-semibold text-slate-900 mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
