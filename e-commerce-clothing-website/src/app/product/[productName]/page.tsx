"use client";
import React, { useState } from "react";
import { Products } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function productDetail({
  params,
}: {
  params: { productName: string };
}) {
  const productobj = Object.values(Products);
  const specificProduct = productobj.filter(
    (product) => product.productName === params.productName.replaceAll("-", " ")
  );
  console.log(specificProduct);
  const [num, setNum] = useState<number>(0);

  const AddNum = () => {
    setNum(num + 1);
  };

  const SubNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  return (
    <>
      <div className="min-h-screen">
        <div className="flex justify-center p-4">
          {specificProduct.map((product) => (
            <>
              <div
                className="flex flex-wrap md:flex-nowrap justify-between md:justify-evenly mt-10 w-screen lg:w-9/12 2xl:w-6/12"
                key={product.productName}
              >
                <div className="flex justify-center w-screen">
                  <Image
                    src={product.productURL}
                    alt={product.productALT}
                    width={500}
                    height={600}
                  />
                </div>
                <div className=" flex flex-col gap-y-10 p-5">
                  <div className="flex flex-col">
                    <span className="text-3xl">{product.productName}</span>
                    <span className="text-lg text-slate-400 font-bold">
                      {product.productType}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-lg">Select Size</div>
                    <div className="flex gap-5 ">
                      <div className="hover:shadow-lg px-3 cursor-pointer py-2 box-border hover:rounded-full flex justify-center items-center font-bold text-neutral-700">
                        XS
                      </div>
                      <div className="hover:shadow-lg px-3 py-2 cursor-pointer hover:rounded-full flex justify-center items-center font-bold text-neutral-700">
                        S
                      </div>
                      <div className="hover:shadow-lg px-3 py-2 cursor-pointer hover:rounded-full flex justify-center items-center font-bold text-neutral-700">
                        M
                      </div>
                      <div className="hover:shadow-lg px-3 py-2 cursor-pointer hover:rounded-full flex justify-center items-center font-bold text-neutral-700">
                        L
                      </div>
                      <div className="hover:shadow-lg px-3 py-2 cursor-pointer hover:rounded-full flex justify-center items-center font-bold text-neutral-700">
                        XL
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-7 items-center">
                    <div className="font-bold text-lg">Quantity: </div>
                    <div className="flex">
                      <div
                        className="py-2 px-4 font-bold rounded-full select-none cursor-pointer bg-slate-100"
                        onClick={SubNum}
                      >
                        -
                      </div>
                      <div className="py-2 px-4 font-bold">{num}</div>
                      <div
                        className="py-2 px-4 font-bold rounded-full select-none cursor-pointer bg-slate-100"
                        onClick={AddNum}
                      >
                        +
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <div>
                      <Button className="rounded-none px-10 py-6">
                        Add to cart
                      </Button>
                    </div>
                    <div className="text-2xl font-bold">
                      ${product.productPrice}.00
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div>
          {specificProduct.map((product) => (
            <>
              <div
                className="flex flex-col items-center mt-5 md:mt-10"
                key={product.productName}
              >
                <div className="flex flex-col items-center w-10/12 md:w-8/12 lg:6/12">
                  <div className="flex justify-start mb-10">
                    <h4 className="text-2xl font-bold">Product Information</h4>
                  </div>
                  <div>
                    <div className="flex flex-wrap sm:flex-nowrap justify-between border-t-2 p-3">
                      <div className="text-xl text-neutral-500 font-bold mb-5">
                        PRODUCT DETAILS
                      </div>
                      <div className="sm:w-7/12 w-10/12 text-justify text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </div>
                    </div>
                    <div className="flex flex-wrap sm:flex-nowrap justify-between mt-5">
                      <div className="text-xl text-neutral-500 font-bold mb-5">
                        PRODUCT DETAILS
                      </div>
                      <div className="sm:w-7/12 w-10/12 text-justify text-lg">
                        {product.productCare}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
