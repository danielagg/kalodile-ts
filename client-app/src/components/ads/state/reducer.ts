import { AdActionTypes } from "./actions";
import { IAction } from "../../../redux/actionTypes";
import { AdItem } from "./types";

export interface AdsState {
  ads: AdItem[];
  selectedAd?: AdItem;
  error?: string;
  loading?: boolean;
}

const initialItemState: AdsState = {
  ads: [],
  selectedAd: undefined,
  error: "",
  loading: true
};

export default function AdsReducer(
  state: AdsState = initialItemState,
  action: IAction<AdActionTypes>
): AdsState {
  switch (action.type) {
    case AdActionTypes.FETCH_ADS:
    case AdActionTypes.FETCH_AD_BY_ID:
      return {
        ...state,
        error: "",
        loading: true
      };
    case AdActionTypes.FETCH_ADS_SUCCESS:
      return {
        ...state,
        loading: false,
        ads: action.ads
      };
    case AdActionTypes.FETCH_AD_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedAd: action.ad
      };
    case AdActionTypes.FETCH_ADS_FAILURE:
    case AdActionTypes.FETCH_AD_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
