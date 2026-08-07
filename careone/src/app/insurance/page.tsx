export default function InsurancePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          🏥 Insurance Decoder
        </h1>
        <p className="text-slate-600 max-w-xl mx-auto">
          Upload your insurance card or plan document. We&apos;ll translate the fine print
          into plain English.
        </p>
      </div>

      {/* Upload Area */}
      <div className="border-2 border-dashed border-slate-300 rounded-2xl p-12 text-center mb-12 hover:border-primary-400 transition cursor-pointer">
        <span className="text-5xl mb-4 block">📄</span>
        <h3 className="font-bold text-lg text-slate-900 mb-2">
          Upload Your Insurance Card or Plan Document
        </h3>
        <p className="text-sm text-slate-500 mb-4">
          Take a photo of your card, or upload your plan summary PDF
        </p>
        <button className="bg-primary-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-primary-700 transition">
          Choose File
        </button>
        <p className="text-xs text-slate-400 mt-4">
          🔒 Your documents are encrypted and never shared with third parties.
        </p>
      </div>

      {/* What We Decode */}
      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
          <h3 className="font-bold text-slate-900 mb-3">What We&apos;ll Tell You:</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>✓ Your monthly premium (what you pay no matter what)</li>
            <li>✓ Your deductible (what you pay before insurance kicks in)</li>
            <li>✓ Copays for doctor visits, specialists, ER</li>
            <li>✓ What&apos;s covered vs. what&apos;s not</li>
            <li>✓ In-network doctors & hospitals near you</li>
            <li>✓ Prescription drug coverage tier</li>
            <li>✓ Out-of-pocket maximum (the most you&apos;ll ever pay)</li>
          </ul>
        </div>
        <div className="p-6 rounded-xl bg-primary-50 border border-primary-200">
          <h3 className="font-bold text-slate-900 mb-3">We&apos;ll Also Help You:</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>💡 Find cheaper alternatives to your current plan</li>
            <li>💡 Understand when to use urgent care vs ER (save $$$)</li>
            <li>💡 Appeal denied claims (with letter templates)</li>
            <li>💡 Find out if you qualify for Medicaid or subsidies</li>
            <li>💡 Compare plans during open enrollment</li>
            <li>💡 Maximize preventive care (free under most plans!)</li>
            <li>💡 Negotiate out-of-network bills</li>
          </ul>
        </div>
      </div>

      {/* Insurance 101 Quick Cards */}
      <div>
        <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
          Insurance 101 — Start Here
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              emoji: "🤷",
              title: "I have no insurance",
              desc: "Options you didn't know you had",
            },
            {
              emoji: "😕",
              title: "I have insurance but don't get it",
              desc: "Decoded in 5 minutes flat",
            },
            {
              emoji: "💸",
              title: "I got a huge bill",
              desc: "How to fight it (and often win)",
            },
          ].map((card) => (
            <a
              key={card.title}
              href="#"
              className="p-5 rounded-xl border border-slate-200 hover:border-primary-300 hover:shadow-md transition"
            >
              <span className="text-2xl mb-2 block">{card.emoji}</span>
              <h3 className="font-bold text-sm text-slate-900 mb-1">{card.title}</h3>
              <p className="text-xs text-slate-500">{card.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
