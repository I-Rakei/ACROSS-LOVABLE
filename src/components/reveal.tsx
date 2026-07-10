import { motion, useInView, type Variants } from "motion/react";
import { useRef, useState, useEffect, type ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.2, 0.7, 0.2, 1] } },
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // `once: true` means the hook returns true as soon as the element enters the
  // viewport and never goes back to false, so the animation only fires once.
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });
  // Track whether we have ever been seen so we can keep the element visible
  // even when it scrolls back out of view.
  const [hasSeen, setHasSeen] = useState(false);

  useEffect(() => {
    if (isInView && !hasSeen) setHasSeen(true);
  }, [isInView, hasSeen]);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={hasSeen ? "show" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
