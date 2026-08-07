"use client";

import { useState } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hi there 👋 I'm your CareOne health assistant. Tell me what's going on — describe how you're feeling in your own words, and I'll help you figure out what to do next.\n\nYou can say things like:\n• \"My throat has been sore for 3 days\"\n• \"My baby has a rash on her chest\"\n• \"I feel dizzy when I stand up\"",
};

const SAMPLE_RESPONSES: Record<string, string> = {
  default: `I hear you. Let me ask a few quick questions to better understand what's happening:

1. **How long** has this been going on?
2. **How severe** is it on a scale of 1-10?
3. **Any other symptoms** — fever, nausea, fatigue?

Take your time — there's no rush. 💚`,

  throat: `Thanks for sharing that. A sore throat is really common and usually manageable. Let me help you sort this out:

**Quick questions:**
1. Do you have a fever (above 100.4°F / 38°C)?
2. Can you see white patches on your tonsils?
3. Any difficulty swallowing or breathing?

**While I gather more info, here's what's likely:**

🟢 **Most probable:** Viral pharyngitis (common cold/flu)
- Usually resolves in 5-7 days
- Home care: warm salt water gargle, honey tea, rest

🟡 **Possible:** Strep throat (if fever + white patches)
- Needs a quick test at urgent care (~$50-100 without insurance)

🔴 **Seek immediate care if:** Difficulty breathing, can't swallow liquids, or severe swelling

💰 **Cost comparison in your area:**
- Telehealth visit: $20-75
- Urgent care: $100-200
- ER: $500-1500 (avoid unless breathing issues)`,
};

export default function SymptomsPage() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const response =
        input.toLowerCase().includes("throat") ||
        input.toLowerCase().includes("sore")
          ? SAMPLE_RESPONSES.throat
          : SAMPLE_RESPONSES.default;

      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="font-display text-3xl font-bold text-slate-900 mb-2">
          🔍 What&apos;s Wrong?
        </h1>
        <p className="text-slate-600">
          Describe your symptoms in your own words. No medical jargon needed.
        </p>
      </div>

      {/* Chat Area */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 min-h-[500px] flex flex-col">
        {/* Messages */}
        <div className="flex-1 p-6 space-y-4 overflow-y-auto">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                  msg.role === "user"
                    ? "bg-primary-600 text-white"
                    : "bg-white border border-slate-200 text-slate-800"
                }`}
              >
                <div className="whitespace-pre-wrap text-sm leading-relaxed">
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-200 rounded-2xl px-5 py-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.1s]" />
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-slate-200">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Describe how you're feeling..."
              className="flex-1 px-4 py-3 rounded-full border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none text-sm"
            />
            <button
              onClick={handleSend}
              className="bg-primary-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-primary-700 transition"
            >
              Send
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-2 text-center">
            🔒 Your health conversations are private and never shared.
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 grid sm:grid-cols-3 gap-3">
        <button className="p-4 rounded-xl border border-slate-200 hover:border-primary-300 hover:bg-primary-50 transition text-left">
          <span className="text-xl mb-1 block">📷</span>
          <span className="text-sm font-medium text-slate-900">Upload a Photo</span>
          <p className="text-xs text-slate-500 mt-1">Rash, wound, or swelling</p>
        </button>
        <button className="p-4 rounded-xl border border-slate-200 hover:border-primary-300 hover:bg-primary-50 transition text-left">
          <span className="text-xl mb-1 block">💊</span>
          <span className="text-sm font-medium text-slate-900">Check Medications</span>
          <p className="text-xs text-slate-500 mt-1">Drug interactions & alternatives</p>
        </button>
        <button className="p-4 rounded-xl border border-slate-200 hover:border-primary-300 hover:bg-primary-50 transition text-left">
          <span className="text-xl mb-1 block">🚨</span>
          <span className="text-sm font-medium text-slate-900">Emergency?</span>
          <p className="text-xs text-slate-500 mt-1">Call 911 or find nearest ER</p>
        </button>
      </div>
    </div>
  );
}
