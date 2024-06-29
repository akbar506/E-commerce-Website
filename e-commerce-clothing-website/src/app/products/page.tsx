import React from "react";
import { Products } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

export default function AllProducts() {
  const allProducts = Object.values(Products);

  return (
    <>
      <div className="mx-0 md:mx-5">
        <div className="max-w-[1850px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-3">
          {allProducts.map((product) => (
            <>
              <div className="mx-auto">
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
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
