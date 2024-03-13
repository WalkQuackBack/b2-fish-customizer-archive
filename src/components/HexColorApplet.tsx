import React from "react";
import { useState } from "react";
import CopyToClipboard from "./CopyToClipboardBtn";

import { ColorPicker } from "antd";
import type { ColorPickerProps, GetProp } from "antd";
type Color = GetProp<ColorPickerProps, "value">;

function HexColorApplet() {
  const [colorHex, setColorHex] = useState<Color>("#1677ff");

  const hexString = React.useMemo<string>(
    () => (typeof colorHex === "string" ? colorHex : colorHex?.toHexString()),
    [colorHex]
  );

  return (
    <>
      <div className="hexColorApplet">
        <ColorPicker
          disabledAlpha
          showText
          defaultValue="#1677ff"
          onChange={setColorHex}
        />

        <CopyToClipboard copyText={hexString} />
      </div>
    </>
  );
}

export default HexColorApplet;
