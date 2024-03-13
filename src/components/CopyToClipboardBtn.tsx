import { Button } from "antd";
import { CopyOutlined } from "@ant-design/icons";

function ColorPicker(props: any) {
  function onCopy() {
    navigator.clipboard.writeText(props.copyText);
  }

  return (
    <>
      <Button
        className="copyToClipboard"
        onClick={onCopy}
        icon={<CopyOutlined />}
      />
    </>
  );
}

export default ColorPicker;
