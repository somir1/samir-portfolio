import { motion } from "framer-motion";
import type { ReactNode } from "react";
 
interface FadeInProps {
  children: ReactNode;
  delay?: number;
}
 
const FadeIn = ({ children, delay = 0 }: FadeInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};
 
export default FadeIn;
 