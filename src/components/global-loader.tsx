import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { AcrossLogo } from "./across-logo";

export function GlobalLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // If we're on the server, we don't block anything, but we keep isLoading true 
    // so the loader is rendered in the initial HTML and covers the screen.
    if (typeof window === "undefined") return;

    // If the document is already fully loaded by the time React hydrates
    if (document.readyState === "complete") {
      setIsLoading(false);
      return;
    }

    const handleLoad = () => {
      setIsLoading(false);
    };

    // Fallback: If it takes longer than 3.5 seconds, force hide the loader
    // This ensures that even on slow networks, the user can start seeing content
    // and the site doesn't get stuck indefinitely.
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="global-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
        >
          <div className="w-48 sm:w-64 max-w-[80vw]">
            {/* Display the logo with its entrance animation */}
            <AcrossLogo hoverable={false} entrance="zoom" />
          </div>
          
          {/* Subtle spinner below the logo */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8 flex flex-col items-center gap-3"
          >
            <div className="w-6 h-6 border-2 border-accent/20 border-t-accent rounded-full animate-spin" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
