export type Property = {
  id: string;
  title: string;
  location: string;
  type: "Condo" | "Villa" | "House" | "Commercial";
  bedrooms: number;
  bathrooms: number;
  sizeSqm: number;
  priceTHB: number;
  contract: "Monthly" | "6 Months" | "12 Months" | "For Sale";
  highlights: string[];
};

export const properties: Property[] = [
  {
    id: "srp-001",
    title: "Modern Sea-View Studio",
    location: "Pratumnak, Pattaya",
    type: "Condo",
    bedrooms: 0,
    bathrooms: 1,
    sizeSqm: 31,
    priceTHB: 12000,
    contract: "12 Months",
    highlights: ["Sea view", "Fully furnished", "Pool & gym", "Great location"]
  },
  {
    id: "srp-002",
    title: "1BR High-Floor City View",
    location: "Central Pattaya",
    type: "Condo",
    bedrooms: 1,
    bathrooms: 1,
    sizeSqm: 35,
    priceTHB: 18000,
    contract: "6 Months",
    highlights: ["High floor", "City view", "Walkable area", "Secure building"]
  }
];
