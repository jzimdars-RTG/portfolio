const personas = [
  {
    emoji: "👶",
    title: "New Parents",
    need: "\"My baby has a rash — what do I do?\"",
    solution: "Visual symptom guides, milestone trackers, and community support from experienced parents.",
  },
  {
    emoji: "💪",
    title: "Young Adults",
    need: "\"Is this serious enough for the ER?\"",
    solution: "AI triage tells you when to worry and when to wait — plus cost comparisons so you don't go broke.",
  },
  {
    emoji: "👴",
    title: "Elderly & Caregivers",
    need: "\"How do I manage 5 medications?\"",
    solution: "Simple medication trackers, interaction checkers, and step-by-step caregiving guides.",
  },
  {
    emoji: "🌍",
    title: "Immigrants & ESL",
    need: "\"I don't understand the healthcare system.\"",
    solution: "Multilingual content, visual-first design, and plain-language insurance guides.",
  },
  {
    emoji: "💰",
    title: "Working Poor",
    need: "\"I can't afford to see a doctor.\"",
    solution: "Free clinic finders, prescription discount programs, and bill dispute assistance by zip code.",
  },
  {
    emoji: "🧠",
    title: "Mental Health",
    need: "\"I'm struggling but don't know where to start.\"",
    solution: "Anonymous community support, crisis resources, and destigmatized guides to getting help.",
  },
];

export function PersonaCards() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
          Built for everyone. Especially you.
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          No matter your age, income, or background — CareOne is designed to meet your specific needs.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {personas.map((persona) => (
            <div
              key={persona.title}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-primary-300 hover:shadow-md transition"
            >
              <span className="text-3xl mb-3 block">{persona.emoji}</span>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                {persona.title}
              </h3>
              <p className="text-sm text-slate-500 italic mb-3">
                {persona.need}
              </p>
              <p className="text-sm text-slate-700">{persona.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
