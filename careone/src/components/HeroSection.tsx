export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-display text-4xl md:text-6xl font-bold text-slate-900 mb-6 text-balance">
          Healthcare knowledge
          <br />
          <span className="text-primary-600">belongs to everyone.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8 text-balance">
          No jargon. No confusion. No gatekeeping. Get clear answers about your
          health, learn to care for your family, and save money — all in one
          place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/symptoms"
            className="bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-primary-700 transition shadow-lg shadow-primary-200"
          >
            Check My Symptoms
          </a>
          <a
            href="/learn"
            className="bg-white text-slate-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-50 transition border border-slate-200"
          >
            Explore Guides
          </a>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Free forever. No insurance required. Available in multiple languages.
        </p>
      </div>

      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-40 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-100 rounded-full opacity-40 blur-3xl" />
    </section>
  );
}
