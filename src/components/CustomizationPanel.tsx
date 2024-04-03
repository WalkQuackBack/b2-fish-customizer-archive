import customizationData from "../customizationData";

import FormComponent from "./FormComponent";

import { useDispatch } from "react-redux";
import { updateData } from "../app/features/fishData/fishDataSlice";
import { JSX } from "react/jsx-runtime";

let formComponents: JSX.Element[] = [];

function pushDataToForm() {
  // index through the data and get all required data
  Object.entries(customizationData).forEach(([identifier, data]) => {
    const defaultValue = data.defaultValue;
    const label = data.label;
    const selectionOptionsData = data.selectionOptions;

    let selectionOptions: { label: string; value: string }[] = [];
    selectionOptionsData.forEach((subvalue) => {
      selectionOptions.push({
        label: subvalue,
        value: subvalue,
      });
    });

    const foundColor = identifier.toLowerCase().search("color") != -1;
    let selectionEntry = (
      <FormComponent
        component={(foundColor && "color") || "dropdown"}
        label={label}
        identifier={identifier}
        defaultValue={defaultValue}
        selectionOptions={selectionOptions}
        key={identifier}
      ></FormComponent>
    );

    formComponents.push(selectionEntry);
  });
}

pushDataToForm();

function CustomizationPanel() {
  const dispatch = useDispatch();

  dispatch(updateData({}));

  return <>{formComponents}</>;
}

export default CustomizationPanel;
