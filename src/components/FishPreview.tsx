import { useSelector } from "react-redux";
import { selectFishData } from "../app/features/fishData/fishDataSlice";

import "./FishPreview.css";

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

function recolorFilter(colorObj: { r: any; g: any; b: any }) {
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

function FishPreview() {
  const fishData = useSelector(selectFishData);

  return (
    <>
      <div id="fish_preview">
        <div id="fish_preview_children">
          {/* Layered Accessories */}
          <img
            src="/defaultFishBody.webp"
            title="Fish body"
            style={{
              filter: recolorFilter(hexToRgb(fishData.bodyColor)),
            }}
          />
          <img src="/defaultFishEyes.webp" title="Fish eyes" />

          {fishData.mouth != "none" && (
            <img
              src={
                "/cosmetic_images_postprocess/mouth/" + fishData.mouth + ".webp"
              }
              title={"Fish mouth " + fishData.mouth}
            />
          )}

          {fishData.fin != "none" && (
            <img
              src={"/cosmetic_images_postprocess/fin/" + fishData.fin + ".webp"}
              title={"Fish fin " + fishData.fin}
              style={{
                filter: recolorFilter(hexToRgb(fishData.finColor)),
              }}
            />
          )}

          {fishData.hat != "none" && (
            <img
              src={"/cosmetic_images_postprocess/hat/" + fishData.hat + ".webp"}
              title={"Fish hat " + fishData.hat}
              style={{
                filter: recolorFilter(hexToRgb(fishData.hatColor)),
              }}
            />
          )}

          {fishData.accessory != "none" && (
            <img
              src={
                "/cosmetic_images_postprocess/accessory/" +
                fishData.accessory +
                ".webp"
              }
              title={"Fish accessory " + fishData.accessory}
              style={{
                filter: recolorFilter(hexToRgb(fishData.accessoryColor)),
              }}
            />
          )}

          {fishData.eyewear != "none" && (
            <img
              src={
                "/cosmetic_images_postprocess/eyewear/" +
                fishData.eyewear +
                ".webp"
              }
              title={"Fish eyewear " + fishData.eyewear}
              style={{
                filter: recolorFilter(hexToRgb(fishData.eyewearColor)),
              }}
            />
          )}
          {fishData.effect != "none" && (
            <img
              src={
                "/cosmetic_images_postprocess/effect/" +
                fishData.effect +
                ".webp"
              }
              title={"Fish effect " + fishData.effect}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default FishPreview;
