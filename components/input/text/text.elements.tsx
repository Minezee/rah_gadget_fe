import styled from "styled-components";
import { backgroundColor, mainColor } from "../../../styles/mixin";

const InputTextWrapper = styled.div`
  width: 100%;
  background: ${backgroundColor.white};
  color: ${mainColor.primary};
  border-radius: 5px;
  padding: 4px 8px;
  display: flex;
  margin-bottom: 10px;

  & > input {
    border: none;
    background: none;
  }

  & > input:focus {
    outline: none;
  }

  & > input[type="number"] {
    width: 100%;
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 24px;
  }
`;

export { InputTextWrapper };
