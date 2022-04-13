import styled from "styled-components";

const SliderWrapper = styled.div`
  width: 100%;
  position: relative;

  & .carousel {
    position: absolute;
    z-index: 2;
  }

  & .carousel-left {
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  & .carousel-right {
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
  }
`;

const SliderBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  white-space: nowrap;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

`

export { SliderWrapper, SliderBox };
