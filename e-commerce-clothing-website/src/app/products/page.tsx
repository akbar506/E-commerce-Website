import React from "react";
import { Products } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

export default function AllProducts() {
  const allProducts = Object.values(Products);

  return (
    <>
      <div>
        <div className="flex justify-center flex-wrap gap-y-5 gap-x-3">
          {allProducts.map((product) => (
            <>
              <Link
                key={product.productName}
                href={`/product/${product.productName.replaceAll(" ", "-")}`}
              >
                <div>
                  <div className="flex flex-col gap-2 p-5">
                    <div>
                      <Image
                        src={product.productURL}
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
            </>
          ))}
        </div>
      </div>
    </>
  );
}
