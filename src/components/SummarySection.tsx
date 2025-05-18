// components/PlatformSummarySection.tsx
import React from "react";
import { Card } from "./Card";
import { cn } from "@/lib/utils";
import { colors } from "../colors/colors"; // adjust path as needed

interface PlatformItem {
  icon?: string;
  title: string;
  description?: string;
  audio?: string;
  details?: string[];
}

interface PlatformSummarySectionProps {
  data: PlatformItem[];
}

export const PlatformSummarySection: React.FC<PlatformSummarySectionProps> = ({
  data,
}) => {
  return (
    <section
      id="about"
      className="py-20"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container mx-auto px-6">
        <h2
          className="text-3xl font-bold text-center"
          style={{ color: colors.primary }}
        >
          About Trendyqash
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {data.map((item, idx) => (
            <Card
              key={idx}
              icon={
                item.icon ? (
                  <i
                    className={cn(item.icon, "mr-2")}
                    style={{ color: colors.primary }}
                  />
                ) : undefined
              }
              title={item.title}
              description={
                item.description || item.details?.length
                  ? `${item.description ?? ""} ` +
                    (item.details ? `\n\n- ` + item.details.join("\n- ") : "")
                  : undefined
              }
              audioUrl={item.audio}
              className="text-left"
              style={{ backgroundColor: colors.secondary }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
