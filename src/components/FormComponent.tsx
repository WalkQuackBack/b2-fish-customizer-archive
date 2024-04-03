import { ColorPicker, Select } from "antd";

import { useDispatch, useSelector } from "react-redux";
import {
  selectFishData,
  updateData,
} from "../app/features/fishData/fishDataSlice";

import fishDataType from "../fishDataType";
import customizationData from "../customizationData";

function FormComponent(props: {
  component: "color" | "dropdown";
  label: string;
  identifier: string;
  defaultValue: string;
  selectionOptions?: { label: string; value: string }[];
}) {
  const dispatch = useDispatch();

  const fishData: fishDataType = useSelector(selectFishData);
  switch (props.component) {
    case "color":
      // Leaving the type errors here I'm too tired to fix them 😓
      const selfData = customizationData[props.identifier];
      const selectionOptionMetadata =
        (selfData.linkedTo &&
          customizationData[selfData.linkedTo].selectionOptionMetadata) ||
        undefined;

      const colorPickerDisabled =
        (selfData.linkedTo &&
          !selectionOptionMetadata[fishData[selfData.linkedTo]].find(
            (element: string) => element == selfData.colorType
          )) ||
        false;

      return (
        <div className="formElementContainer colorContainer">
          <label htmlFor={props.identifier}>{props.label}</label>
          <ColorPicker
            onChange={(_, hex) => {
              dispatch(
                updateData({
                  identifier: props.identifier,
                  value: hex,
                })
              );
            }}
            showText
            disabledAlpha
            disabled={colorPickerDisabled}
            defaultValue={props.defaultValue}
          ></ColorPicker>
        </div>
      );
    case "dropdown":
      return (
        <div className="formElementContainer">
          <label htmlFor={props.identifier}>{props.label}</label>
          <Select
            options={props.selectionOptions}
            showSearch
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            id={props.identifier}
            defaultValue={props.defaultValue}
            onChange={(value: string) => {
              dispatch(
                updateData({
                  identifier: props.identifier,
                  value: value,
                })
              );
            }}
          ></Select>
        </div>
      );
    default:
      throw "must provide a component type!";
  }
}

export default FormComponent;
