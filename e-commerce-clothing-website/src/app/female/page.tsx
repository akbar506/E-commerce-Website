"use client";
import React, { useState, useEffect } from "react";
import { Products, Product } from "@/components/constants";
import Image from "next/image";

export default function Female() {
  const [femaleProduct, setFemaleProduct] = useState<Product[]>([]);
  useEffect(() => {
    setFemaleProduct(Object.values(Products));
  }, []);
  const femaleFilterProduct = femaleProduct.filter(
    (products) => products.productCategory === "female"
  );

  return (
    <>
      <div className="flex justify-center flex-wrap gap-y-5 gap-x-3 min-h-screen">
        {femaleFilterProduct.map((product) => (
          <>
            <div key={product.productName}>
              <div
                key={product.productName}
                className="flex flex-col gap-2 p-5"
              >
                <div>
                  <Image
                    src={product.productURL}
                    alt={product.productALT}
                    width={350}
                    height={350}
                  />
                </div>
                <div className="font-bold text-xl">{product.productName}</div>
                <div className="text-slate-400 text-lg font-bold">
                  {product.productType}
                </div>
                <div className="font-bold text-xl">${product.productPrice}</div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
