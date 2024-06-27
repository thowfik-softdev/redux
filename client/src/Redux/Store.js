// src/Redux/Store.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import {thunk} from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { Reducer } from "./Reducer"; // Adjust the path if necessary

const rootReducer = combineReducers({
  BankData: Reducer
});

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
export default store;
