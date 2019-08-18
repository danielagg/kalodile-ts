import { all, fork } from "redux-saga/effects";

// Sagas
import adSaga from "../components/ads/state/saga";

export default function* rootSaga() {
  yield all([fork(adSaga)]);
}
