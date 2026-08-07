const lifeStages = [
  { emoji: "🤰", label: "Pregnancy", count: 24 },
  { emoji: "👶", label: "Newborn (0-1)", count: 32 },
  { emoji: "🧒", label: "Toddler (1-4)", count: 28 },
  { emoji: "👦", label: "Children (5-12)", count: 22 },
  { emoji: "🧑", label: "Teens (13-17)", count: 26 },
  { emoji: "👨", label: "Young Adults (18-30)", count: 34 },
  { emoji: "👩‍💼", label: "Adults (31-55)", count: 30 },
  { emoji: "👴", label: "Seniors (55+)", count: 28 },
];

const topics = [
  {
    emoji: "🧠",
    title: "Mental Health",
    description: "Anxiety, depression, stress management, and finding help without stigma.",
    guides: 18,
    tag: "Destigmatized",
  },
  {
    emoji: "🥗",
    title: "Nutrition on a Budget",
    description: "Healthy eating for $5/day. Real meal plans, not fancy wellness nonsense.",
    guides: 14,
    tag: "Practical",
  },
  {
    emoji: "🏋️",
    title: "Exercise Without a Gym",
    description: "Free workouts at home, walking programs, and bodyweight routines for all abilities.",
    guides: 12,
    tag: "Free",
  },
  {
    emoji: "🫀",
    title: "Heart & Blood Pressure",
    description: "Understanding hypertension, cholesterol, and how to protect your heart on any budget.",
    guides: 16,
    tag: "Critical",
  },
  {
    emoji: "🩺",
    title: "Insurance 101",
    description: "What's a deductible? What's in-network? How to actually USE your insurance effectively.",
    guides: 10,
    tag: "Save Money",
  },
  {
    emoji: "🦷",
    title: "Dental Health",
    description: "The most neglected area of health. Why it matters and how to afford care.",
    guides: 8,
    tag: "Overlooked",
  },
  {
    emoji: "🤒",
    title: "Common Illnesses",
    description: "Cold vs flu vs COVID vs allergies. When to rest, when to worry, when to see someone.",
    guides: 20,
    tag: "Essential",
  },
  {
    emoji: "💊",
    title: "Medications & Supplements",
    description: "What actually works, what's snake oil, and how to find affordable prescriptions.",
    guides: 15,
    tag: "Evidence-Based",
  },
  {
    emoji: "🏥",
    title: "The Healthcare System",
    description: "How hospitals bill, how to negotiate, how to appeal denials, and your patient rights.",
    guides: 12,
    tag: "Insider Knowledge",
  },
];

export default function LearnPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          📚 Learn Something New
        </h1>
        <p className="text-slate-600 max-w-xl mx-auto">
          Health guides designed for real people. Short, visual, and actually useful.
          No medical degree required.
        </p>
      </div>

      {/* Life Stages */}
      <div className="mb-16">
        <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
          Browse by Life Stage
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {lifeStages.map((stage) => (
            <a
              key={stage.label}
              href={`/learn/stage/${stage.label.toLowerCase()}`}
              className="flex flex-col items-center p-4 rounded-xl border border-slate-200 hover:border-primary-300 hover:bg-primary-50 transition text-center"
            >
              <span className="text-3xl mb-2">{stage.emoji}</span>
              <span className="text-xs font-medium text-slate-700">
                {stage.label}
              </span>
              <span className="text-xs text-slate-400 mt-1">
                {stage.count} guides
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Topics */}
      <div>
        <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
          Browse by Topic
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {topics.map((topic) => (
            <a
              key={topic.title}
              href={`/learn/topic/${topic.title.toLowerCase().replace(/ /g, "-")}`}
              className="group p-6 rounded-xl border border-slate-200 hover:border-primary-300 hover:shadow-md transition"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{topic.emoji}</span>
                <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full font-medium">
                  {topic.tag}
                </span>
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary-700 transition">
                {topic.title}
              </h3>
              <p className="text-sm text-slate-600 mb-3">{topic.description}</p>
              <span className="text-xs text-slate-400">
                {topic.guides} guides available
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Content Format Options */}
      <div className="mt-16 bg-slate-50 rounded-2xl p-8">
        <h2 className="font-display text-2xl font-bold text-slate-900 mb-6 text-center">
          Learn Your Way
        </h2>
        <div className="grid sm:grid-cols-4 gap-4">
          <div className="text-center p-4">
            <span className="text-2xl mb-2 block">🎬</span>
            <span className="text-sm font-medium text-slate-700">60-sec Videos</span>
          </div>
          <div className="text-center p-4">
            <span className="text-2xl mb-2 block">📊</span>
            <span className="text-sm font-medium text-slate-700">Infographics</span>
          </div>
          <div className="text-center p-4">
            <span className="text-2xl mb-2 block">🎧</span>
            <span className="text-sm font-medium text-slate-700">Audio Mode</span>
          </div>
          <div className="text-center p-4">
            <span className="text-2xl mb-2 block">❓</span>
            <span className="text-sm font-medium text-slate-700">Quizzes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
