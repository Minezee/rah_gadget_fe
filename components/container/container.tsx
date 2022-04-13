import { ContainerStyle } from "./container.elements";

interface ContainerType {
  children: JSX.Element | JSX.Element[];
  style?: Object;
}

const Container = ({ children, style }: ContainerType) => {
  return <ContainerStyle style={style}>{children}</ContainerStyle>;
};

export { Container };
