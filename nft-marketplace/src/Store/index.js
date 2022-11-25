import { configureStore } from "@reduxjs/toolkit";
import modalsReducer from "./reducers/modelReducer";

export const store = configureStore({
  reducer: modalsReducer,
});
