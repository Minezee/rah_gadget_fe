import { useEffect, useState } from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import { NavbarItem } from "../components/navbar/navbar.elements";

interface LayoutIndicatorType {
  children: React.ReactChild | React.ReactChild[];
  style?: Object;
}

const LayoutIndicator = ({ children, style }: LayoutIndicatorType) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);

    setScrollPercentage(scrollPercentRounded);
  };

  return (
    <div style={style}>
      <Navbar indicator={true} percentage={scrollPercentage}>
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

export default LayoutIndicator;
