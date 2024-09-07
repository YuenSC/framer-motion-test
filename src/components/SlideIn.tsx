import { motion } from "framer-motion";
import { ReactNode } from "react";

const initialPosition = {
  left: { x: -50, y: 0 },
  right: { x: 50, y: 0 },
  top: { x: 0, y: -50 },
  bottom: { x: 0, y: 50 },
};

const SlideIn = ({
  children,
  direction,
  className,
}: {
  children: ReactNode;
  direction: "left" | "right" | "top" | "bottom";
  className?: string;
}) => {
  return (
    <motion.div
      initial={initialPosition[direction]}
      whileInView={{ x: 0, y: 0 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true, amount: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
