export const GA_TRACKING_ID = "G-CDLBZYY7KW"; // Replace with your GA ID

// Send a pageview event to GA
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Send custom events to GA
export const gtag = (action: string, params: { [key: string]: any }) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, params);
  }
};