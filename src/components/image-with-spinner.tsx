import React, { useState, useEffect, useRef } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ImageWithSpinnerProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  spinnerClassName?: string;
  showSpinner?: boolean;
}

export function ImageWithSpinner({
  src,
  alt = "",
  className,
  containerClassName,
  spinnerClassName,
  showSpinner = true,
  onLoad,
  onError,
  ...props
}: ImageWithSpinnerProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);

    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth !== 0) {
      setIsLoaded(true);
    }
  }, [src]);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    if (onLoad) onLoad(e);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);
    setIsLoaded(true);
    if (onError) onError(e);
  };

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {showSpinner && !isLoaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/10 backdrop-blur-[1px] animate-pulse">
          <Loader2 className={cn("w-7 h-7 animate-spin text-accent", spinnerClassName)} />
        </div>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          "transition-opacity duration-500 ease-in-out",
          !isLoaded ? "opacity-0" : "opacity-100",
          className
        )}
        {...props}
      />
    </div>
  );
}
