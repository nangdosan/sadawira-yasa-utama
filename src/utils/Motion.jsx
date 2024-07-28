// components/AnimatedComponent.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedComponent({ children, animation }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ ease: "easeIn", duration: 0.5 }}
      {...animation}
    >
      {children}
    </motion.div>
  );
}
