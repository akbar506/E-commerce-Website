import React from "react";
import Image from "next/image";
import { Logo } from "@/lib/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div>
        <div className="flex justify-evenly mb-20 flex-wrap">
          <div className="flex flex-col gap-10 p-10">
            <div>
              <Image src={Logo.url} alt={Logo.alt} width={170} height={35} />
            </div>
            <div className="max-w-[500px]">
              Small, artisan label that offers a thoughtfully curated collection
              of high quality everyday essentials made.
            </div>
            <div className="flex gap-3">
              <div className="bg-slate-100 p-3 rounded-md cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 50 50"
                >
                  <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                </svg>
              </div>
              <div className="bg-slate-100 p-3 rounded-md cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 50 50"
                >
                  <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                </svg>
              </div>
              <div className="bg-slate-100 p-3 rounded-md cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 50 50"
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex justify-start sm:justify-evenly flex-wrap sm:gap-28 gap-10 p-10">
              <div>
                <div className="mb-5 text-xl font-bold text-neutral-500">
                  <h4>Company</h4>
                </div>
                <div className="text-lg text-neutral-500">About</div>
                <div className="text-lg text-neutral-500">Terms of Use</div>
                <div className="text-lg text-neutral-500">Privacy Policy</div>
                <div className="text-lg text-neutral-500">How it Works</div>
                <div className="text-lg text-neutral-500">Contact Us</div>
              </div>
              <div>
                <div className="mb-5 text-xl text-neutral-500 font-bold">
                  <h4>Support</h4>
                </div>
                <div className="text-lg text-neutral-500">Support Carrer</div>
                <div className="text-lg text-neutral-500">24h Service</div>
                <div className="text-lg text-neutral-500">Quick Chat</div>
              </div>
              <div>
                <div className="mb-5 text-xl text-neutral-500 font-bold">
                  <h4>Contact</h4>
                </div>
                <div className="text-lg text-neutral-500">Whatsapp</div>
                <div className="text-lg text-neutral-500">Support 24h</div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-black flex justify-evenly p-5">
          <div>Copyright © 2022 Dine Market</div>
          <div>
            Design by. <strong>Weird Design Studio</strong>
          </div>
          <div>
            Code by.{" "}
            <strong>
              <Link
                href={
                  "https://github.com/akbar506/E-commerce-Website/tree/master/e-commerce-clothing-website"
                }
                target="_blank"
              >
                <span className="underline">akbar506 on github</span>
              </Link>
            </strong>
          </div>
        </div>
      </div>
    </>
  );
}
