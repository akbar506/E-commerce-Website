import React from "react";
import { Events } from "./constants";
import Image from "next/image";

export default function Promotion() {
  return (
    <>
      <div className="my-20 mx-5 ">
        <div className="flex flex-col items-center gap-6">
          <div>
            <p className="text-blue-600 font-bold">
              <small>PROMOTIONS</small>
            </p>
          </div>

          <div>
            <h2 className=" text-4xl font-bold">Our Promotions Events</h2>
          </div>

          <div className="flex gap-5 xl:justify-between justify-center flex-wrap">
            <div className="flex flex-col gap-5">
              <div className=" flex border-2 justify-between bg-slate-300 flex-shrink">
                <div className="block sm:flex sm:flex-col justify-center p-7">
                  <h3 className="text-2xl font-bold">GET UP TO 60%</h3>
                  <p>For the summer season</p>
                </div>
                <div>
                  <Image
                    src={Events.event1.url}
                    alt={Events.event1.alt}
                    width={250}
                    height={250}
                    className="min-h-[220px] min-w-[50px]"
                  />
                </div>
              </div>

              <div className=" bg-black border-red-700 py-10 flex  gap-5 flex-col justify-center items-center flex-shrink">
                <h3 className="text-2xl font-bold text-white">GET 30% Off</h3>
                <p className="text-white">USE PROMO CODE</p>
                <p className="bg-neutral-700 px-10 py-2 font-bold text-white rounded-md">
                  D I N E W E E K E N D S A L E
                </p>
              </div>
            </div>

            <div className="sm:flex gap-x-5 block">
              <div className="bg-yellow-200 w-72 mb-5">
                <p className="p-5">Flex Sweatshirt</p>
                <div className="px-5 mb-3">
                  <span className="mr-3 line-through">$100.00</span>
                  <span className="font-bold">$75.00</span>
                </div>
                <div>
                  <Image
                    src={Events.event2.url}
                    alt={Events.event2.alt}
                    width={250}
                    height={250}
                  />
                </div>
              </div>
              <div className="bg-slate-300 w-72 max-h-[415px]">
                <p className="p-5">Flex Push Button Bomber</p>
                <div>
                  <span className="p-5 line-through">$225.00</span>
                  <span className="font-bold">$190.00</span>
                </div>
                <div>
                  <Image
                    src={Events.event3.url}
                    alt={Events.event3.alt}
                    width={250}
                    height={250}
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
