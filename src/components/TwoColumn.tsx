import React from "react";
import { cn } from "@/lib/utils";

interface TwoColumnProps {
  left: React.ReactNode;
  right: React.ReactNode;
  reverse?: boolean;
  className?: string;
}

export const TwoColumn: React.FC<TwoColumnProps> = ({
  left,
  right,
  reverse = false,
  className,
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 px-4 md:px-12",
        className
      )}
    >
      {reverse ? (
        <>
          <div className="order-2 md:order-1">{right}</div>
          <div className="order-1 md:order-2">{left}</div>
        </>
      ) : (
        <>
          <div>{left}</div>
          <div>{right}</div>
        </>
      )}
    </div>
  );
};
