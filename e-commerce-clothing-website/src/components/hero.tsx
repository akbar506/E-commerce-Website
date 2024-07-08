import React from "react";
import { Button } from "@/components/ui/button";
import { Header, sponsers, cartIcon } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="flex justify-start xl:justify-around">
        <div className=" flex flex-col gap-24 p-11 xl:p-7">
          <div className="flex flex-col gap-14">
            <p className="font-bold rounded-md bg-blue-100 text-blue-700 w-28 h-10 flex justify-center items-center">
              Sale 70%
            </p>
            <h1 className="xl:text-6xl text-5xl font-bold max-w-[500px] xl:max-w-[650px]">
              An Industrial Take on Streetwear
            </h1>
            <div className="">
              <p className="text-lg">
                Anyone can beat you but no one can beat your outfit as long as
                you wear Dine outfits.
              </p>
            </div>
            <div>
              <Link href={"/products"}>
                <Button className="rounded-none text-lg w-60 h-16">
                  <Image
                    src={cartIcon.url}
                    alt={cartIcon.alt}
                    width={25}
                    height={25}
                    className="invert mr-4"
                  />
                  Start Shopping
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-evenly flex-wrap gap-5">
            <Image
              src={sponsers.sponser1.url}
              alt={sponsers.sponser1.alt}
              width={100}
              height={100}
            />
            <Image
              src={sponsers.sponser2.url}
              alt={sponsers.sponser2.alt}
              width={100}
              height={100}
            />
            <Image
              src={sponsers.sponser3.url}
              alt={sponsers.sponser3.alt}
              width={100}
              height={100}
            />
            <Image
              src={sponsers.sponser4.url}
              alt={sponsers.sponser4.alt}
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="bg-rose-100 hidden xl:flex xl:rounded-full">
          <Image src={Header.url} alt={Header.alt} width={628} height={604} />
        </div>
      </div>
    </>
  );
};

export default Hero;
