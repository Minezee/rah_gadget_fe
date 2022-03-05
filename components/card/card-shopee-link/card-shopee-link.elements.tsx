import styled from "styled-components";
import { backgroundColor } from "../../../styles/mixin";

const CardShopeeLinkWrapper = styled.div`
  width: 685px;
  height: 80px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background: ${backgroundColor.whiteCard};
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 6px 8px 20px;
`;

const CardShopeeLinkInfo = styled.div`
  & > h1 {
    margin: 6px 0;
  }
`

export { CardShopeeLinkWrapper, CardShopeeLinkInfo };
