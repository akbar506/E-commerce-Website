"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "../../../../sanity/lib/image";
import { Suspense } from "react";
import SkeletonImage from "@/components/skeleton_image";
import SkeletonText from "@/components/skeleton_text";

const getProducts = async () => {
  return await client.fetch(`*[_type == 'products']`);
}

export default async function productDetail({ params, }: { params: { _id: any } }) {
  const [num, setNum] = useState<number>(0);
  const products = await getProducts();
  const specificProduct = products.filter(
    (product: any) => product._id === params._id
  );

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
          {specificProduct.map((product: any) => (
            <>
              <div
                className="flex flex-wrap md:flex-nowrap justify-between md:justify-evenly mt-10 w-screen lg:w-9/12 2xl:w-6/12"
                key={product._id}
              >
                <div className="flex justify-center w-screen">
                  <Suspense fallback={<SkeletonImage />}>
                  <Image
                    src={urlForImage(product.productImage)}
                    alt={product.productALT}
                    width={500}
                    height={600}
                  />
                  </Suspense>
                </div>
                <div className=" flex flex-col gap-y-10 p-5">
                  <div className="flex flex-col">
                    <Suspense fallback={<SkeletonText />}>
                    <span className="text-3xl">{product.productName}</span>
                    <span className="text-lg text-slate-400 font-bold">
                      {product.productType}
                    </span>
                    </Suspense>
                  </div>
                  <div>
                    <div className="font-bold text-lg">Select Size</div>
                    <div className="flex gap-5 ">
                      <div className="hover:shadow-lg px-3 cursor-pointer select-none py-2 box-border hover:rounded-full flex justify-center items-center font-bold text-neutral-700">
                        XS
                      </div>
                      <div className="hover:shadow-lg px-3 py-2 cursor-pointer select-none hover:rounded-full flex justify-center items-center font-bold text-neutral-700">
                        S
                      </div>
                      <div className="hover:shadow-lg px-3 py-2 cursor-pointer select-none hover:rounded-full flex justify-center items-center font-bold text-neutral-700">
                        M
                      </div>
                      <div className="hover:shadow-lg px-3 py-2 cursor-pointer select-none hover:rounded-full flex justify-center items-center font-bold text-neutral-700">
                        L
                      </div>
                      <div className="hover:shadow-lg px-3 py-2 cursor-pointer select-none hover:rounded-full flex justify-center items-center font-bold text-neutral-700">
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
                      <div className="py-2 px-4 font-bold">
                        {num}
                      </div>
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
          {specificProduct.map((product: any) => (
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
                        {product.productDetail}
                      </div>
                    </div>
                    <div className="flex flex-wrap sm:flex-nowrap justify-between mt-5">
                      <div className="text-xl text-neutral-500 font-bold mb-5">
                        PRODUCT CARE
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
