import {
  NavbarItem,
  NavbarItemWrapper,
  NavbarWrapper,
} from "./navbar.elements";

const Navbar = (props: any) => {
  return (
    <NavbarWrapper>
      <NavbarItemWrapper>
        <NavbarItem>Home</NavbarItem>
        <NavbarItem>Artikel</NavbarItem>
        <NavbarItem>Laptop</NavbarItem>
        <NavbarItem>Brand</NavbarItem>
        <NavbarItem>Tentang Kami</NavbarItem>
      </NavbarItemWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
