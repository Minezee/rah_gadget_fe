import styled from "styled-components";

const RemoveButtonStyle = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonLaptopStyle = styled(RemoveButtonStyle)`
  background: none;
  color: red;
  border: 2px solid red;
  padding: 20px 32px;

  > svg {
    display: none;
    // display: block
  }

  &:hover > svg {
    display: block;
  }
`;

const ButtonOtherStyle = styled.button``;

const ButtonCTAStyle = styled.button``;

const ButtonCarouselLeftStyle = styled.button``;

const ButtonCarouselRightStyle = styled.button``;

export {
  ButtonLaptopStyle,
  ButtonOtherStyle,
  ButtonCTAStyle,
  ButtonCarouselLeftStyle,
  ButtonCarouselRightStyle,
};
