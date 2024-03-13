import customizationOptions from "../customizationOptions";
import customizationLabels from "../customizationLabels";
import customizationDefaults from "../customizationDefaults";

import { useDispatch } from "react-redux";

import FormRenderer from "@data-driven-forms/react-form-renderer/form-renderer";

import componentMapper from "@data-driven-forms/ant-component-mapper/component-mapper";
import FormTemplate from "@data-driven-forms/ant-component-mapper/form-template";

import { updateData } from "../app/features/fishData/fishDataSlice";

let schemaFields: {
  component: string;
  label: string;
  name: string;
  options: any[];
}[] = [];

const validatorMapper = {
  required: () => (value: number) => value ? undefined : "Required",
  hexColor: () => (value: string) =>
    value && value.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)
      ? undefined
      : "Must be a hex color",
};

function pushDataToForm() {
  Object.entries(customizationOptions).forEach(([key, value]) => {
    let selectionOptions: { label: string; value: string }[] = [];
    value.forEach((subvalue) => {
      selectionOptions.push({
        label: subvalue,
        value: subvalue,
      });
    });

    let selectionEntry = {
      component: "select",
      label: customizationLabels[key],
      name: key,
      isSearchable: true,
      options: selectionOptions,
      validate: [{ type: "required" }],
      initialValue: customizationDefaults[key],
    };

    if (key.toLowerCase().search("color") != -1) {
      selectionEntry.component = "text-field";
      selectionEntry.validate = [{ type: "hexColor" }];
    }

    schemaFields.push(selectionEntry);
  });
}

pushDataToForm();

function CustomizationPanel() {
  let schema = {
    fields: schemaFields,
  };
  const dispatch = useDispatch();

  return (
    <FormRenderer
      FormTemplate={FormTemplate}
      schema={schema}
      validatorMapper={validatorMapper}
      componentMapper={componentMapper}
      onSubmit={(data): any => {
        dispatch(updateData(data));
      }}
    />
  );
}

export default CustomizationPanel;
