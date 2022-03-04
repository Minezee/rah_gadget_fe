import Image from "next/image";
import { useState } from "react";
import { Lead1 } from "../typography/typography";
import {
  ButtonCarouselStyle,
  ButtonCTAStyle,
  ButtonArrowStyle,
  ButtonLinkStyle,
  ButtonAlternativeLinkStyle,
} from "./button.elements";

interface ButtonType {
  children: React.ReactChild;
  className: string
}

const ButtonArrow = ({ children }: ButtonType) => {
  return (
    <ButtonArrowStyle>
      <Lead1>{children}</Lead1>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginLeft: "16px" }}
      >
        <path
          d="M5 12H19"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 5L19 12L12 19"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </ButtonArrowStyle>
  );
};

const ButtonCTA = ({ children, className }: ButtonType) => {
  return (
    <ButtonCTAStyle className={className}>
      <Lead1>{children}</Lead1>
    </ButtonCTAStyle>
  );
};

const ButtonCarouselLeft = () => {
  return (
    <ButtonCarouselStyle>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 24L12 16L20 8"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </ButtonCarouselStyle>
  );
};

const ButtonCarouselRight = () => {
  return (
    <ButtonCarouselStyle>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 24L20 16L12 8"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </ButtonCarouselStyle>
  );
};

const ButtonLink = ({ children }: ButtonType) => {
  return (
    <ButtonLinkStyle>
      <Image src="/shopee-logo-white.png" width="24" height="24"></Image>
      <div className="button-margin"></div>
      <Lead1>{children}</Lead1>
    </ButtonLinkStyle>
  );
};

const ButtonAlternativeLink = ({ children }: ButtonType) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <ButtonAlternativeLinkStyle
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isHovering ? (
        <Image src="/shopee-logo-white.png" width="24" height="24"></Image>
      ) : (
        <Image src="/shopee-logo-orange.png" width="24" height="24"></Image>
      )}
      <div className="button-margin"></div>
      <Lead1>{children}</Lead1>
    </ButtonAlternativeLinkStyle>
  );
};

export {
  ButtonArrow,
  ButtonCTA,
  ButtonCarouselLeft,
  ButtonCarouselRight,
  ButtonLink,
  ButtonAlternativeLink,
};
