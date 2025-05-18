import React from "react";
import { Card } from "./Card";
import { cn } from "@/lib/utils";

interface EarningMethod {
  icon?: string;
  title: string;
  description: string;
  details?: string[];
}

interface MethodsSectionProps {
  data: EarningMethod[];
}

export const MethodsSection: React.FC<MethodsSectionProps> = ({ data }) => {
  return (
    <section className="bg-light py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-dark">
          How Does Trendyqash Work?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {data.map((method, idx) => (
            <Card
              key={idx}
              icon={
                method.icon ? (
                  <i
                    className={cn(method.icon, "text-primary text-4xl mb-4")}
                  />
                ) : undefined
              }
              title={method.title}
              description={
                method.description || method.details?.length
                  ? `${method.description ?? ""} ` +
                    (method.details
                      ? `\n\n- ` + method.details.join("\n- ")
                      : "")
                  : undefined
              }
              className="bg-white shadow-lg p-6 rounded-2xl hover:shadow-xl transition-all"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
