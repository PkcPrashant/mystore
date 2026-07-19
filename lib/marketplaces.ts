// Amazon only runs TWO Associates programs in the Gulf region: UAE and Saudi
// Arabia. Qatar/Kuwait/Bahrain/Oman have no local storefront or Associates
// program, so shoppers there generally buy cross-border via amazon.ae.
// If Amazon ever launches a new GCC storefront, add it here — nothing else
// in the app needs to change.
export const marketplaces = {
  ae: { label: "Buy on Amazon.ae", domain: "amazon.ae", flag: "🇦🇪" },
  sa: { label: "Buy on Amazon.sa", domain: "amazon.sa", flag: "🇸🇦" },
} as const;

export type MarketplaceKey = keyof typeof marketplaces;
