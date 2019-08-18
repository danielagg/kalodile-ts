import Axios from "axios";
import { AdItem } from "./types";

export interface MultipleAdFetchResult {
  ads: AdItem[];
  error: string;
}

export interface SingleAdFetchResult {
  ad: AdItem;
  error: string;
}

export class AdService {
  public static async fetchAds(): Promise<MultipleAdFetchResult> {
    const res = await Axios.request<any>({
      url: "http://localhost:3001/events?isAllCompany=true",
      transformResponse: (r: MultipleAdFetchResult) => r
    });

    return { error: "", ads: JSON.parse(res.data) };
  }

  public static async fetchAdById(adId: number): Promise<SingleAdFetchResult> {
    const res = await Axios.request<any>({
      url: `http://localhost:3001/events?id=${adId}`,
      transformResponse: (r: AdItem[]) => r
    });
    return { error: "", ad: JSON.parse(res.data)[0] };
  }
}
