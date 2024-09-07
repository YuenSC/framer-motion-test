import { motion, useMotionValue, useTransform } from "framer-motion";
import Tooltip from "./ui/tooltip";

const MotionValueDemo = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);
  const scale = useTransform(y, [-100, 0, 100], [2, 1, 0]);

  return (
    <Tooltip content="You can drag this ball around and the opacity will change based on the x position, and the scale will change based on the y position">
      <motion.div
        drag
        style={{ x, y, opacity, scale }}
        dragConstraints={{ left: -0, right: 0, top: -0, bottom: 0 }}
        className="h-10 w-10 bg-red-500"
      />
    </Tooltip>
  );
};

export default MotionValueDemo;
