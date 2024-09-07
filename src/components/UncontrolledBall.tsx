import { motion } from "framer-motion";
import Tooltip from "./ui/tooltip";

const UncontrolledBall = () => {
  return (
    <Tooltip content="This ball will animate in when hovered over">
      <motion.div
        className="h-10 w-10 rounded-full bg-blue-500"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.2 }}
      />
    </Tooltip>
  );
};

export default UncontrolledBall;
