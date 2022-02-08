import styled from "styled-components";
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
} from "./Typography.elements";

const H1 = (props: any) => {
  return <H1Style>{props.children}</H1Style>;
};

const H2 = (props: any) => {
  return <H2Style>{props.children}</H2Style>;
};

const H3 = (props: any) => {
  return <H3Style>{props.children}</H3Style>;
};

const SH1 = (props: any) => {
  return <SH1Style>{props.children}</SH1Style>;
};

const SH2 = (props: any) => {
  return <SH2Style>{props.children}</SH2Style>;
};

const SH3 = (props: any) => {
  return <SH3Style>{props.children}</SH3Style>;
};

const Lead1 = (props: any) => {
  return <Lead1Style>{props.children}</Lead1Style>;
};

const Lead2 = (props: any) => {
  return <Lead2Style>{props.children}</Lead2Style>;
};

const Lead3 = (props: any) => {
  return <Lead3Style>{props.children}</Lead3Style>;
};

const Body1 = (props: any) => {
  return <Body1Style>{props.children}</Body1Style>;
};

const Body2 = (props: any) => {
  return <Body2Style>{props.children}</Body2Style>;
};

const Label1 = (props: any) => {
  return <Label1Style>{props.children}</Label1Style>;
};

const Label2 = (props: any) => {
  return <Label2Style>{props.children}</Label2Style>;
};

const Label3 = (props: any) => {
  return <Label3Style>{props.children}</Label3Style>;
};

export {
  H1,
  H2,
  H3,
  SH1,
  SH2,
  SH3,
  Lead1,
  Lead2,
  Lead3,
  Body1,
  Body2,
  Label1,
  Label2,
  Label3,
};
