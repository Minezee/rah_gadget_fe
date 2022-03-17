import {
  NavbarIndicatorWrapper,
  NavbarItemWrapper,
  NavbarLogoWrapper,
  NavbarWrapper,
} from "./Navbar.elements";
import Image from "next/image";
import React from "react";
import Indicator from "../indicator/Indicator";

interface propsType {
  children: JSX.Element|JSX.Element[],
  indicator?: boolean,
  percentage?: number
}

const Navbar = ({ children, indicator, percentage }: propsType) => {
  return (
    <NavbarIndicatorWrapper>
      <NavbarWrapper>
        <NavbarLogoWrapper>
          <Image src="/nav-rg-logo.svg" width="201" height="37" />
        </NavbarLogoWrapper>
        <NavbarItemWrapper>
          {children}
        </NavbarItemWrapper>
      </NavbarWrapper>
      {indicator ? <Indicator percentage={percentage || 0}></Indicator> : ""}
    </NavbarIndicatorWrapper>
  );
};

export default Navbar;
