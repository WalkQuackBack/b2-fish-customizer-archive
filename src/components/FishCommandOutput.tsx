import { useSelector } from "react-redux";
import { selectFishData } from "../app/features/fishData/fishDataSlice";

import { Input } from "antd";
import CopyToClipboard from "./CopyToClipboardBtn";

function FishCommandOutput() {
  const fishData: {
    bodyColor: string;
    hatColor: string;
    hat: string;
    accessoryColor: string;
    accessory: string;
    eyewearColor: string;
    eyewear: string;
    mouth: string;
    finColor: string;
    fin: string;
    effect: string;
  } = useSelector(selectFishData);

  const selectionArray = ["body:" + fishData.bodyColor];
  selectionArray.push("hat:" + fishData.hat + fishData.hatColor);
  selectionArray.push(
    "accessory:" + fishData.accessory + fishData.accessoryColor
  );
  selectionArray.push("eyewear:" + fishData.eyewear + fishData.eyewearColor);
  selectionArray.push("mouth:" + fishData.mouth);
  selectionArray.push("fin:" + fishData.fin + fishData.finColor);
  selectionArray.push("effect:" + fishData.effect);

  const output = "!fish " + selectionArray.join(",");
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
          <CopyToClipboard
            copyText={`!fish body:${fishData.bodyColor},hat:${fishData.hat}${fishData.hatColor},accessory:${fishData.accessory}${fishData.accessoryColor},eyewear:${fishData.eyewear}${fishData.eyewearColor},mouth:${fishData.mouth},fin:${fishData.fin}${fishData.finColor},effect:${fishData.effect}`}
          />
        </div>
      </div>
    </>
  );
}

export default FishCommandOutput;
