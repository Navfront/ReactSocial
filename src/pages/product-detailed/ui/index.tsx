import { useParams } from "react-router-dom";

export const ProductDetailedPage = () => {
  const { productId } = useParams();

  if (!productId) {
    throw new Error("Product ID is undefined");
  }

  return <h1>Product detailed page: {productId}</h1>;
};
