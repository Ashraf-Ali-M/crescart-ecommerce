import { motion } from "framer-motion";

const HeroSection = () => {
  return (
      <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
      >
         <img className=" h-40 lg:h-full w-full" src="\hero_section\hero.png" alt="img" />
      </motion.div>
  );
}

export default HeroSection;