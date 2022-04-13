import styled from "styled-components";
import { backgroundColor } from "../../../styles/mixin";

const BrandCardWrapper = styled.div`
  position: relative;
  width: 250px;
  height: 180px;
  background: ${backgroundColor.whiteCard};
  border-radius: 5px;
  white-space: normal;
  display: inline-block;
  margin-right: 26px;
`;

export { BrandCardWrapper };
