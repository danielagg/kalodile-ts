import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Reducer
} from "redux";
import rootSaga from "./rootSaga";
import createSagaMiddleware from "@redux-saga/core";
import { actionMiddleware } from "./actionMiddleware";

// reducers
import AdsReducer, { AdsState } from "../components/ads/state/reducer";

const sagaMiddleware = createSagaMiddleware();

export interface RootStateStore {
  adsState: AdsState;
}

const composeEnhancers =
  ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25
    })) ||
  compose;

const rootReducer: Reducer<RootStateStore> = combineReducers({
  adsState: AdsReducer
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(actionMiddleware, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
