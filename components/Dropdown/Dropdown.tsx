import {
  DropdownWrapper,
  DropdownLabel,
  DropdownItems,
  ItemCheckbox,
} from "./Dropdown.elements";
import Checkbox from "../input/checkbox/Checkbox";
import { useState } from "react";

interface DropdownType {
  children: React.ReactChild;
  style?: Object,
  label: String
}

const Dropdown = ({ children, style, label }: DropdownType) => {
  const [show, setShow] = useState(false);

  const status = [
    {
      label: "label 1",
      status: false,
    },
    {
      label: "label 2",
      status: false,
    },
  ];

  return (
    <DropdownWrapper style={style}>
      <DropdownLabel
        onClick={() => {
          setShow(!show);
        }}
      >
        <p>{children}</p>
        {show ? (
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.77917 11.6471C9.43276 12.1177 8.56675 12.1177 8.22034 11.6471L0.426119 1.05882C0.0797087 0.588235 0.512722 0 1.20554 0H16.794C17.4869 0 17.9199 0.588235 17.5734 1.05882L9.77917 11.6471Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.22083 0.352942C8.56724 -0.11767 9.43325 -0.11767 9.77966 0.352942L17.5739 10.9412C17.9203 11.4118 17.4873 12 16.7945 12H1.20596C0.51314 12 0.0801487 11.4118 0.426558 10.9412L8.22083 0.352942Z"
              fill="white"
            />
          </svg>
        )}
      </DropdownLabel>
      <DropdownItems show={show}>
        <ItemCheckbox>
          {status.map((stat, idx) => (
            <Checkbox
              jalanFunc={() => {
                status[idx].status = !status[idx].status;
              }}
              key={idx}
              ids={idx.toString() + "type" + label}
              status={stat.status}
              label={stat.label}
            />
          ))}
        </ItemCheckbox>
        {/* <button
          onClick={() => {
            console.log(status);
          }}
        >
          Klik show all
        </button> */}
      </DropdownItems>
    </DropdownWrapper>
  );
};

export default Dropdown;
