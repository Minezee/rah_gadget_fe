import styled from "styled-components";
import { ButtonLaptopStyle } from "./button.elements";

const ButtonLaptop = (props: any) => {
  return (
    <ButtonLaptopStyle>
      {props.children}{" "}
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
    </ButtonLaptopStyle>
  );
};

const ButtonOther = styled.button``;

const ButtonCTA = styled.button``;

const ButtonCarouselLeft = styled.button``;

const ButtonCarouselRight = styled.button``;

export {
  ButtonLaptop,
  ButtonOther,
  ButtonCTA,
  ButtonCarouselLeft,
  ButtonCarouselRight,
};
