import React from "react";
import { Products } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function Female() {
  const kidsProduct = Object.values(Products);
  const kidsFilterProduct = kidsProduct.filter(
    (products) => products.productCategory === "kids"
  );

  return (
    <>
      <div className="mx-0 md:mx-5 min-h-screen">
        <div className="max-w-[1850px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-3">
          {kidsFilterProduct.map((product) => (
            <>
              <div className="mx-auto" key={product.productName}>
                <Link
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
