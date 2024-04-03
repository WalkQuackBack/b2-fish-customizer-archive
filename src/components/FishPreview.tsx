import { useSelector } from "react-redux";
import { selectFishData } from "../app/features/fishData/fishDataSlice";

import customizationData from "../customizationData";

import "./FishPreview.css";

import fishDataType from "../fishDataType";

function hexToRgb(hex: string) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (r: any, g: any, b: any) => {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
}

function recolorFilter(hexColor: string) {
  const colorObj = hexToRgb(hexColor);
  const alpha = 100;

  const r = colorObj.r / 255;
  const g = colorObj.g / 255;
  const b = colorObj.b / 255;
  const a = alpha / 100;

  const recolorSvg = RECOLOR_SVG_TEMPLATE.replace(
    "R",
    String(Math.round((r + Number.EPSILON) * 1000) / 1000)
  )
    .replace("G", String(Math.round((g + Number.EPSILON) * 1000) / 1000))
    .replace("B", String(Math.round((b + Number.EPSILON) * 1000) / 1000))
    .replace("A", String(Math.round((a + Number.EPSILON) * 1000) / 1000));
  return `url('data:image/svg+xml;utf8,${recolorSvg}#recolor')`;
}

const RECOLOR_SVG_TEMPLATE: string = `
  <svg xmlns="http://www.w3.org/2000/svg">
    <filter id="recolor">
      <feColorMatrix type="matrix" values="
        0.3 0 0 0 R
        0.3 0 0 0 G
        0.3 0 0 0 B
        0 0 0 A 0
      "/>
    </filter>
  </svg>
`
  .replace(/\s*\n\s*/g, "")
  .replace(/[RGB]/g, "$& ");

function generateLayeredAccessoriesToDOM(fishData: fishDataType) {
  const accessories = [];
  accessories.push(
    <img
      src="./defaultFishBody.webp"
      style={{
        filter: recolorFilter(fishData.bodyColor),
      }}
      key={"fish body"}
    />,
    <img src="./defaultFishEyes.webp" key={"fish eyes"} />
  );

  // mouth
  if (
    customizationData.mouth.selectionOptionMetadata[fishData.mouth].includes(
      "nocolor"
    )
  ) {
    accessories.push(
      <img
        src={
          "./cosmetic_images_postprocess/mouth/" +
          fishData.mouth +
          " nocolor.webp"
        }
        key={fishData.mouth + " nocolor"}
      />
    );
  }
  // fin
  if (
    customizationData.fin.selectionOptionMetadata[fishData.fin].includes(
      "primary"
    )
  ) {
    accessories.push(
      <img
        src={
          "./cosmetic_images_postprocess/fin/" + fishData.fin + " primary.webp"
        }
        key={fishData.fin + " primary"}
        style={{
          filter: recolorFilter(fishData.finColorPrimary),
        }}
      />
    );
  }
  if (
    customizationData.fin.selectionOptionMetadata[fishData.fin].includes(
      "secondary"
    )
  ) {
    accessories.push(
      <img
        src={
          "./cosmetic_images_postprocess/fin/" +
          fishData.fin +
          " secondary.webp"
        }
        key={fishData.fin + " secondary"}
        style={{
          filter: recolorFilter(fishData.finColorSecondary),
        }}
      />
    );
  }

  if (
    customizationData.fin.selectionOptionMetadata[fishData.fin].includes(
      "tertiary"
    )
  ) {
    accessories.push(
      <img
        src={
          "./cosmetic_images_postprocess/fin/" + fishData.fin + " tertiary.webp"
        }
        key={fishData.fin + " tertiary"}
        style={{
          filter: recolorFilter(fishData.finColorTertiary),
        }}
      />
    );
  }

  if (
    customizationData.fin.selectionOptionMetadata[fishData.fin].includes(
      "nocolor"
    )
  ) {
    accessories.push(
      <img
        src={
          "./cosmetic_images_postprocess/fin/" + fishData.fin + " nocolor.webp"
        }
        key={fishData.fin + " nocolor"}
      />
    );
  }
  // hat
  if (
    customizationData.hat.selectionOptionMetadata[fishData.hat].includes(
      "primary"
    )
  ) {
    accessories.push(
      <img
        src={
          "./cosmetic_images_postprocess/hat/" + fishData.hat + " primary.webp"
        }
        key={fishData.hat + " primary"}
        style={{
          filter: recolorFilter(fishData.hatColorPrimary),
        }}
      />
    );
  }
  if (
    customizationData.hat.selectionOptionMetadata[fishData.hat].includes(
      "secondary"
    )
  ) {
    accessories.push(
      <img
        src={
          "./cosmetic_images_postprocess/hat/" +
          fishData.hat +
          " secondary.webp"
        }
        key={fishData.hat + " secondary"}
        style={{
          filter: recolorFilter(fishData.hatColorSecondary),
        }}
      />
    );
  }

  if (
    customizationData.hat.selectionOptionMetadata[fishData.hat].includes(
      "tertiary"
    )
  ) {
    accessories.push(
      <img
        src={
          "./cosmetic_images_postprocess/hat/" + fishData.hat + " tertiary.webp"
        }
        key={fishData.hat + " tertiary"}
        style={{
          filter: recolorFilter(fishData.hatColorTertiary),
        }}
      />
    );
  }

  if (
    customizationData.hat.selectionOptionMetadata[fishData.hat].includes(
      "nocolor"
    )
  ) {
    accessories.push(
      <img
        src={
          "./cosmetic_images_postprocess/hat/" + fishData.hat + " nocolor.webp"
        }
        key={fishData.hat + " nocolor"}
      />
    );
  }
  // accessory
  if (
    customizationData.accessory.selectionOptionMetadata[
      fishData.accessory
    ].includes("primary")
  ) {
    accessories.push(
      <img
        src={
          "./cosmetic_images_postprocess/accessory/" +
          fishData.accessory +
          " primary.webp"
        }
        key={fishData.accessory + " primary"}
        style={{
          filter: recolorFilter(fishData.accessoryColorPrimary),
        }}
      />
    );
  }
  if (
    customizationData.accessory.selectionOptionMetadata[
      fishData.accessory
    ].includes("secondary")
  ) {
    accessories.push(
      <img
        src={
          "./cosmetic_images_postprocess/accessory/" +
          fishData.accessory +
          " secondary.webp"
        }
        key={fishData.accessory + " secondary"}
        style={{
          filter: recolorFilter(fishData.accessoryColorSecondary),
        }}
      />
    );
  }

  if (
    customizationData.accessory.selectionOptionMetadata[
      fishData.accessory
    ].includes("tertiary")
  ) {
    accessories.push(
      <img
        src={
          "./cosmetic_images_postprocess/accessory/" +
          fishData.accessory +
          " tertiary.webp"
        }
        key={fishData.accessory + " tertiary"}
        style={{
          filter: recolorFilter(fishData.accessoryColorTertiary),
        }}
      />
    );
  }

  if (
    customizationData.accessory.selectionOptionMetadata[
      fishData.accessory
    ].includes("nocolor")
  ) {
    accessories.push(
      <img
        src={
          "./cosmetic_images_postprocess/accessory/" +
          fishData.accessory +
          " nocolor.webp"
        }
        key={fishData.accessory + " nocolor"}
      />
    );
  }

  // eyewear
  if (
    customizationData.eyewear.selectionOptionMetadata[
      fishData.eyewear
    ].includes("primary")
  ) {
    accessories.push(
      <img
        src={
          "./cosmetic_images_postprocess/eyewear/" +
          fishData.eyewear +
          " primary.webp"
        }
        key={fishData.eyewear + " primary"}
        style={{
          filter: recolorFilter(fishData.eyewearColorPrimary),
        }}
      />
    );
  }
  if (
    customizationData.eyewear.selectionOptionMetadata[
      fishData.eyewear
    ].includes("secondary")
  ) {
    accessories.push(
      <img
        src={
          "./cosmetic_images_postprocess/eyewear/" +
          fishData.eyewear +
          " secondary.webp"
        }
        key={fishData.eyewear + " secondary"}
        style={{
          filter: recolorFilter(fishData.eyewearColorSecondary),
        }}
      />
    );
  }

  if (
    customizationData.eyewear.selectionOptionMetadata[
      fishData.eyewear
    ].includes("tertiary")
  ) {
    accessories.push(
      <img
        src={
          "./cosmetic_images_postprocess/eyewear/" +
          fishData.eyewear +
          " tertiary.webp"
        }
        key={fishData.eyewear + " tertiary"}
        style={{
          filter: recolorFilter(fishData.eyewearColorTertiary),
        }}
      />
    );
  }

  if (
    customizationData.eyewear.selectionOptionMetadata[
      fishData.eyewear
    ].includes("nocolor")
  ) {
    accessories.push(
      <img
        src={
          "./cosmetic_images_postprocess/eyewear/" +
          fishData.eyewear +
          " nocolor.webp"
        }
        key={fishData.eyewear + " nocolor"}
      />
    );
  }

  // effect
  if (
    customizationData.effect.selectionOptionMetadata[fishData.effect].includes(
      "nocolor"
    )
  ) {
    accessories.push(
      <img
        src={
          "./cosmetic_images_postprocess/effect/" +
          fishData.effect +
          " nocolor.webp"
        }
        key={fishData.effect + " nocolor"}
      />
    );
  }
  return accessories;
}

function FishPreview() {
  const fishData: fishDataType = useSelector(selectFishData);
  const accessories = generateLayeredAccessoriesToDOM(fishData);

  return (
    <>
      <div id="fish_preview" title="Fish preview">
        <div id="fish_preview_children" aria-hidden>
          {/* Layered Accessories */}
          {accessories}
        </div>
      </div>
    </>
  );
}

export default FishPreview;
