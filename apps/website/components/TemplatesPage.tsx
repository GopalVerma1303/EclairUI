import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { TEMPLATES } from "@/content/templates";

interface Template {
  name: string;
  docsLink: string;
  description: string;
  images: string[];
  sp: number;
  cp: number;
}

interface TemplatePageProps {
  templates: Record<string, Template[]>;
}

export const TemplatesPage: React.FC<TemplatePageProps> = () => {
  return (
    <div className="min-h-screen mt-[50px] mb-36 mx-5">
      <div className="max-w-7xl mx-auto">
        {TEMPLATES.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-lg overflow-hidden"
          >
            <TemplateItem item={item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const TemplateItem: React.FC<{ item: Template }> = ({ item }) => {
  return (
    <div className="p-6 gap-4 flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between bg-[#f1f1f1] dark:bg-[#1f1f1f] border dark:border-white/15 border-black/15 rounded-lg w-full">
      <Link
        href={item.docsLink}
        className="flex flex-col space-y-4 flex-grow w-[380px] py-16"
      >
        <h2 className="font-bold text-xl break-words">
          {item.name || "Portfolio template"}
        </h2>
        <p className="opacity-60 break-words text-sm">
          {item.description ||
            "Every Portfolio template is a multi-page responsive website."}
        </p>
        {/* <p className="font-bold text-3xl"> */}
        {/*   ${item.sp}{" "} */}
        {/*   <span className="opacity-60 text-sm font-light line-through"> */}
        {/*     ${item.cp} */}
        {/*   </span> */}
        {/*   <span className="opacity-80 text-green-500 text-sm  mx-2"> */}
        {/*     {item.sp === 0 */}
        {/*       ? "FREE" */}
        {/*       : `${(((item.cp - item.sp) / item.cp) * 100).toFixed(2)}% off!`} */}
        {/*   </span> */}
        {/* </p> */}
      </Link>
      <div className="flex flex-col sm:flex-row gap-2 w-full">
        {item.images?.slice(0, 3).map((src, index) => (
          <div
            key={index}
            className={`relative w-full h-60 m-1 rounded-md overflow-hidden 
        ${index === 0 ? "" : index === 1 ? "hidden md:block" : "hidden lg:block"}`}
          >
            <Image
              src={src || "https://gopalverma.com/og.jpeg"}
              alt={`template preview ${index + 1}`}
              width={216}
              height={216}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
