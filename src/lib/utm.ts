export function getTallyHref(base: string) {
  if (typeof window === "undefined") return base;
  const qs = window.location.search?.replace(/^\?/, "");
  return qs ? `${base}?${qs}` : base;
}