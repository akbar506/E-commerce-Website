'use client';
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export default function Navbar() {
    const [visible, setVisible] = useState<string>("hidden");

    const HandleHamburger = () => {
        { visible == 'hidden' ? setVisible('flex') : setVisible('hidden') }
    }

    return (
        <>
            <nav className="">
                <div className="flex justify-around p-8 items-center">
                    <div>
                        <Image src={Logo.url} width={Logo.width} height={Logo.height} alt={Logo.alt} />
                    </div>
                    <div className="flex justify-between items-center 2xl:w-1/2 w-8/12">
                        <div>
                            <ul className="hidden xl:flex gap-10">
                                <li><Link href={"/"} className="">Female</Link></li>
                                <li><Link href={"/"} className="">Male</Link></li>
                                <li><Link href={"/"} className="">Kids</Link></li>
                                <li><Link href={"/"} className="">All Products</Link></li>
                            </ul>
                        </div>
                        <div className="w-96 border rounded-md hidden xl:flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" className="h-5 w-5 ml-2" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                            </svg>
                            <Input className="focus-visible:border-0 h-7 w-36 2xl:w-96 border-0" placeholder="What you are looking for"></Input>
                        </div>
                    </div>


                    {/* Cart Icon */}
                    <div className="w-12 h-12 bg-slate-100 flex-col gap-0 rounded-full ml-10 hidden xl:flex justify-center items-center">
                            <span className="bg-red-600 rounded-full h-4 w-4 text-white flex justify-center items-center">
                                <small>0</small>
                            </span>
                        <button className="flex-col gap-0 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-cart w-10" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                            </svg>
                        </button>
                    </div>


                    {/* Hamburger Icon */}
                    <div className="flex xl:hidden">
                        <Button variant={"ghost"} className="w-11 p-1 bg-white" onClick={HandleHamburger}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                                <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
                            </svg>
                        </Button>
                    </div>
                </div>
                <div>
                    {visible != 'hidden' ? (
                        <>
                            <div className="flex xl:hidden justify-center items-center z-10">
                                <ul className="flex xl:hidden flex-col justify-center items-center h-screen gap-10">
                                    <div className="w-12 h-12 bg-slate-100 rounded-full ml-10 flex justify-center items-center">
                                        <button className="flex-col gap-0 flex justify-center items-center">
                                            <span className="bg-red-600 rounded-full h-4 w-4 text-white flex justify-center items-center">
                                                <small>0</small>
                                            </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-cart w-10" viewBox="0 0 16 16">
                                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                            </svg>
                                        </button>
                                    </div>
                                    <li><Link href={"/"} className="">Female</Link></li>
                                    <li><Link href={"/"} className="">Male</Link></li>
                                    <li><Link href={"/"} className="">Kids</Link></li>
                                    <li><Link href={"/"} className="">All Products</Link></li>
                                </ul>
                            </div>
                        </>
                    ) :
                        <div></div>
                    }
                </div>
            </nav>
        </>
    );
}