// import { motion } from "framer-motion";

// const Loader = () => {
//   return (
//     <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
//       <motion.h1
//         className="text-3xl font-bold gradient-text"
//         animate={{ opacity: [0, 1, 0] }}
//         transition={{ repeat: Infinity, duration: 1.5 }}
//       >
//         Bharath P
//       </motion.h1>
//     </div>
//   );
// };

// export default Loader;
const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <h1 className="text-2xl font-bold gradient-text animate-pulse">
        Bharath P
      </h1>
    </div>
  );
};

export default Loader;