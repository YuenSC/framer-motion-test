import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <main>
      <motion.div
        className="h-10 w-10 rounded-full bg-blue-500"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      />
    </main>
  );
}

export default App;
