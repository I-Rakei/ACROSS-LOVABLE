import { motion, useInView, type Variants } from "motion/react";
import { useRef, useState, useEffect, type ReactNode } from "react";

// Every Reveal uses the same blur-in animation regardless of the `variant` prop —
// it's kept only so existing call sites (`variant="slide"`) don't need touching.
const blurVariant: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.2, 0.7, 0.2, 1] },
  },
};
const variantsByType: Record<"blur" | "slide", Variants> = {
  blur: blurVariant,
  slide: blurVariant,
};

export function Reveal({
  children,
  delay = 0,
  className,
  variant = "blur",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: "blur" | "slide";
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
      variants={variantsByType[variant]}
      initial="hidden"
      animate={hasSeen ? "show" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
