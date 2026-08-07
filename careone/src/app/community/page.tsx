const forumPosts = [
  {
    id: 1,
    title: "Honey and ginger tea for sore throats — actually works",
    author: "Maria S.",
    status: "verified" as const,
    upvotes: 234,
    comments: 45,
    timeAgo: "2 days ago",
    tags: ["Home Remedy", "Sore Throat"],
  },
  {
    id: 2,
    title: "How I found a free clinic that saved my life in Detroit",
    author: "Anonymous",
    status: "community" as const,
    upvotes: 189,
    comments: 32,
    timeAgo: "1 day ago",
    tags: ["Local Resource", "Detroit"],
  },
  {
    id: 3,
    title: "Apple cider vinegar for acid reflux — my experience",
    author: "James T.",
    status: "pending" as const,
    upvotes: 67,
    comments: 18,
    timeAgo: "5 hours ago",
    tags: ["Home Remedy", "Digestion"],
  },
  {
    id: 4,
    title: "Guide: How I got my $4,000 ER bill reduced to $400",
    author: "Sarah K.",
    status: "verified" as const,
    upvotes: 512,
    comments: 89,
    timeAgo: "3 days ago",
    tags: ["Bills", "Save Money"],
  },
  {
    id: 5,
    title: "Postpartum anxiety — what nobody tells you and what helped",
    author: "Anonymous",
    status: "community" as const,
    upvotes: 298,
    comments: 56,
    timeAgo: "12 hours ago",
    tags: ["Mental Health", "Parenthood"],
  },
];

const statusStyles = {
  verified: {
    label: "✅ Professional Verified",
    bg: "bg-green-100 text-green-800",
  },
  community: {
    label: "💙 Community Endorsed",
    bg: "bg-blue-100 text-blue-800",
  },
  pending: {
    label: "⏳ Awaiting Review",
    bg: "bg-yellow-100 text-yellow-800",
  },
};

export default function CommunityPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          💬 Community Forum
        </h1>
        <p className="text-slate-600 max-w-xl mx-auto">
          Real people sharing what works. Every remedy is reviewed by healthcare
          professionals for safety.
        </p>
      </div>

      {/* Trust Legend */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {Object.values(statusStyles).map((status) => (
          <span
            key={status.label}
            className={`${status.bg} px-3 py-1 rounded-full text-xs font-medium`}
          >
            {status.label}
          </span>
        ))}
      </div>

      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <input
          type="text"
          placeholder="Search remedies, tips, or local resources..."
          className="flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none text-sm"
        />
        <button className="bg-primary-600 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-primary-700 transition whitespace-nowrap">
          + Share a Remedy
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {["All", "Verified", "Home Remedies", "Local Resources", "Save Money", "Mental Health"].map(
          (tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                tab === "All"
                  ? "bg-primary-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {tab}
            </button>
          )
        )}
      </div>

      {/* Posts */}
      <div className="space-y-4">
        {forumPosts.map((post) => (
          <article
            key={post.id}
            className="p-5 rounded-xl border border-slate-200 hover:border-primary-200 hover:shadow-sm transition"
          >
            <div className="flex items-start gap-4">
              {/* Upvote */}
              <div className="flex flex-col items-center gap-1 min-w-[50px]">
                <button className="text-slate-400 hover:text-primary-600 transition">
                  ▲
                </button>
                <span className="text-sm font-bold text-slate-700">
                  {post.upvotes}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`${statusStyles[post.status].bg} px-2 py-0.5 rounded text-xs font-medium`}
                  >
                    {statusStyles[post.status].label}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 hover:text-primary-700 cursor-pointer">
                  {post.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.timeAgo}</span>
                  <span>•</span>
                  <span>{post.comments} comments</span>
                  <div className="flex gap-1 ml-auto">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Community Guidelines */}
      <div className="mt-12 bg-slate-50 rounded-2xl p-8">
        <h2 className="font-bold text-lg text-slate-900 mb-4">
          🛡️ Community Safety
        </h2>
        <ul className="space-y-2 text-sm text-slate-700">
          <li className="flex gap-2">
            <span>✓</span> All remedies are reviewed by verified healthcare professionals
          </li>
          <li className="flex gap-2">
            <span>✓</span> AI monitors posts in real-time for potentially dangerous advice
          </li>
          <li className="flex gap-2">
            <span>✓</span> Anonymous posting available for sensitive health topics
          </li>
          <li className="flex gap-2">
            <span>✓</span> Report button on every post — flagged content reviewed within 24 hours
          </li>
        </ul>
      </div>
    </div>
  );
}
