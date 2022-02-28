import styled from "styled-components";
import { Container } from "../container/container";
import { Lead1 } from "../typography/typography";

const NavbarIndicatorWrapper = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
`;

const NavbarWrapperStyle = styled.div`
  width: 100%;
  height: 80px;
  background: linear-gradient(
    180deg,
    #343434 -21.25%,
    rgba(52, 52, 52, 0.3) 151.25%
  );
  backdrop-filter: blur(10px);

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const NavbarWrapper = (props: any) => {
  return (
    <NavbarWrapperStyle>
      <Container>{props.children}</Container>
    </NavbarWrapperStyle>
  );
};

// const NavbarItemWrapper = (props: any) => {
//   return (
//     <Container>
//       <NavbarItemWrapperStyle>{props.children}</NavbarItemWrapperStyle>
//     </Container>
//   );
// };

const NavbarItemWrapper = styled.span`
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
    background: #d31e1c;
    transition: 0.2s;
  }
`;

const NavbarLogoWrapper = styled.div``;

export {
  NavbarIndicatorWrapper,
  NavbarWrapper,
  NavbarItemWrapper,
  NavbarItem,
  NavbarLogoWrapper,
};