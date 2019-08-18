import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { AdService } from "./service";
import {
  AdActionTypes,
  FetchAds,
  FetchAdsSuccess,
  FetchAdsFailure,
  FetchAdById,
  FetchAdByIdSuccess,
  FetchAdByIdFailure
} from "./actions";

export function* fetchAds(action: FetchAds): any {
  try {
    const result = yield call(AdService.fetchAds);
    yield put(new FetchAdsSuccess({ ads: result.ads }));
  } catch (error) {
    yield put(new FetchAdsFailure({ error: error }));
  }
}

function* watchAdsFetch() {
  yield takeLatest(AdActionTypes.FETCH_ADS, fetchAds);
}

export function* fetchAdById(action: FetchAdById): any {
  try {
    const result = yield call(AdService.fetchAdById, action.adId);
    yield put(new FetchAdByIdSuccess({ ad: result.ad }));
  } catch (error) {
    yield put(new FetchAdByIdFailure({ error: error }));
  }
}

function* watchAdFetchById() {
  yield takeLatest(AdActionTypes.FETCH_AD_BY_ID, fetchAdById);
}

export default function* adSaga() {
  yield all([fork(watchAdsFetch), fork(watchAdFetchById)]);
}
