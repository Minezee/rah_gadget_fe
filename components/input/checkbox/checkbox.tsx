import { ChangeEventHandler } from "react";
import { CheckboxWrapper } from "./Checkbox.elements";

interface CheckboxType {
  ids: string,
  jalanFunc: ChangeEventHandler
  label: string,
  status: boolean
}

const Checkbox = ({ids, jalanFunc, label}: CheckboxType) => {
  return (
    <CheckboxWrapper>
      <input id={ids}
        type="checkbox"
        onChange={jalanFunc}
      />
      <label htmlFor={ids}>{label}</label>
    </CheckboxWrapper>
  );
};

export default Checkbox;
