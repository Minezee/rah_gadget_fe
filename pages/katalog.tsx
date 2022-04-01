import Image from "next/image";
import { useState } from "react";
import { Container } from "../components/container/Container";
import { HomeDropdownHarga } from "../components/dropdown/Dropdown";
import { InputField } from "../components/pages-component/index/index.elements";
import {
  KatalogFilter,
  KatalogFilterBody,
  KatalogFilterHead,
  KatalogMainContent,
  KatalogSearchbar,
  KatalogWrapper,
} from "../components/pages-component/katalog/katalog.elements";
import { Lead1, Lead2 } from "../components/typography/Typography";
import LayoutNonIndicator from "../layouts/LayoutNonIndicator";

const Katalog = () => {
  const [searchItemActive, setSearchItemActive] = useState([]);
  const [titleType] = useState(["Gaming", "Kuliah", "Bisnis", "Editing"]);
  const [noType, setNoType] = useState(0);

  return (
    <LayoutNonIndicator style={{ paddingTop: "150px" }}>
      <Container>
        <KatalogWrapper>
          <KatalogFilter>
            <KatalogFilterHead>
              <Lead1>Filter Pencarian</Lead1>
              <Image src="/refresh-filter-logo.svg" width={24} height={24} />
            </KatalogFilterHead>
            <KatalogFilterBody>
              {/* BUAT DROPDOWN BARU, MIRIPIN AJA AMA YG DI HOMEPAGE */}
            </KatalogFilterBody>
          </KatalogFilter>
          <KatalogMainContent>
            <KatalogSearchbar>
              <Image src="/katalog-search-logo.svg" width={24} height={24} />
              <InputField type="text" style={{paddingLeft:"36px"}} placeholder="Cari laptop ..." />
            </KatalogSearchbar>
          </KatalogMainContent>
        </KatalogWrapper>
      </Container>
    </LayoutNonIndicator>
  );
};

export default Katalog;
