import React from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import { Suspense } from "react";
import SkeletonProduct from "@/components/skeleton_product";


const getProducts = async () => {
  return await client.fetch(`*[_type == 'products']`);
}
export default async function Female() {
  const kidsProduct = await getProducts();
  const kidsFilterProduct = kidsProduct.filter(
    (products: any) => products.productCategory === "Kids"
  );

  return (
    <>
      <div className="mx-0 md:mx-5 min-h-screen">
        <div className="max-w-[1850px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-3">
          {kidsFilterProduct.map((product: any) => (
            <>
              <Suspense fallback={<SkeletonProduct />}>
                <div className="mx-auto" key={product.productName}>
                  <Link
                    href={`/product/${product._id}`}
                  >
                    <div>
                      <div className="flex flex-col gap-2 p-5">
                        <div>
                          <Image
                            src={urlForImage(product.productImage)}
                            alt={product.productALT}
                            width={350}
                            height={350}
                          />
                        </div>
                        <div className="font-bold text-xl">
                          {product.productName}
                        </div>
                        <div className="text-slate-400 text-lg font-bold">
                          {product.productType}
                        </div>
                        <div className="font-bold text-xl">
                          ${product.productPrice}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </Suspense>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
