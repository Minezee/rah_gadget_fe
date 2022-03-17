import styled from "styled-components";
import { backgroundColor } from "../../../styles/mixin";

const CardLaptopWrapper = styled.div`
  width: 250px;
  height: 320px;
  background: ${backgroundColor.whiteCard};
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 16px 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

export { CardLaptopWrapper };
