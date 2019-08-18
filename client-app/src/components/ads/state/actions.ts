import {
  ErrorAction,
  PendingAction,
  SuccessAction
} from "../../../redux/actionTypes";

export enum AdActionTypes {
  FETCH_ADS = "FETCH_ADS",
  FETCH_ADS_SUCCESS = "FETCH_ADS_SUCCESS",
  FETCH_ADS_FAILURE = "FETCH_ADS_FAILURE",
  FETCH_AD_BY_ID = "FETCH_AD_BY_ID",
  FETCH_AD_BY_ID_SUCCESS = "FETCH_AD_BY_ID_SUCCESS",
  FETCH_AD_BY_ID_FAILURE = "FETCH_AD_BY_ID_FAILURE"
}

export class FetchAds extends PendingAction<AdActionTypes> {
  public readonly type = AdActionTypes.FETCH_ADS;
}

export class FetchAdsSuccess extends SuccessAction<AdActionTypes> {
  public readonly type = AdActionTypes.FETCH_ADS_SUCCESS;
}

export class FetchAdsFailure extends ErrorAction<AdActionTypes> {
  public readonly type = AdActionTypes.FETCH_ADS_FAILURE;
}

export class FetchAdById extends PendingAction<AdActionTypes> {
  public readonly type = AdActionTypes.FETCH_AD_BY_ID;

  constructor(public adId: number) {
    super();
  }
}

export class FetchAdByIdSuccess extends SuccessAction<AdActionTypes> {
  public readonly type = AdActionTypes.FETCH_AD_BY_ID_SUCCESS;
}

export class FetchAdByIdFailure extends ErrorAction<AdActionTypes> {
  public readonly type = AdActionTypes.FETCH_AD_BY_ID_FAILURE;
}
