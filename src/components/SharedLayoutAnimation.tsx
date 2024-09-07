import { motion } from "framer-motion";
import { useState } from "react";

const SharedLayoutAnimation = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="grid grid-cols-3 gap-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="relative h-[60px] w-full cursor-pointer border"
          onClick={() => setSelected(i)}
        >
          {selected === i && (
            <motion.div
              layoutId="shared-layout"
              className="absolute inset-0 rounded-sm outline"
            />
          )}
          Test
        </div>
      ))}
    </div>
  );
};

export default SharedLayoutAnimation;
