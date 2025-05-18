import React from "react";
import { Card } from "./Card";
import { cn } from "@/lib/utils";

interface CoolFeature {
  icon?: string;
  title: string;
  description: string;
}

interface CoolFeaturesSectionProps {
  data: CoolFeature[];
}

export const CoolFeaturesSection: React.FC<CoolFeaturesSectionProps> = ({
  data,
}) => {
  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-dark">Why Join Trendyqash?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {data.map((feature, idx) => (
            <Card
              key={idx}
              icon={
                feature.icon ? (
                  <i
                    className={cn(feature.icon, "text-primary text-4xl mb-4")}
                  />
                ) : undefined
              }
              title={feature.title}
              description={feature.description}
              className="bg-white text-center shadow-lg p-6 rounded-xl hover:shadow-xl transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
