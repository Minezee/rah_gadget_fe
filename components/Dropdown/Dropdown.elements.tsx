import styled from "styled-components";

const DropdownWrapper = styled.div`
  width: 200px;
  user-select: none;
`;

const DropdownLabel = styled.div`
  // height: 52px; // ini nanti pikirin lagi
  padding: 0px 16px;
  background-image: linear-gradient(to bottom, #343434, #3434344d);
  color: white;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
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

const ItemCheckbox = styled.div``;

export { DropdownWrapper, DropdownLabel, DropdownItems, ItemCheckbox };
