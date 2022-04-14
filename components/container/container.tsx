import { ContainerStyle } from "./container.elements";

interface ContainerType {
  children: React.ReactChild | React.ReactChild[];
  style?: Object;
}

const Container = ({ children, style }: ContainerType) => {
  return <ContainerStyle style={style}>{children}</ContainerStyle>;
};

export { Container };
