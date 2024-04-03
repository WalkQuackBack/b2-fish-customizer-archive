// todo: THIS IS NOT MAINTAINABLE FIND ANOTHER WAY TO FIX THE TYPE ERRORS LATER
type fishDataType = {
  accessory: "goatee" | "moustache" | "bow_tie" | "beard" | "handlebar" | "b2";
  accessoryColorPrimary: string;
  accessoryColorSecondary: string;
  accessoryColorTertiary: string;
  bodyColor: string;
  effect: "none" | "fire" | "green_fire" | "bubbles" | "storm";
  eyewear: "none" | "monocle" | "glasses" | "goggles" | "eyelashes";
  eyewearColorPrimary: string;
  eyewearColorSecondary: string;
  eyewearColorTertiary: string;
  fin: "none" | "default" | "jewel" | "gills";
  finColorPrimary: string;
  finColorSecondary: string;
  finColorTertiary: string;
  hat:
    | "none"
    | "cap"
    | "beanie"
    | "beach_hat"
    | "top_hat"
    | "banana"
    | "bucket_hat"
    | "beret"
    | "crown"
    | "back_cap"
    | "hard_hat"
    | "propeller_hat"
    | "chef_hat"
    | "weezy"
    | "viking"
    | "party_hat"
    | "soldier"
    | "jameson";
  hatColorPrimary: string;
  hatColorSecondary: string;
  hatColorTertiary: string;
  mouth: "none" | "default" | "lipstick" | "small" | "morty";
};

export default fishDataType;
