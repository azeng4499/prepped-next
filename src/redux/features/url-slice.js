import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  url: null,
};

export const urlSlice = createSlice({
  name: "url",
  initialState: defaultState,
  reducers: {
    setVideoUrl: (state, action) => {
      return { url: action.payload };
    },
  },
});

export const { setVideoUrl } = urlSlice.actions;
export default urlSlice.reducer;
