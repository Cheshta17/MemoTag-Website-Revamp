'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export default function FollowBall() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 25);
      mouseY.set(e.clientY - 25);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 50,
        height: 50,
        borderRadius: '50%',
        backgroundColor: '#6C75FF',
        zIndex: 9999,
        pointerEvents: 'none',
        x: smoothX,
        y: smoothY,
        boxShadow: '0 0 20px #6C75FF', 
      }}
    />
  );
}
