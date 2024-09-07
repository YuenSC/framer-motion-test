import { motion, useScroll, useSpring } from "framer-motion";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 h-[10px] origin-[0%] bg-red-500"
      style={{ scaleX: scaleX }}
    />
  );
};

export default ScrollIndicator;
