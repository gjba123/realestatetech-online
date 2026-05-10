"use client";

declare global {
  interface Window {
    setLocale?: (locale: "kenya" | "international") => void;
  }
}

export function LocaleToggle() {
  const handle = (locale: "kenya" | "international") => {
    if (typeof window !== "undefined" && window.setLocale) {
      window.setLocale(locale);
    }
  };

  return (
    <div className="locale-toggle">
      <button
        type="button"
        data-locale="kenya"
        onClick={() => handle("kenya")}
        aria-label="Switch to Kenya pricing"
      >
        🇰🇪 KE
      </button>
      <button
        type="button"
        data-locale="international"
        onClick={() => handle("international")}
        aria-label="Switch to international pricing"
      >
        🇺🇸 US
      </button>
    </div>
  );
}
