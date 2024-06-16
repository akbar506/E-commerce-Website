// "use client";
// import React, { useState } from "react";
// import { Products, Product } from "@/components/constants";
// import { Skeleton } from "@/components/ui/skeleton";

// function Loading() {
//   const [allLoadingProducts, setLoadingAllProduct] = useState<Product[]>([]);

//   return (
//     <>
//       <div className="min-h-screen">
//         {allLoadingProducts.map(() => (
//           <div className="flex flex-col space-y-3">
//             <Skeleton className="h-[325px] w-[350px] rounded-xl" />
//             <div className="space-y-2">
//               <Skeleton className="h-4 w-[250px]" />
//               <Skeleton className="h-4 w-[200px]" />
//             </div>
//           </div>
//         ))}
//         ;
//       </div>
//     </>
//   );
// }

// export default Loading;
import React from "react";
import "./style.css";

function Loading() {
  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      <div className="loader"></div>
    </div>
  );
}

export default Loading;
