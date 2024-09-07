import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import Tooltip from "./ui/tooltip";

const LayoutAnimation = () => {
  const [open, setOpen] = useState(true);
  return (
    <Tooltip content="Layout Animation, the parent flex box className update will trigger a layout animation">
      <div
        className={cn(
          "flex w-[200px] justify-start border",
          open && "flex-row-reverse",
        )}
        onClick={() => setOpen(!open)}
      >
        <motion.div layout className="h-10 w-10 rounded-full bg-red-500" />
        <motion.div layout className="h-10 w-10 rounded-full bg-blue-500" />
      </div>
    </Tooltip>
  );
};

export default LayoutAnimation;
