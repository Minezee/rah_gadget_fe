import { CheckboxWrapper } from "./checkbox.elements";

const Checkbox = (props: any) => {
  return (
    <CheckboxWrapper>
      <input id={props.ids}
        type="checkbox"
        onChange={props.jalanFunc}
      />
      <label htmlFor={props.ids}>{props.label}</label>
    </CheckboxWrapper>
  );
};

export default Checkbox;
