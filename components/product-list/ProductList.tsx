import { ProductListWrapper } from "./ProductList.elements";

interface ProductListType {
  children: JSX.Element | JSX.Element[];
  gridCount: number,
  itemWidth: number
}

const ProductList = ({ children, gridCount, itemWidth }: ProductListType) => {
  return <ProductListWrapper gridCount={gridCount} itemWidth={itemWidth}>
    {children}
  </ProductListWrapper>
};

export default ProductList;
