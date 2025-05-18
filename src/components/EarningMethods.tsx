import React, { useState } from "react";
import { Card } from "./Card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface EarningMethod {
  icon?: string;
  title: string;
  description: string;
  details?: string[];
}

interface MethodsSectionProps {
  data: EarningMethod[];
}

const ITEMS_PER_PAGE = 6;

export const MethodsSection: React.FC<MethodsSectionProps> = ({ data }) => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const paginated = data.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <section className="bg-light py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-dark">
          How Can I Earn With Trendyqash?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {paginated.map((method, idx) => (
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

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-10 flex justify-center items-center gap-4">
            <Button
              variant="outline"
              disabled={page === 0}
              onClick={() => setPage((p) => p - 1)}
            >
              Previous
            </Button>
            <span className="text-dark font-medium">
              Page {page + 1} of {totalPages}
            </span>
            <Button
              variant="outline"
              disabled={page === totalPages - 1}
              onClick={() => setPage((p) => p + 1)}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
