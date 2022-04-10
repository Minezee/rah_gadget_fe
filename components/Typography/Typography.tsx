import {
  H1Style,
  H2Style,
  H3Style,
  SH1Style,
  SH2Style,
  SH3Style,
  Lead1Style,
  Lead2Style,
  Lead3Style,
  Body1Style,
  Body2Style,
  Label1Style,
  Label2Style,
  Label3Style,
  H4Style,
  Label4Style,
  Label5Style,
  Body3Style,
  Lead4Style,
  SH4Style,
  SH5Style,
  Lead5Style,
  Lead7Style,
  Lead6Style,
  SH6Style,
  Lead8Style,
} from "./Typography.elements";

interface TypographyType {
  className?: string;
  children: React.ReactChild | React.ReactChild[];
  style?: Object
}

const H1 = ({ className, children, style }: TypographyType) => {
  return <H1Style className={className} style={style}>{children}</H1Style>;
};

const H2 = ({ className, children, style }: TypographyType) => {
  return <H2Style className={className} style={style}>{children}</H2Style>;
};

const H3 = ({ className, children, style }: TypographyType) => {
  return <H3Style className={className} style={style}>{children}</H3Style>;
};

const H4 = ({ className, children, style }: TypographyType) => {
  return <H4Style className={className} style={style}>{children}</H4Style>;
};

const SH1 = ({ className, children, style }: TypographyType) => {
  return <SH1Style className={className} style={style}>{children}</SH1Style>;
};

const SH2 = ({ className, children, style }: TypographyType) => {
  return <SH2Style className={className} style={style}>{children}</SH2Style>;
};

const SH3 = ({ className, children, style }: TypographyType) => {
  return <SH3Style className={className} style={style}>{children}</SH3Style>;
};

const SH4 = ({ className, children, style }: TypographyType) => {
  return <SH4Style className={className} style={style}>{children}</SH4Style>;
};

const SH5 = ({ className, children, style }: TypographyType) => {
  return <SH5Style className={className} style={style}>{children}</SH5Style>;
};

const SH6 = ({ className, children, style }: TypographyType) => {
  return <SH6Style className={className} style={style}>{children}</SH6Style>;
};

const Lead1 = ({ className, children, style }: TypographyType) => {
  return <Lead1Style className={className} style={style}>{children}</Lead1Style>;
};

const Lead2 = ({ className, children, style }: TypographyType) => {
  return <Lead2Style className={className} style={style}>{children}</Lead2Style>;
};

const Lead3 = ({ className, children, style }: TypographyType) => {
  return <Lead3Style className={className} style={style}>{children}</Lead3Style>;
};

const Lead4 = ({ className, children, style }: TypographyType) => {
  return <Lead4Style className={className} style={style}>{children}</Lead4Style>;
};

const Lead5 = ({ className, children, style }: TypographyType) => {
  return <Lead5Style className={className} style={style}>{children}</Lead5Style>;
};

const Lead6 = ({ className, children, style }: TypographyType) => {
  return <Lead6Style className={className} style={style}>{children}</Lead6Style>;
};

const Lead7 = ({ className, children, style }: TypographyType) => {
  return <Lead7Style className={className} style={style}>{children}</Lead7Style>;
};

const Lead8 = ({ className, children, style }: TypographyType) => {
  return <Lead8Style className={className} style={style}>{children}</Lead8Style>;
};

const Body1 = ({ className, children, style }: TypographyType) => {
  return <Body1Style className={className} style={style}>{children}</Body1Style>;
};

const Body2 = ({ className, children, style }: TypographyType) => {
  return <Body2Style className={className} style={style}>{children}</Body2Style>;
};

const Body3 = ({ className, children, style }: TypographyType) => {
  return <Body3Style className={className} style={style}>{children}</Body3Style>;
};

const Label1 = ({ className, children, style }: TypographyType) => {
  return <Label1Style className={className} style={style}>{children}</Label1Style>;
};

const Label2 = ({ className, children, style }: TypographyType) => {
  return <Label2Style className={className} style={style}>{children}</Label2Style>;
};

const Label3 = ({ className, children, style }: TypographyType) => {
  return <Label3Style className={className} style={style}>{children}</Label3Style>;
};

const Label4 = ({ className, children, style }: TypographyType) => {
  return <Label4Style className={className} style={style}>{children}</Label4Style>;
};

const Label5 = ({ className, children, style }: TypographyType) => {
  return <Label5Style className={className} style={style}>{children}</Label5Style>;
};

export {
  H1,
  H2,
  H3,
  H4,
  SH1,
  SH2,
  SH3,
  SH4,
  SH5,
  SH6,
  Lead1,
  Lead2,
  Lead3,
  Lead4,
  Lead5,
  Lead6,
  Lead7,
  Lead8,
  Body1,
  Body2,
  Body3,
  Label1,
  Label2,
  Label3,
  Label4,
  Label5,
};
