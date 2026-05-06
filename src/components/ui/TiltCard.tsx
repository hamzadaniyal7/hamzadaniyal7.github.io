"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
};

export function TiltCard({ children, className, max = 6, glare = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);

  const sRx = useSpring(rx, { stiffness: 200, damping: 18, mass: 0.4 });
  const sRy = useSpring(ry, { stiffness: 200, damping: 18, mass: 0.4 });

  const transform = useMotionTemplate`perspective(1200px) rotateX(${sRx}deg) rotateY(${sRy}deg)`;
  const glareBg = useMotionTemplate`radial-gradient(400px circle at ${gx}% ${gy}%, rgba(212,175,55,0.28), transparent 50%)`;

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * (max * 2));
    rx.set((0.5 - py) * (max * 2));
    gx.set(px * 100);
    gy.set(py * 100);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transform }}
      className={cn("relative will-change-transform", className)}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{ background: glareBg }}
        />
      )}
    </motion.div>
  );
}
