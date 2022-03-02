import { ContainerStyle, ContainerFluidStyle } from "./container.elements";

interface ContainerType {
  children: JSX.Element|JSX.Element[]
}

const Container = ({ children }: ContainerType) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

const ContainerFluid = ({ children }: ContainerType) => {
  return <ContainerFluidStyle>{children}</ContainerFluidStyle>;
};

export { Container, ContainerFluid };
