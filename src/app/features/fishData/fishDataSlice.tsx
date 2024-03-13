import { createSlice } from "@reduxjs/toolkit";

export const fishDataSlice = createSlice({
  name: "fishData",
  initialState: {
    bodyColor: "#FF0000",
    hatColor: "#fffd16",
    hat: "none",
    accessoryColor: "#fffd16",
    accessory: "none",
    eyewearColor: "#fffd16",
    eyewear: "none",
    mouth: "default",
    finColor: "#fffd16",
    fin: "none",
    effect: "none",
  },
  reducers: {
    updateData: (state, action) => {
      const payload = action.payload;
      state.bodyColor = payload.bodyColor;
      state.hatColor = payload.hatColor;
      state.hat = payload.hat;
      state.accessoryColor = payload.accessoryColor;
      state.accessory = payload.accessory;
      state.eyewearColor = payload.eyewearColor;
      state.eyewear = payload.eyewear;
      state.mouth = payload.mouth;
      state.finColor = payload.finColor;
      state.fin = payload.fin;
      state.effect = payload.effect;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateData } = fishDataSlice.actions;
export const selectFishData = (state: any) => state.fishData;

export default fishDataSlice.reducer;
