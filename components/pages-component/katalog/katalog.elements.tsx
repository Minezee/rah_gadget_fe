import styled from "styled-components";
import { backgroundColor, mainColor, textColor } from "../../../styles/mixin";

const KatalogWrapper = styled.div`
  display: grid;
  grid-template-columns: 320px auto;
  grid-column-gap: 16px;
`;

const KatalogFilter = styled.div``;

const KatalogMainContent = styled.div``;

const KatalogFilterHead = styled.div`
  padding: 20px;
  width: 100%;
  height: 64px;
  background: ${mainColor.primary};
  color: ${textColor.white};
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const KatalogFilterBody = styled.div`
  width: 100%;
  background: ${backgroundColor.whiteCard};
`;

const KatalogSearchbar = styled.div`
  width: 100%;
  padding: 23px 27px;
  background: ${mainColor.rating_unactive};
  border-radius: 5px;
  display: grid;
  grid-template-columns: 22px auto;
`;

export {
  KatalogWrapper,
  KatalogFilter,
  KatalogMainContent,
  KatalogFilterHead,
  KatalogFilterBody,
  KatalogSearchbar
};
