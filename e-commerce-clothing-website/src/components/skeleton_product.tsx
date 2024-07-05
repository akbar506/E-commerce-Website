import React from "react";
import { Skeleton } from "./ui/skeleton";

export default function SkeletonProduct() {
    return (
        <>
            <div className="mx-0 md:mx-5">
                <div className="max-w-[1850px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-3">
                    <div className="mx-auto">
                        <div className="flex flex-col space-y-3">
                            <Skeleton className="h-[300px] w-[300px] rounded-xl" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[150px]" />
                                <Skeleton className="h-4 w-[100px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
