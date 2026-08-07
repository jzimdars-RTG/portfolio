import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CareOne — Healthcare for Everyone",
  description:
    "Your trusted health companion. Get answers, learn to care for yourself and your family, and connect with a community that has your back.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 min-h-screen">
        <header className="sticky top-0 z-50 glass border-b border-slate-100">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl">💚</span>
              <span className="font-display text-xl font-bold text-primary-700">
                CareOne
              </span>
            </a>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
              <a href="/symptoms" className="hover:text-primary-600 transition">
                Symptoms
              </a>
              <a href="/learn" className="hover:text-primary-600 transition">
                Learn
              </a>
              <a href="/community" className="hover:text-primary-600 transition">
                Community
              </a>
              <a href="/insurance" className="hover:text-primary-600 transition">
                Insurance
              </a>
              <a href="/costs" className="hover:text-primary-600 transition">
                Costs
              </a>
            </div>
            <button className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-700 transition">
              Sign Up Free
            </button>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="border-t border-slate-100 mt-20 py-12 px-4">
          <div className="max-w-6xl mx-auto text-center text-sm text-slate-500">
            <p className="mb-2">
              ⚠️ CareOne provides health information, not medical advice. Always
              consult a healthcare professional for serious concerns.
            </p>
            <p>© 2026 CareOne. Healthcare knowledge belongs to everyone.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
