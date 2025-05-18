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
        "rounded-2xl shadow-lg bg-white p-6 space-y-4 text-center transition hover:shadow-xl",
        className
      )}
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
          <div className="text-4xl text-primary mb-2">
            {typeof icon === "function" ? React.createElement(icon) : icon}
          </div>
        )}
        {title && (
          <CardTitle className="text-xl font-bold text-dark mb-1">
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
            className="w-full bg-primary hover:bg-secondary text-white"
          >
            {ctaText}
          </Button>
        </CardFooter>
      )}
    </ShadCard>
  );
};
