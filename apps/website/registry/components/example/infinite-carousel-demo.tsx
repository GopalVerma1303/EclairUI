import React from "react";
import InfiniteCarousel from "@/components/ui/infinite-carousel";

const InfiniteCarouselDemo: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-8 w-full">
      <InfiniteCarousel
        images={[
          "https://eclairui.gopalverma.com/assets/brands/nextjs.svg",
          "https://eclairui.gopalverma.com/assets/brands/tailwind.svg",
          "https://eclairui.gopalverma.com/assets/brands/framer-motion.svg",
          "https://eclairui.gopalverma.com/assets/brands/react.svg",
          "https://eclairui.gopalverma.com/assets/brands/gsap.png",
        ]}
        direction="right"
        speed={25}
        itemWidth={50}
        itemHeight={50}
      />
      <InfiniteCarousel
        images={[
          "https://eclairui.gopalverma.com/assets/brands/nextjs.svg",
          "https://eclairui.gopalverma.com/assets/brands/tailwind.svg",
          "https://eclairui.gopalverma.com/assets/brands/framer-motion.svg",
          "https://eclairui.gopalverma.com/assets/brands/react.svg",
          "https://eclairui.gopalverma.com/assets/brands/gsap.png",
        ]}
        direction="left"
        speed={25}
        itemWidth={50}
        itemHeight={50}
      />
    </div>
  );
};

export default InfiniteCarouselDemo;
