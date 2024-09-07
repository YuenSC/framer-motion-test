import { motion } from "framer-motion";
import { useRef } from "react";
import Tooltip from "./ui/tooltip";

const BallWithGesture = () => {
  const constraintsRef = useRef(null);

  return (
    <Tooltip content="This ball can be dragged around the border of the container">
      <div
        ref={constraintsRef}
        className="min-h-[300px] rounded-md border-2 border-red-500 p-2"
      >
        <motion.div
          drag
          dragConstraints={constraintsRef}
          className="h-10 w-10 rounded-sm bg-blue-500"
        />
      </div>
    </Tooltip>
  );
};

export default BallWithGesture;
