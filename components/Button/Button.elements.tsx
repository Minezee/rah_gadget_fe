import styled from "styled-components";
import { mainColor, textColor } from "../../styles/mixin";

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

const ButtonArrowStyle = styled(RemoveButtonStyle)`
  height: 64px;
  background: none;
  color: ${mainColor.secondary};
  border: 2px solid ${mainColor.secondary};
  box-sizing: border-box;
  border-radius: 5px;
  padding: 20px 32px;
  transition: 0.2s;

  > svg {
    display: none;
  }

  &:hover {
    color: ${textColor.white};
    background: ${mainColor.secondary};
    transition: 0.2s;
  }

  &:active {
    background: ${mainColor.secondary};
  }

  &:hover > svg {
    transition: 0.2s;
    display: block;
  }
`;

const ButtonCTAStyle = styled(RemoveButtonStyle)`
  height: 64px;
  background: none;
  color: ${textColor.white};
  border: 2px solid ${mainColor.secondary};
  box-sizing: border-box;
  border-radius: 5px;
  padding: 20px 32px;
  transition: 0.2s;

  &:hover {
    background: ${mainColor.secondary};
    transition: 0.2s;
  }

  &:active {
    background: ${mainColor.secondary};
  }
`;

const ButtonCarouselStyle = styled(RemoveButtonStyle)`
  width: 64px;
  height: 64px;
  background-color: ${mainColor.secondary};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;

  &:hover {
    transition: 0.2s;
    background-color: #c20c0a;
  }

  &:active {
    background-color: #c20c0a;
  }
`;

const ButtonLinkStyle = styled(RemoveButtonStyle)`
  height: 64px;
  box-sizing: border-box;
  padding: 20px 32px;
  background: #ef4e2d;
  border-radius: 5px;
  color: ${textColor.white};

  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.2s;

  & > .button-margin {
    margin: 0 10px;
  }

  &:hover {
    background: #bd2a0f;
    transition: 0.2s;
  }

  &:active {
    background: #bd2a0f;
  }
`;

const ButtonAlternativeLinkStyle = styled(RemoveButtonStyle)`
  height: 64px;
  background: none;
  padding: 20px 32px;
  border: 2px solid #ef4e2d;
  border-radius: 5px;
  color: #ef4e2d;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.2s;

  & > .button-margin {
    margin: 0 10px;
  }

  &:hover {
    background: #ef4e2d;
    color: ${textColor.white};
    transition: 0.2s;
  }

  &:active {
    background: #ef4e2d;
    color: ${textColor.white};
  }
`;

export {
  ButtonArrowStyle,
  ButtonCTAStyle,
  ButtonCarouselStyle,
  ButtonLinkStyle,
  ButtonAlternativeLinkStyle,
};
