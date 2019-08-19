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
    // const res = await Axios.request<any>({
    //   url: "http://localhost:3001/events?isAllCompany=true",
    //   transformResponse: (r: MultipleAdFetchResult) => r
    // });

    const dummyResult: AdItem[] = [
      {
        id: 1,
        name: "Boss DC-2W",
        pricePerDay: 5,
        type: "Chorus",
        shortDesc: "The revamped classic Dimension Chorus",
        pictureUrl: "https://i.redd.it/7x29uozkko921.jpg"
      },
      {
        id: 2,
        name: "Keeley D&M Drive",
        pricePerDay: 4,
        type: "Overdrive/Distortion",
        shortDesc: "Dan and Mick's signature pedal",
        pictureUrl:
          "http://www.bestguitareffects.com/wp-content/uploads/Keeley-Electronics-DM-Drive-Review-Best-Dual-Overdrive-Boost-Pedal-01.jpg"
      },
      {
        id: 3,
        name: "TC Electronic Hall of Fame 2",
        pricePerDay: 5,
        type: "Reverb",
        shortDesc:
          "A digital reverb. Note, this is the V1 model, without that mash switch thing.",
        pictureUrl: "https://i.ytimg.com/vi/fkgrkij-jF0/hqdefault.jpg"
      },
      {
        id: 4,
        name: "Digitech Whammy V",
        pricePerDay: 10,
        type: "Pitch Shifter",
        shortDesc:
          "The OG pitch shifting device with an expression pedal for maximum control",
        pictureUrl:
          "https://images.reverb.com/image/upload/s--iFHQvPFC--/f_auto,t_large/v1554219808/powg8fdvs9bfhvkrpayo.jpg"
      },
      {
        id: 5,
        name: "Walrus Audio Julia",
        pricePerDay: 8,
        type: "Chorus/Vibrato",
        shortDesc: "/r/guitarpedal's choice of chorus",
        pictureUrl:
          "https://static.wixstatic.com/media/b221c7_1744e082f7074b62ac8ef791765e9ff6~mv2_d_2592_1728_s_2.jpg/v1/fill/w_2592,h_1728,al_c,q_85/b221c7_1744e082f7074b62ac8ef791765e9ff6~mv2_d_2592_1728_s_2.jpg"
      },
      {
        id: 6,
        name: "JPTR Kaleidoscope",
        pricePerDay: 12,
        type: "Chorus/Reverb",
        shortDesc:
          "A boutique multi reflector unit (drenches the signal in lofi chorus and reverb)",
        pictureUrl:
          "https://images.reverb.com/image/upload/s--Yi27YxQV--/f_auto,t_large/v1555876722/q8atf2hfa1nkoymp9er4.jpg"
      }
    ];

    // return { error: "", ads: JSON.parse(res.data) };
    return { error: "", ads: dummyResult };
  }

  public static async fetchAdById(adId: number): Promise<SingleAdFetchResult> {
    const res = await Axios.request<any>({
      url: `http://localhost:3001/events?id=${adId}`,
      transformResponse: (r: AdItem[]) => r
    });
    return { error: "", ad: JSON.parse(res.data)[0] };
  }
}
