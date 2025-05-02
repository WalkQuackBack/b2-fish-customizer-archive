import { useSelector } from "react-redux";
import { selectFishData } from "../app/features/fishData/fishDataSlice";

import { Input } from "antd";
import CopyToClipboard from "./CopyToClipboardBtn";

function FishCommandOutput() {
  const fishData: {
    accessory: string;
    accessoryColorPrimary: string;
    accessoryColorSecondary: string;
    accessoryColorTertiary: string;
    bodyColor: string;
    effect: string;
    eyewear: string;
    eyewearColorPrimary: string;
    eyewearColorSecondary: string;
    eyewearColorTertiary: string;
    fin: string;
    finColorPrimary: string;
    finColorSecondary: string;
    finColorTertiary: string;
    hat: string;
    hatColorPrimary: string;
    hatColorSecondary: string;
    hatColorTertiary: string;
    mouth: string;
  } = useSelector(selectFishData);

  const selectionArray = ["body:" + fishData.bodyColor];
  selectionArray.push(
    "hat:" +
      fishData.hat +
      fishData.hatColorPrimary +
      fishData.hatColorSecondary +
      fishData.hatColorTertiary
  );

  selectionArray.push(
    "accessory:" +
      fishData.accessory +
      fishData.accessoryColorPrimary +
      fishData.accessoryColorSecondary +
      fishData.accessoryColorTertiary
  );
  selectionArray.push(
    "eyewear:" +
      fishData.eyewear +
      fishData.eyewearColorPrimary +
      fishData.eyewearColorSecondary +
      fishData.eyewearColorTertiary
  );
  selectionArray.push("mouth:" + fishData.mouth);
  selectionArray.push(
    "fin:" +
      fishData.fin +
      fishData.finColorPrimary +
      fishData.finColorSecondary +
      fishData.finColorTertiary
  );
  selectionArray.push("effect:" + fishData.effect);

  const output = "/fish " + selectionArray.join(",");
  return (
    <>
      <div id="fish_command_output">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "12px",
          }}
        >
          <Input value={output} readOnly></Input>
          <CopyToClipboard copyText={output} />
        </div>
      </div>
    </>
  );
}

export default FishCommandOutput;
