import styled from "styled-components";
import { Container } from "../container/container";
import { Lead1 } from "../typography/typography";

const NavbarWrapper = styled.div`
  width: 100%;
  height: 80px;
  background: linear-gradient(
    180deg,
    #343434 -21.25%,
    rgba(52, 52, 52, 0.3) 151.25%
  );
  backdrop-filter: blur(10px);
`;

const NavbarItemWrapper = (props: any) => {
  return (
    <Container>
      <NavbarItemWrapperStyle>{props.children}</NavbarItemWrapperStyle>
    </Container>
  );
};

const NavbarItemWrapperStyle = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;

`;

const NavbarItem = (props: any) => {
  return (
    <NavbarItemStyle>
      <Lead1>{props.children}</Lead1>
    </NavbarItemStyle>
  );
};

const NavbarItemStyle = styled.div`
  height: 100% !important;
  padding: 0 28px;
  color: white;
  cursor: pointer;
  transition: 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #D31E1C;
    transition: 0.2s;
  }
`;

export { NavbarWrapper, NavbarItemWrapper, NavbarItem };
