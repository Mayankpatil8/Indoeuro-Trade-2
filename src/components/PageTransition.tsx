import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 15,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.21, 0.45, 0.15, 1.0], // Custom high-end cubic-bezier (slow-in, fast-out)
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: {
      duration: 0.35,
      ease: [0.21, 0.45, 0.15, 1.0],
    },
  },
};

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  // Sync scroll-to-top reset exactly on component mount.
  // This guarantees that the screen scrolls to top AFTER the outgoing page exits,
  // preventing visual layout jumps during route changes.
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full"
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};
