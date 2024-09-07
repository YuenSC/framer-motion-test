import { motion, Variants } from "framer-motion";
import Tooltip from "./components/ui/tooltip";

const list = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
} satisfies Variants;

const item = {
  hidden: { x: -10, opacity: 0 },
  visible: { x: 0, opacity: 1 },
} satisfies Variants;

const VariantDemoList = () => {
  return (
    <Tooltip content="This list will animate in one by one when in view">
      <motion.ul
        initial="hidden"
        whileInView="visible"
        variants={list}
        viewport={{ once: true }}
        transition={{
          staggerChildren: 0.1,
        }}
      >
        <motion.li variants={item}>Item 1</motion.li>
        <motion.li variants={item}>Item 2</motion.li>
        <motion.li variants={item}>Item 3</motion.li>
      </motion.ul>
    </Tooltip>
  );
};

export default VariantDemoList;
