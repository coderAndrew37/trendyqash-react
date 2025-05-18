import React from "react";
import {
  Card as ShadCard,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { colors } from "../colors/colors";

interface CardProps {
  icon?: React.ReactNode | React.ElementType;
  imageUrl?: string;
  title?: string;
  description?: string;
  audioUrl?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({
  icon,
  imageUrl,
  title,
  description,
  audioUrl,
  ctaText,
  onCtaClick,
  className,
}) => {
  return (
    <ShadCard
      className={cn(
        "rounded-2xl shadow-lg p-6 space-y-4 text-center transition hover:shadow-xl",
        className
      )}
      style={{ backgroundColor: "white" }}
    >
      <CardHeader className="flex flex-col items-center">
        {imageUrl && (
          <img
            src={imageUrl}
            alt="card"
            className="w-16 h-16 mb-2 object-contain"
          />
        )}
        {!imageUrl && icon && (
          <div style={{ color: colors.primary }} className="text-4xl mb-2">
            {typeof icon === "function" ? React.createElement(icon) : icon}
          </div>
        )}
        {title && (
          <CardTitle
            className="text-xl font-bold mb-1"
            style={{ color: colors.dark }}
          >
            {title}
          </CardTitle>
        )}
      </CardHeader>

      <CardContent>
        {description && (
          <p className="text-base text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}

        {audioUrl && (
          <audio controls className="mt-4 w-full">
            <source src={audioUrl} type="audio/ogg" />
            Your browser does not support audio.
          </audio>
        )}
      </CardContent>

      {ctaText && (
        <CardFooter>
          <Button
            onClick={onCtaClick}
            style={{ backgroundColor: colors.primary, color: "white" }}
            className="w-full hover:opacity-90"
          >
            {ctaText}
          </Button>
        </CardFooter>
      )}
    </ShadCard>
  );
};
