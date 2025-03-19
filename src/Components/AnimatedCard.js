import { motion } from "framer-motion";

const AnimatedCard = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800 rounded-lg p-6 shadow-xl"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
