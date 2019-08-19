export interface AdItem {
  id: number;
  name: string;
  pricePerDay?: number;
  pricePerWeek?: number;
  pricePerMonth?: number;
  type: string;
  shortDesc: string;
  pictureUrl?: string;
}
