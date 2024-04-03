// defaultValue: inital value
// label: display label
// selectionOptions: options for dropdown
// selectionOptionMetadata: what color options this item supports
//    > Primary: supports 1 colour
//    > Primary + Secondary or Primary + Tertiary: supports 2 colours
//    > Primary + Secondary + Tertiary: support all three colours
//    > NoColor: No color filter
//    > NoRender: Don't render anything for this object
// linkedTo: what dropdown this color picker is linked to
// colorType: what color type this is (either primary, secondary, tertiary)

const customizationData = {
  bodyColor: {
    defaultValue: "#FF0000",
    label: "Body Color",
    selectionOptions: [],
    selectionOptionMetadata: {},
    linkedTo: undefined,
    colorType: "primary",
  },
  hat: {
    defaultValue: "none",
    label: "Hat",
    selectionOptions: [
      "none",
      "cap",
      "beanie",
      "beach_hat",
      "top_hat",
      "banana",
      "bucket_hat",
      "beret",
      "crown",
      "back_cap",
      "hard_hat",
      "propeller_hat",
      "chef_hat",
      "weezy",
      "viking",
      "party_hat",
      "soldier",
      "jameson",
    ],
    selectionOptionMetadata: {
      none: ["norender"],
      cap: ["primary"],
      beanie: ["primary"],
      beach_hat: ["primary", "secondary"],
      top_hat: ["primary", "secondary"],
      banana: ["primary", "secondary"],
      bucket_hat: ["primary"],
      beret: ["primary"],
      crown: ["primary"],
      back_cap: ["primary"],
      hard_hat: ["primary"],
      propeller_hat: ["nocolor"],
      chef_hat: ["primary"],
      weezy: ["primary"],
      viking: ["primary", "secondary", "tertiary"],
      party_hat: ["primary", "secondary"],
      soldier: ["primary"],
      jameson: ["primary", "secondary"],
    },
  },
  hatColorPrimary: {
    defaultValue: "#FF6600",
    label: "Hat Primary",
    selectionOptions: [],
    selectionOptionMetadata: {},
    linkedTo: "hat",
    colorType: "primary",
  },
  hatColorSecondary: {
    defaultValue: "#C20492",
    label: "Hat Secondary",
    selectionOptions: [],
    selectionOptionMetadata: {},
    linkedTo: "hat",
    colorType: "secondary",
  },
  hatColorTertiary: {
    defaultValue: "#083D77",
    label: "Hat Tertiary",
    selectionOptions: [],
    selectionOptionMetadata: {},
    linkedTo: "hat",
    colorType: "tertiary",
  },
  accessory: {
    defaultValue: "none",
    label: "Accessory",
    selectionOptions: [
      "none",
      "goatee",
      "moustache",
      "bow_tie",
      "beard",
      "handlebar",
      "b2",
    ],
    selectionOptionMetadata: {
      none: ["norender"],
      goatee: ["primary"],
      moustache: ["primary"],
      bow_tie: ["primary"],
      beard: ["primary"],
      handlebar: ["primary"],
      b2: ["primary"],
    },
  },

  accessoryColorPrimary: {
    defaultValue: "#FF6600",
    label: "Accessory Primary",
    selectionOptions: [],
    selectionOptionMetadata: {},
    linkedTo: "accessory",
    colorType: "primary",
  },
  accessoryColorSecondary: {
    defaultValue: "#FF6600",
    label: "Accessory Secondary",
    selectionOptions: [],
    selectionOptionMetadata: {},
    linkedTo: "accessory",
    colorType: "secondary",
  },
  accessoryColorTertiary: {
    defaultValue: "#083D77",
    label: "Accessory Tertiary",
    selectionOptions: [],
    selectionOptionMetadata: {},
    linkedTo: "accessory",
    colorType: "tertiary",
  },

  eyewear: {
    defaultValue: "none",
    label: "Eyewear",
    selectionOptions: ["none", "monocle", "glasses", "goggles", "eyelashes"],
    selectionOptionMetadata: {
      none: ["norender"],
      monocle: ["primary", "secondary"],
      glasses: ["primary"],
      goggles: ["primary"],
      eyelashes: ["nocolor"],
    },
  },
  eyewearColorPrimary: {
    defaultValue: "#FF6600",
    label: "Eyewear Primary",
    selectionOptions: [],
    selectionOptionMetadata: {},
    linkedTo: "eyewear",
    colorType: "primary",
  },
  eyewearColorSecondary: {
    defaultValue: "#FF6600",
    label: "Eyewear Secondary",
    selectionOptions: [],
    selectionOptionMetadata: {},
    linkedTo: "eyewear",
    colorType: "secondary",
  },
  eyewearColorTertiary: {
    defaultValue: "#083D77",
    label: "Eyewear Tertiary",
    selectionOptions: [],
    selectionOptionMetadata: {},
    linkedTo: "eyewear",
    colorType: "tertiary",
  },

  mouth: {
    defaultValue: "default",
    label: "Mouth",
    selectionOptions: ["none", "default", "lipstick", "small", "morty"],
    selectionOptionMetadata: {
      none: ["norender"],
      default: ["nocolor"],
      lipstick: ["nocolor"],
      small: ["nocolor"],
      morty: ["nocolor"],
    },
  },

  fin: {
    defaultValue: "none",
    label: "Fin",
    selectionOptions: ["none", "default", "jewel", "gills"],
    selectionOptionMetadata: {
      none: ["norender"],
      default: ["primary"],
      jewel: ["primary"],
      gills: ["primary"],
    },
  },
  finColorPrimary: {
    defaultValue: "#8C1C13",
    label: "Fin Primary",
    selectionOptions: [],
    selectionOptionMetadata: {},
    linkedTo: "fin",
    colorType: "primary",
  },
  finColorSecondary: {
    defaultValue: "#8C1C13",
    label: "Fin Secondary",
    selectionOptions: [],
    selectionOptionMetadata: {},
    linkedTo: "fin",
    colorType: "secondary",
  },
  finColorTertiary: {
    defaultValue: "#8C1C13",
    label: "Fin Tertiary",
    selectionOptions: [],
    selectionOptionMetadata: {},
    linkedTo: "fin",
    colorType: "tertiary",
  },

  effect: {
    defaultValue: "none",
    label: "Effect (Banana Fish Cult only)",
    selectionOptions: ["none", "fire", "green_fire", "bubbles", "storm"],
    selectionOptionMetadata: {
      none: ["norender"],
      fire: ["nocolor"],
      green_fire: ["nocolor"],
      bubbles: ["nocolor"],
      storm: ["nocolor"],
    },
  },
};

export default customizationData;
