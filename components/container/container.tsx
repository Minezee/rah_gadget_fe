import { ContainerStyle, ContainerFluidStyle } from "./Container.elements";

interface ContainerType {
  children: JSX.Element|JSX.Element[],
  style?: Object
}

const Container = ({ children, style }: ContainerType) => {
  return <ContainerStyle style={style}>{children}</ContainerStyle>;
};

const ContainerFluid = ({ children }: ContainerType) => {
  return <ContainerFluidStyle>{children}</ContainerFluidStyle>;
};

export { Container, ContainerFluid };
