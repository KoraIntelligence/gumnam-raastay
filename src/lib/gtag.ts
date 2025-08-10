export const GA_TRACKING_ID = "G-CDLBZYY7KW"; // your real ID

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const pageview = (url: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("config", GA_TRACKING_ID, { page_path: url });
  }
};

export const gtag = (action: string, params: Record<string, unknown>) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, params);
  }
};