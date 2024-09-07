import { motion, Variants } from "framer-motion";
import Tooltip from "./ui/tooltip";

const BoxVariants = {
  hidden: {
    "--size": "100px",
    "--mobile-size": "100px",
  },
  visible: {
    "--size": "200px",
    "--mobile-size": "50px",
  },
} as Variants;

const ResponsiveByCSSVariableDemo = () => {
  return (
    <Tooltip content="When hove, this component will shrink when in mobile, and grow when in desktop">
      <motion.div
        initial="hidden"
        whileHover="visible"
        className="h-[var(--mobile-size)] w-[var(--mobile-size)] bg-red-500 md:h-[var(--size)] md:w-[var(--size)]"
        variants={BoxVariants}
      />
    </Tooltip>
  );
};

export default ResponsiveByCSSVariableDemo;
