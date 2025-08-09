export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export const pageview = (url: string) => {
  if (!GA_ID || typeof window === "undefined") return;
  (window as any).gtag("config", GA_ID, { page_path: url });
};

export const gtag = (event: string, params: Record<string, any>) => {
  if (!GA_ID || typeof window === "undefined") return;
  (window as any).gtag("event", event, params);
};


// ==============================
// src/lib/utm.ts
// ==============================
export function getTallyHref(base: string) {
  if (typeof window === "undefined") return base;
  const qs = window.location.search?.replace(/^\?/, "");
  return qs ? `${base}?${qs}` : base;
}