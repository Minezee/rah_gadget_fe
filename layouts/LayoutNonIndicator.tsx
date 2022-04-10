import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { NavbarItem } from "../components/navbar/Navbar.elements";

interface LayoutNonIndicatorType {
  children: JSX.Element | JSX.Element[],
  style?: Object
}

const LayoutNonIndicator = ({ children, style }: LayoutNonIndicatorType) => {

  return (
    <div style={style}>
      <Navbar>
        <NavbarItem>Home</NavbarItem>
        <NavbarItem>Rekomendasi</NavbarItem>
        <NavbarItem>Review</NavbarItem>
        <NavbarItem>Katalog</NavbarItem>
        <NavbarItem>Tentang Kami</NavbarItem>
      </Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default LayoutNonIndicator;
