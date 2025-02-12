//@ts-nocheck

import React from "react";
import { getPagesUnderRoute } from "nextra/context";
import { motion } from "framer-motion";
import ToolCard from "./ToolCard"; // Make sure to import the ToolCard component

export function ToolsIndex() {
  const currentPageTitle = "Tools";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 justify-center items-center mx-auto">
      {getPagesUnderRoute("/tools")
        .filter(
          (page) =>
            page.meta?.title !== currentPageTitle &&
            page.frontMatter?.title !== currentPageTitle,
        )
        .map((page) => {
          return (
            <ToolCard
              href={page.route}
              key={page.route}
              title={page.meta?.title || page.frontMatter?.title || page.name}
              description={
                page.frontMatter?.description || "No description available"
              }
              imageUrl={
                page.frontMatter?.image || "https://webui.gopx.dev/og.jpeg"
              }
            />
          );
        })}
    </div>
  );
}

const ToolMenu: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-4 w-full mx-auto flex justify-center items-center mt-12 mb-32 max-w-5xl"
    >
      <ToolsIndex />
    </motion.div>
  );
};

export default ToolMenu;
