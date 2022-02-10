import { ContainerStyle, ContainerFluidStyle } from "./container.elements";

const Container = (props: any) => {
  return <ContainerStyle>{props.children}</ContainerStyle>;
};

const ContainerFluid = (props: any) => {
  return <ContainerFluidStyle>{props.children}</ContainerFluidStyle>;
};

export { Container, ContainerFluid };
