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

const ButtonArrowStyle = styled(RemoveButtonStyle)`
  background: none;
  color: #d31e1c;
  border: 2px solid #d31e1c;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 20px 32px;
  transition: 0.2s;

  > svg {
    display: none;
  }

  &:hover {
    color: white;
    background: #d31e1c;
    transition: 0.2s;
  }

  &:active {
    background: #d31e1c;
  }

  &:hover > svg {
    transition: 0.2s;
    display: block;
  }
`;

const ButtonCTAStyle = styled(RemoveButtonStyle)`
  background: none;
  color: white;
  border: 2px solid #d31e1c;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 20px 32px;
  transition: 0.2s;

  &:hover {
    background: #d31e1c;
    transition: 0.2s;
  }

  &:active {
    background: #d31e1c;
  }
`;

const ButtonCarouselStyle = styled(RemoveButtonStyle)`
  width: 64px;
  height: 64px;
  background-color: #d31e1c;
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
  padding: 20px 32px;
  background: #ef4e2d;
  border-radius: 5px;
  color: white;

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
  background: none;
  padding: 20px 32px;
  border: 2px solid #ef4e2d;
  border-radius: 5px;
  color: #ef4e2d;

  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.2s;

  & > .button-margin {
    margin: 0 10px;
  }

  &:hover {
    background: #ef4e2d;
    color: white;
    transition: 0.2s;
  }

  &:active {
    background: #ef4e2d;
    color: white;
  }
`;

export {
  ButtonArrowStyle,
  ButtonCTAStyle,
  ButtonCarouselStyle,
  ButtonLinkStyle,
  ButtonAlternativeLinkStyle,
};
