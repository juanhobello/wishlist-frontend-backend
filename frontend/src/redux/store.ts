import { api } from "./api";
import { combineReducers, Reducer, Action, Store } from "redux";
import { configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import productReducer, { productInitialState } from "./modules/products/slice";

type ApiState = ReturnType<typeof api.reducer>;

export interface AppState {
  products: typeof productInitialState;
  api: ApiState;
}

const rootReducer: Reducer<AppState, Action> = combineReducers({
  products: productReducer,
  [api.reducerPath]: api.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 0,
  stateReconciler: autoMergeLevel2,
  blacklist: [
    api.reducerPath,
  ],
};

const persistedReducer = persistReducer<AppState>(persistConfig, rootReducer);

export const store: Store<AppState> = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, unknown, Action> &
  typeof store.dispatch;
