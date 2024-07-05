// ./src/app/product/[_id]/page.tsx

import { client } from "../../../../sanity/lib/client";
import ProductDetailClient from "./ProductDetailClient";

const getProducts = async () => {
  return await client.fetch(`*[_type == 'products']`);
}

export default async function ProductDetail({ params }: { params: { _id: string } }) {
  const products = await getProducts();
  const specificProduct = products.find(
    (product: any) => product._id === params._id
  );

  if (!specificProduct) {
    return <div>Product not found</div>;
  }

  return <ProductDetailClient product={specificProduct} />;
}