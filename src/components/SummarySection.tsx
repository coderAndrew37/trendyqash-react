// src/components/PlatformSummarySection.tsx

import React from "react";
import { Card } from "./Card"; // assumes Card is in the same folder
import { cn } from "@/lib/utils";

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
    <section className="bg-white py-20" id="about">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-primary">
          About Trendyqash
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {data.map((item, idx) => (
            <Card
              key={idx}
              icon={
                item.icon ? (
                  <i className={cn(item.icon, "text-primary mr-2")} />
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
              className="bg-light text-left"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
