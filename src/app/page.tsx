'use client'
import ShareButton from "@/components/ui/share-button";
import WrapButton from "@/components/ui/wrap-button";
import { Twitter, Globe, LandPlot, Banana } from "lucide-react";
import React, { use } from "react";

const Page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white-300 bg-gray-800 p-10">Hello Everyone!</h1>
      <WrapButton 
        className="hover:bg-blue-600 text-white
          /* Padding */
          p-4         /* All sides */
          py-2        /* Top/bottom */
          px-4        /* Left/right */
          
          /* Margin */
          m-2         /* All sides */
          mx-10       /* Left/right */
          my-4        /* Top/bottom */
          mt-2        /* Top only */
          mb-2"       /* Bottom only */


        href="https://sahkamlesh.com.np">
        <Globe className="animate-spin" />
        Explore Now
      </WrapButton>
      <ShareButton links={[{icon: Twitter}, {icon: Banana}, {icon: LandPlot}]}>Share</ShareButton>
    </div>
  );
};

export default Page;