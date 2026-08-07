export default function CostsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          💸 Cost Estimator & Savings
        </h1>
        <p className="text-slate-600 max-w-xl mx-auto">
          Know what you&apos;ll pay before you go. Find cheaper options. Save money you didn&apos;t know you could.
        </p>
      </div>

      {/* Search */}
      <div className="bg-slate-50 rounded-2xl p-8 mb-12">
        <h2 className="font-bold text-lg text-slate-900 mb-4 text-center">
          How much will it cost?
        </h2>
        <div className="max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search: MRI, blood test, dental cleaning, therapy session..."
            className="w-full px-5 py-4 rounded-full border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none text-sm"
          />
          <div className="flex gap-2 mt-3 justify-center">
            <span className="text-xs bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-600 cursor-pointer hover:border-primary-300">
              X-Ray
            </span>
            <span className="text-xs bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-600 cursor-pointer hover:border-primary-300">
              Blood Work
            </span>
            <span className="text-xs bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-600 cursor-pointer hover:border-primary-300">
              Therapy
            </span>
            <span className="text-xs bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-600 cursor-pointer hover:border-primary-300">
              Dental
            </span>
          </div>
        </div>
      </div>

      {/* Sample Result */}
      <div className="border border-slate-200 rounded-2xl p-8 mb-12">
        <h3 className="font-bold text-xl text-slate-900 mb-1">
          MRI (Brain/Head) — Example Results
        </h3>
        <p className="text-sm text-slate-500 mb-6">Prices in your area (Detroit metro)</p>

        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-red-50 rounded-xl p-4 text-center border border-red-100">
            <p className="text-xs text-red-600 font-medium mb-1">Hospital (ER)</p>
            <p className="text-2xl font-bold text-red-700">$2,500+</p>
            <p className="text-xs text-red-500 mt-1">Avoid unless emergency</p>
          </div>
          <div className="bg-yellow-50 rounded-xl p-4 text-center border border-yellow-100">
            <p className="text-xs text-yellow-700 font-medium mb-1">Hospital (Outpatient)</p>
            <p className="text-2xl font-bold text-yellow-700">$1,000-1,800</p>
            <p className="text-xs text-yellow-600 mt-1">Standard pricing</p>
          </div>
          <div className="bg-green-50 rounded-xl p-4 text-center border border-green-100">
            <p className="text-xs text-green-700 font-medium mb-1">Imaging Center</p>
            <p className="text-2xl font-bold text-green-700">$300-600</p>
            <p className="text-xs text-green-600 mt-1">✓ Same quality, 70% cheaper</p>
          </div>
        </div>

        <div className="bg-primary-50 rounded-xl p-4 border border-primary-200">
          <p className="text-sm font-medium text-primary-800 mb-2">
            💡 CareOne Money-Saving Tips:
          </p>
          <ul className="text-sm text-primary-700 space-y-1">
            <li>• Ask your doctor to order it at an independent imaging center</li>
            <li>• Many centers offer 20-40% discount for paying cash upfront</li>
            <li>• Check if your insurance requires pre-authorization (or you pay full price)</li>
            <li>• Programs like RadNet offer financing at 0% interest</li>
          </ul>
        </div>
      </div>

      {/* Financial Aid Tools */}
      <div>
        <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
          Financial Aid & Savings Tools
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {[
            {
              emoji: "🆓",
              title: "Free & Low-Cost Clinic Finder",
              desc: "Find sliding-scale clinics, free clinics, and community health centers by zip code.",
            },
            {
              emoji: "💊",
              title: "Prescription Discount Finder",
              desc: "Compare prices at local pharmacies. Find manufacturer coupons and patient assistance programs.",
            },
            {
              emoji: "📋",
              title: "Bill Dispute Assistant",
              desc: "Got a surprise bill? We generate dispute letters and walk you through the appeal process.",
            },
            {
              emoji: "🏛️",
              title: "Government Programs Check",
              desc: "See if you qualify for Medicaid, CHIP, Medicare, ACA subsidies, or state programs.",
            },
            {
              emoji: "🤝",
              title: "Charity Care Finder",
              desc: "Most hospitals have charity programs that forgive bills — we help you find and apply.",
            },
            {
              emoji: "💰",
              title: "Savings Tracker",
              desc: "Track how much you've saved using CareOne recommendations. Celebrate your wins!",
            },
          ].map((tool) => (
            <a
              key={tool.title}
              href="#"
              className="p-6 rounded-xl border border-slate-200 hover:border-primary-300 hover:shadow-md transition"
            >
              <span className="text-3xl mb-3 block">{tool.emoji}</span>
              <h3 className="font-bold text-slate-900 mb-2">{tool.title}</h3>
              <p className="text-sm text-slate-600">{tool.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
