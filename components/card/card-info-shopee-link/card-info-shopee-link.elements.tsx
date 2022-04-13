import styled from "styled-components";

const CardInfoShopeeLinkWrapper = styled.div`
  display: grid;
  grid-template-columns: 180px auto 264px;
  grid-column-gap: 16px;
  padding: 16px 24px 25px 0;
  background: white;
  border-radius: 5px;
  margin: 0 0 8px 0;

  & > :nth-child(1) {
    // background: black;
    position: relative;
  }
  & > :nth-child(2) {
    // background: green;
    padding: 0 16px 0 0;
    text-align: justify;
  }
  & > :nth-child(3) {
    // background: blue;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export { CardInfoShopeeLinkWrapper };
