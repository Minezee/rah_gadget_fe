import Indicator from "../indicator/indicator";
import {
  NavbarIndicatorWrapper,
  NavbarItem,
  NavbarItemWrapper,
  NavbarWrapper,
} from "./navbar.elements";

const Navbar = (props: any) => {
  return (
    <NavbarIndicatorWrapper>
      <NavbarWrapper>
        <NavbarItemWrapper>
          <NavbarItem>Home</NavbarItem>
          <NavbarItem>Artikel</NavbarItem>
          <NavbarItem>Laptop</NavbarItem>
          <NavbarItem>Brand</NavbarItem>
          <NavbarItem>Tentang Kami</NavbarItem>
        </NavbarItemWrapper>
      </NavbarWrapper>
      {props.children}
    </NavbarIndicatorWrapper>
  );
};

export default Navbar;
