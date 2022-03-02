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
} from "./typography.elements";

interface TypographyType {
  className?: string;
  children: React.ReactChild;
}

const H1 = ({ className, children }: TypographyType) => {
  return <H1Style className={className}>{children}</H1Style>;
};

const H2 = ({ className, children }: TypographyType) => {
  return <H2Style className={className}>{children}</H2Style>;
};

const H3 = ({ className, children }: TypographyType) => {
  return <H3Style className={className}>{children}</H3Style>;
};

const H4 = ({ className, children }: TypographyType) => {
  return <H4Style className={className}>{children}</H4Style>;
};

const SH1 = ({ className, children }: TypographyType) => {
  return <SH1Style className={className}>{children}</SH1Style>;
};

const SH2 = ({ className, children }: TypographyType) => {
  return <SH2Style className={className}>{children}</SH2Style>;
};

const SH3 = ({ className, children }: TypographyType) => {
  return <SH3Style className={className}>{children}</SH3Style>;
};

const Lead1 = ({ className, children }: TypographyType) => {
  return <Lead1Style className={className}>{children}</Lead1Style>;
};

const Lead2 = ({ className, children }: TypographyType) => {
  return <Lead2Style className={className}>{children}</Lead2Style>;
};

const Lead3 = ({ className, children }: TypographyType) => {
  return <Lead3Style className={className}>{children}</Lead3Style>;
};

const Body1 = ({ className, children }: TypographyType) => {
  return <Body1Style className={className}>{children}</Body1Style>;
};

const Body2 = ({ className, children }: TypographyType) => {
  return <Body2Style className={className}>{children}</Body2Style>;
};

const Body3 = ({ className, children }: TypographyType) => {
  return <Body3Style className={className}>{children}</Body3Style>;
};

const Label1 = ({ className, children }: TypographyType) => {
  return <Label1Style className={className}>{children}</Label1Style>;
};

const Label2 = ({ className, children }: TypographyType) => {
  return <Label2Style className={className}>{children}</Label2Style>;
};

const Label3 = ({ className, children }: TypographyType) => {
  return <Label3Style className={className}>{children}</Label3Style>;
};

const Label4 = ({ className, children }: TypographyType) => {
  return <Label4Style className={className}>{children}</Label4Style>;
};

const Label5 = ({ className, children }: TypographyType) => {
  return <Label5Style className={className}>{children}</Label5Style>;
};

export {
  H1,
  H2,
  H3,
  H4,
  SH1,
  SH2,
  SH3,
  Lead1,
  Lead2,
  Lead3,
  Body1,
  Body2,
  Body3,
  Label1,
  Label2,
  Label3,
  Label4,
  Label5,
};
