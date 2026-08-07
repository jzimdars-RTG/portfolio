export function CTA() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-12 text-white">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Health literacy is a human right.
        </h2>
        <p className="text-primary-100 text-lg mb-8 max-w-xl mx-auto">
          Join thousands of people taking ownership of their health. Free
          forever — because no one should be in the dark about their own body.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/signup"
            className="bg-white text-primary-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-primary-50 transition"
          >
            Get Started Free
          </a>
          <a
            href="/community"
            className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition"
          >
            Join the Community
          </a>
        </div>
        <p className="mt-6 text-sm text-primary-200">
          No credit card. No insurance needed. Just you and your health.
        </p>
      </div>
    </section>
  );
}
