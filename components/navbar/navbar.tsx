import {
  NavbarIndicatorWrapper,
  NavbarItem,
  NavbarItemWrapper,
  NavbarLogoWrapper,
  NavbarWrapper,
} from "./navbar.elements";
import Image from "next/image";

const Navbar = (props: any) => {
  return (
    <NavbarIndicatorWrapper>
      <NavbarWrapper>
        <NavbarLogoWrapper>
          <Image src="/nav-rg-logo.svg" width="201" height="37" />
        </NavbarLogoWrapper>
        <NavbarItemWrapper>
          <NavbarItem>Home</NavbarItem>
          <NavbarItem>Rekomendasi</NavbarItem>
          <NavbarItem>Review</NavbarItem>
          <NavbarItem>Katalog</NavbarItem>
          <NavbarItem>Tentang Kami</NavbarItem>
        </NavbarItemWrapper>
      </NavbarWrapper>
      {props.children}
    </NavbarIndicatorWrapper>
  );
};

export default Navbar;
