import styled from "styled-components";
import { mainColor } from "../../styles/mixin";

const DropdownWrapper = styled.div`
  width: 200px;
  height: 52px;
  user-select: none;
`;

const DropdownLabel = styled.div`
  height: 52px; // ini nanti pikirin lagi
  padding: 0px 16px;
  background-image: linear-gradient(to bottom, #343434, #3434344d);
  color: white;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
`;

const DropdownLabelNoStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownItems = styled.div<{ show: Boolean }>`
  ${(props) =>
    props.show
      ? `
  display: block;
  `
      : `
    display: none;
  `}
  background-color: white;
  border-radius: 5px;
  padding: 12px;
  box-sizing: border-box;
`;

const CircleNumber = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background: ${mainColor.secondary};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SquarePrice = styled.div`
  width: 27px;
  height: 18px;
  background: ${mainColor.secondary};
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemCheckbox = styled.div``;

export {
  DropdownWrapper,
  DropdownLabel,
  DropdownLabelNoStyle,
  DropdownItems,
  ItemCheckbox,
  CircleNumber,
  SquarePrice,
};
