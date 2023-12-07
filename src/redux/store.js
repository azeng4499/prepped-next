import { configureStore } from "@reduxjs/toolkit";
import urlReducer from "./features/url-slice";
import transcriptionReducer from "./features/transcription-slice";

export const store = configureStore({
  reducer: { urlReducer, transcriptionReducer },
});

export default store;
