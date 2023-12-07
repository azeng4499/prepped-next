import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  transcription: null,
};

export const transcriptionSlice = createSlice({
  name: "url",
  initialState: defaultState,
  reducers: {
    setTranscription: (state, action) => {
      return { transcription: action.payload };
    },
  },
});

export const { setTranscription } = transcriptionSlice.actions;
export default transcriptionSlice.reducer;
