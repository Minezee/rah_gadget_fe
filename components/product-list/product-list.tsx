import { ProductListWrapper } from "./product-list.elements";

interface ProductListType {
  children: React.ReactChild | React.ReactChild[];
  gridCount: number,
  itemWidth: number
}

const ProductList = ({ children, gridCount, itemWidth }: ProductListType) => {
  return <ProductListWrapper gridCount={gridCount} itemWidth={itemWidth}>
    {children}
  </ProductListWrapper>
};

export default ProductList;
