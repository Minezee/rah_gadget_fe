import {
  DropdownWrapper,
  DropdownLabel,
  DropdownItems,
  ItemCheckbox,
  CircleNumber,
  SquarePrice,
  DropdownLabelNoStyle,
} from "./Dropdown.elements";
import { useEffect, useState } from "react";
import {
  CheckboxBox,
  CheckboxWrapper,
} from "../input/checkbox/Checkbox.elements";
import { Label3, Lead2, Lead3 } from "../typography/Typography";
import { InputTextWrapper } from "../input/text/text.elements";
import Image from "next/image";

interface HomeDropdownType {
  children: React.ReactChild;
  style?: Object;
  label: String;
  itemActive: Array<String>;
  setItemActive?: any;
}

interface KatalogDropdownType {
  children: React.ReactChild;
  style?: Object;
  label: String;
}

const HomeDropdownHarga = ({
  children,
  style,
  label,
  itemActive,
  setItemActive,
}: HomeDropdownType) => {
  const [show, setShow] = useState(false);
  const [hargaMin, setHargaMin] = useState(0);
  const [hargaMax, setHargaMax] = useState(0);
  const [semuaHarga, setSemuaHarga] = useState(true);

  useEffect(() => {
    if (hargaMax > 0) {
      if (!itemActive.includes("Harga")) {
        setItemActive(() => [...itemActive, "Harga"]);
      }
    } else {
      let index = itemActive.indexOf("Harga");
      let itemTemp = [...itemActive];
      itemTemp.splice(index, 1);
      setItemActive(itemTemp);
    }
  }, [hargaMax]);

  return (
    <DropdownWrapper style={style}>
      <DropdownLabel
        onClick={() => {
          setShow(!show);
        }}
      >
        {children}
        {show ? (
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.77917 11.6471C9.43276 12.1177 8.56675 12.1177 8.22034 11.6471L0.426119 1.05882C0.0797087 0.588235 0.512722 0 1.20554 0H16.794C17.4869 0 17.9199 0.588235 17.5734 1.05882L9.77917 11.6471Z"
              fill="white"
            />
          </svg>
        ) : (hargaMin > 0 || hargaMax > 0) && semuaHarga == false ? (
          <SquarePrice>
            <Label3 style={{ margin: "0" }}>ON</Label3>
          </SquarePrice>
        ) : (
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.22083 0.352942C8.56724 -0.11767 9.43325 -0.11767 9.77966 0.352942L17.5739 10.9412C17.9203 11.4118 17.4873 12 16.7945 12H1.20596C0.51314 12 0.0801487 11.4118 0.426558 10.9412L8.22083 0.352942Z"
              fill="white"
            />
          </svg>
        )}
      </DropdownLabel>
      <DropdownItems show={show}>
        <ItemCheckbox>
          <InputTextWrapper>
            <Lead3 style={{ margin: "0 12px 0 0" }}>Rp</Lead3>
            <input
              onChange={(e) => setHargaMin(parseInt(e.target.value))}
              type="number"
              placeholder="Harga Minimum"
            />
          </InputTextWrapper>
          <InputTextWrapper>
            <Lead3 style={{ margin: "0 12px 0 0" }}>Rp</Lead3>
            <input
              onChange={(e) => setHargaMax(parseInt(e.target.value))}
              type="number"
              placeholder="Harga Maksimum"
            />
          </InputTextWrapper>
          <CheckboxWrapper>
            <CheckboxBox
              onChange={() => {
                setSemuaHarga(!semuaHarga);
              }}
              type="checkbox"
              id="semua-harga"
              checked={semuaHarga}
            />
            <label htmlFor={"semua-harga"}>
              <Lead3 style={{ margin: "0" }}>Semua Harga</Lead3>
            </label>
          </CheckboxWrapper>
        </ItemCheckbox>
      </DropdownItems>
    </DropdownWrapper>
  );
};

const HomeDropdownBrand = ({
  children,
  style,
  label,
  itemActive,
  setItemActive,
}: HomeDropdownType) => {
  const [show, setShow] = useState(false);
  const [statusCount, setStatusCount] = useState(0);
  const [status] = useState([
    {
      label: "Acer",
      status: false,
    },
    {
      label: "Asus",
      status: false,
    },
    {
      label: "Apple",
      status: false,
    },
    {
      label: "Dell",
      status: false,
    },
    {
      label: "MSI",
      status: false,
    },
  ]);

  useEffect(() => {
    if (statusCount > 0) {
      if (!itemActive.includes("Brand")) {
        setItemActive(() => [...itemActive, "Brand"]);
      }
    } else {
      let index = itemActive.indexOf("Brand");
      let itemTemp = [...itemActive];
      itemTemp.splice(index, 1);
      setItemActive(itemTemp);
    }
  }, [statusCount]);

  const changeStatusCount = async () => {
    let count = 0;
    status.forEach((stat) => {
      if (stat.status) count++;
    });
    setStatusCount(count);
  };

  return (
    <DropdownWrapper style={style}>
      <DropdownLabel
        onClick={() => {
          setShow(!show);
        }}
      >
        {children}
        {show ? (
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.77917 11.6471C9.43276 12.1177 8.56675 12.1177 8.22034 11.6471L0.426119 1.05882C0.0797087 0.588235 0.512722 0 1.20554 0H16.794C17.4869 0 17.9199 0.588235 17.5734 1.05882L9.77917 11.6471Z"
              fill="white"
            />
          </svg>
        ) : statusCount > 0 ? (
          <CircleNumber>{statusCount}</CircleNumber>
        ) : (
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.22083 0.352942C8.56724 -0.11767 9.43325 -0.11767 9.77966 0.352942L17.5739 10.9412C17.9203 11.4118 17.4873 12 16.7945 12H1.20596C0.51314 12 0.0801487 11.4118 0.426558 10.9412L8.22083 0.352942Z"
              fill="white"
            />
          </svg>
        )}
      </DropdownLabel>
      <DropdownItems show={show}>
        <ItemCheckbox>
          {status.map((stat, idx) => (
            <CheckboxWrapper key={idx}>
              <CheckboxBox
                onClick={() => {
                  status[idx].status = !status[idx].status;
                }}
                onChange={changeStatusCount}
                type="checkbox"
                id={idx.toString() + "HomeDropdownBrand" + stat.label}
              />
              <label
                htmlFor={idx.toString() + "HomeDropdownBrand" + stat.label}
              >
                <Lead3 style={{ margin: "0" }}>{stat.label}</Lead3>
              </label>
            </CheckboxWrapper>
          ))}
        </ItemCheckbox>
      </DropdownItems>
    </DropdownWrapper>
  );
};

const HomeDropdownKategori = ({
  children,
  style,
  label,
  itemActive,
  setItemActive,
}: HomeDropdownType) => {
  const [show, setShow] = useState(false);
  const [statusCount, setStatusCount] = useState(0);
  const [status] = useState([
    {
      label: "Gaming",
      status: false,
    },
    {
      label: "Editing",
      status: false,
    },
    {
      label: "Bisnis",
      status: false,
    },
    {
      label: "Kuliah",
      status: false,
    },
  ]);

  useEffect(() => {
    if (statusCount > 0) {
      if (!itemActive.includes("Kategori")) {
        setItemActive(() => [...itemActive, "Kategori"]);
      }
    } else {
      let index = itemActive.indexOf("Kategori");
      let itemTemp = [...itemActive];
      itemTemp.splice(index, 1);
      setItemActive(itemTemp);
    }
  }, [statusCount]);

  const changeStatusCount = async () => {
    let count = 0;
    status.forEach((stat) => {
      if (stat.status) count++;
    });
    setStatusCount(count);
  };

  return (
    <DropdownWrapper style={style}>
      <DropdownLabel
        onClick={() => {
          setShow(!show);
        }}
      >
        {children}
        {show ? (
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.77917 11.6471C9.43276 12.1177 8.56675 12.1177 8.22034 11.6471L0.426119 1.05882C0.0797087 0.588235 0.512722 0 1.20554 0H16.794C17.4869 0 17.9199 0.588235 17.5734 1.05882L9.77917 11.6471Z"
              fill="white"
            />
          </svg>
        ) : statusCount > 0 ? (
          <CircleNumber>{statusCount}</CircleNumber>
        ) : (
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.22083 0.352942C8.56724 -0.11767 9.43325 -0.11767 9.77966 0.352942L17.5739 10.9412C17.9203 11.4118 17.4873 12 16.7945 12H1.20596C0.51314 12 0.0801487 11.4118 0.426558 10.9412L8.22083 0.352942Z"
              fill="white"
            />
          </svg>
        )}
      </DropdownLabel>
      <DropdownItems show={show}>
        <ItemCheckbox>
          {status.map((stat, idx) => (
            <CheckboxWrapper key={idx}>
              <CheckboxBox
                onClick={() => {
                  status[idx].status = !status[idx].status;
                }}
                onChange={changeStatusCount}
                type="checkbox"
                id={idx.toString() + "HomeDropdownKategori" + stat.label}
              />
              <label
                htmlFor={idx.toString() + "HomeDropdownKategori" + stat.label}
              >
                <Lead3 style={{ margin: "0" }}>{stat.label}</Lead3>
              </label>
            </CheckboxWrapper>
          ))}
        </ItemCheckbox>
      </DropdownItems>
    </DropdownWrapper>
  );
};

const KatalogDropdownHarga = ({
  children,
  style,
  label,
}: KatalogDropdownType) => {
  const [show, setShow] = useState(true);
  const [hargaMin, setHargaMin] = useState(0);
  const [hargaMax, setHargaMax] = useState(0);
  const [semuaHarga, setSemuaHarga] = useState(true);

  return (
    <DropdownWrapper style={style}>
      <DropdownLabelNoStyle
        onClick={() => {
          setShow(!show);
        }}
      >
        {children}
        {show ? (
          <Image src="/arrow-drop-down.svg" width={24} height={24} alt="arrow-logo" />
        ) : (
          <Image src="/arrow-drop-up.svg" width={24} height={24} alt="arrow-logo" />
        )}
      </DropdownLabelNoStyle>
      <DropdownItems show={show} style={{ padding: "8px 0 0 0" }}>
        <ItemCheckbox>
          <InputTextWrapper>
            <Lead3 style={{ margin: "0 12px 0 0" }}>Rp</Lead3>
            <input
              onChange={(e) => setHargaMin(parseInt(e.target.value))}
              type="number"
              placeholder="Harga Minimum"
            />
          </InputTextWrapper>
          <InputTextWrapper>
            <Lead3 style={{ margin: "0 12px 0 0" }}>Rp</Lead3>
            <input
              onChange={(e) => setHargaMax(parseInt(e.target.value))}
              type="number"
              placeholder="Harga Maksimum"
            />
          </InputTextWrapper>
          <CheckboxWrapper>
            <CheckboxBox
              onChange={() => {
                setSemuaHarga(!semuaHarga);
              }}
              type="checkbox"
              id="semua-harga"
              checked={semuaHarga}
            />
            <label htmlFor={"semua-harga"}>
              <Lead3 style={{ margin: "0" }}>Semua Harga</Lead3>
            </label>
          </CheckboxWrapper>
        </ItemCheckbox>
      </DropdownItems>
    </DropdownWrapper>
  );
};

const KatalogDropdownBrand = ({
  children,
  style,
  label,
}: KatalogDropdownType) => {
  const [show, setShow] = useState(true);
  const [statusCount, setStatusCount] = useState(0);
  const [status] = useState([
    {
      label: "Acer",
      status: false,
    },
    {
      label: "Asus",
      status: false,
    },
    {
      label: "Apple",
      status: false,
    },
    {
      label: "Dell",
      status: false,
    },
    {
      label: "MSI",
      status: false,
    },
  ]);

  const changeStatusCount = async () => {
    let count = 0;
    status.forEach((stat) => {
      if (stat.status) count++;
    });
    setStatusCount(count);
  };

  return (
    <DropdownWrapper style={style}>
      <DropdownLabelNoStyle
        onClick={() => {
          setShow(!show);
        }}
      >
        {children}
        {show ? (
          <Image src="/arrow-drop-down.svg" width={24} height={24} alt="arrow-logo" />
        ) : (
          <Image src="/arrow-drop-up.svg" width={24} height={24} alt="arrow-logo" />
        )}
      </DropdownLabelNoStyle>
      <DropdownItems show={show} style={{ padding: "0" }}>
        <ItemCheckbox>
          {status.map((stat, idx) => (
            <CheckboxWrapper key={idx}>
              <CheckboxBox
                onClick={() => {
                  status[idx].status = !status[idx].status;
                }}
                onChange={changeStatusCount}
                type="checkbox"
                id={idx.toString() + "HomeDropdownBrand" + stat.label}
              />
              <label
                htmlFor={idx.toString() + "HomeDropdownBrand" + stat.label}
              >
                <Lead3 style={{ margin: "0" }}>{stat.label}</Lead3>
              </label>
            </CheckboxWrapper>
          ))}
        </ItemCheckbox>
      </DropdownItems>
    </DropdownWrapper>
  );
};

const KatalogDropdownKategori = ({
  children,
  style,
  label,
}: KatalogDropdownType) => {
  const [show, setShow] = useState(true);
  const [statusCount, setStatusCount] = useState(0);
  const [status] = useState([
    {
      label: "Gaming",
      status: false,
    },
    {
      label: "Editing",
      status: false,
    },
    {
      label: "Bisnis",
      status: false,
    },
    {
      label: "Kuliah",
      status: false,
    },
  ]);

  const changeStatusCount = async () => {
    let count = 0;
    status.forEach((stat) => {
      if (stat.status) count++;
    });
    setStatusCount(count);
  };

  return (
    <DropdownWrapper style={style}>
      <DropdownLabelNoStyle
        onClick={() => {
          setShow(!show);
        }}
      >
        {children}
        {show ? (
          <Image src="/arrow-drop-down.svg" width={24} height={24} alt="arrow-logo" />
        ) : (
          <Image src="/arrow-drop-up.svg" width={24} height={24} alt="arrow-logo" />
        )}
      </DropdownLabelNoStyle>
      <DropdownItems show={show} style={{ padding: "0" }}>
        <ItemCheckbox>
          {status.map((stat, idx) => (
            <CheckboxWrapper key={idx}>
              <CheckboxBox
                onClick={() => {
                  status[idx].status = !status[idx].status;
                }}
                onChange={changeStatusCount}
                type="checkbox"
                id={idx.toString() + "HomeDropdownKategori" + stat.label}
              />
              <label
                htmlFor={idx.toString() + "HomeDropdownKategori" + stat.label}
              >
                <Lead3 style={{ margin: "0" }}>{stat.label}</Lead3>
              </label>
            </CheckboxWrapper>
          ))}
        </ItemCheckbox>
      </DropdownItems>
    </DropdownWrapper>
  );
};

export {
  HomeDropdownHarga,
  HomeDropdownBrand,
  HomeDropdownKategori,
  KatalogDropdownHarga,
  KatalogDropdownBrand,
  KatalogDropdownKategori,
};
