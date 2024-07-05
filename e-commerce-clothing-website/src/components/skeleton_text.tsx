import React from "react";
import { Skeleton } from "./ui/skeleton";

export default function SkeletonText() {
    return (
        <>

            <div className="flex flex-col space-y-3">
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-4 w-[150px]" />
                    <Skeleton className="h-4 w-[100px]" />
                </div>
            </div>
        </>
    )
}
