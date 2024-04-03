import { createSlice } from "@reduxjs/toolkit";
import customizationData from "../../../customizationData";
export const fishDataSlice = createSlice({
  name: "fishData",
  initialState: {
    accessory: customizationData.accessory.defaultValue,
    accessoryColorPrimary: customizationData.accessoryColorPrimary.defaultValue,
    accessoryColorSecondary:
      customizationData.accessoryColorSecondary.defaultValue,
    accessoryColorTertiary:
      customizationData.accessoryColorTertiary.defaultValue,
    bodyColor: customizationData.bodyColor.defaultValue,
    effect: customizationData.effect.defaultValue,
    eyewear: customizationData.eyewear.defaultValue,
    eyewearColorPrimary: customizationData.eyewearColorPrimary.defaultValue,
    eyewearColorSecondary: customizationData.eyewearColorSecondary.defaultValue,
    eyewearColorTertiary: customizationData.eyewearColorTertiary.defaultValue,
    fin: customizationData.fin.defaultValue,
    finColorPrimary: customizationData.finColorPrimary.defaultValue,
    finColorSecondary: customizationData.finColorSecondary.defaultValue,
    finColorTertiary: customizationData.finColorTertiary.defaultValue,
    hat: customizationData.hat.defaultValue,
    hatColorPrimary: customizationData.hatColorPrimary.defaultValue,
    hatColorSecondary: customizationData.hatColorSecondary.defaultValue,
    hatColorTertiary: customizationData.hatColorTertiary.defaultValue,
    mouth: customizationData.mouth.defaultValue,
  },
  reducers: {
    updateData: (state, action) => {
      const payload = action.payload;
      const identifier:
        | "accessory"
        | "accessoryColorPrimary"
        | "accessoryColorSecondary"
        | "accessoryColorTertiary"
        | "bodyColor"
        | "effect"
        | "eyewear"
        | "eyewearColorPrimary"
        | "eyewearColorSecondary"
        | "eyewearColorTertiary"
        | "fin"
        | "finColorPrimary"
        | "finColorSecondary"
        | "finColorTertiary"
        | "hat"
        | "hatColorPrimary"
        | "hatColorSecondary"
        | "hatColorTertiary"
        | "mouth" = payload.identifier;
      state[identifier] = payload.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateData } = fishDataSlice.actions;
export const selectFishData = (state: any) => state.fishData;

export default fishDataSlice.reducer;
