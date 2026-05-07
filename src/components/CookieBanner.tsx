"use client";
import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("devsnio-cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("devsnio-cookie-consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("devsnio-cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pointer-events-none">
      <div className="max-w-6xl mx-auto bg-white border border-zinc-200 rounded-2xl shadow-2xl p-5 sm:p-6 pointer-events-auto">
        <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
          {/* Icon */}
          <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center flex-shrink-0">
            <Cookie size={16} className="text-[#FF751F]" />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-black mb-0.5">Cookie Preferences</p>
            <p className="text-sm text-zinc-500 leading-relaxed">
              We use cookies to improve your experience and analyse site traffic. Learn more in our{" "}
              <a href="/cookies" className="text-black underline font-medium hover:text-[#FF751F] transition-colors">
                Cookie Policy
              </a>.
            </p>
          </div>

          {/* Buttons + dismiss */}
          <div className="flex items-center gap-3 flex-shrink-0 ml-auto">
            <button
              onClick={reject}
              className="h-10 px-5 rounded-full border border-zinc-200 text-sm font-semibold text-zinc-600 hover:border-zinc-400 hover:text-black transition-colors cursor-pointer whitespace-nowrap"
            >
              Reject optional
            </button>
            <button
              onClick={accept}
              className="h-10 px-6 rounded-full bg-black text-white text-sm font-semibold hover:bg-zinc-800 transition-colors cursor-pointer whitespace-nowrap"
            >
              Accept all
            </button>
            <button
              onClick={reject}
              className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-black hover:border-zinc-400 transition-colors cursor-pointer flex-shrink-0"
              aria-label="Dismiss"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
