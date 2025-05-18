// components/TestimonialsSection.tsx

import { Card } from "./Card";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { colors } from "../colors/colors";

interface Testimonial {
  name: string;
  feedback: string;
  rating: number;
}

interface TestimonialsProps {
  data: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsProps> = ({ data }) => {
  return (
    <section
      id="testimonials"
      className="py-20"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold" style={{ color: colors.dark }}>
          What Our Users Say
        </h2>

        <ScrollArea className="w-full whitespace-nowrap mt-8 overflow-x-auto pb-2">
          <div className="flex gap-6">
            {data.map((item, idx) => (
              <Card
                key={idx}
                title={`— ${item.name}`}
                description={item.feedback}
                className="text-center shadow-lg p-6 min-w-[300px] max-w-sm mx-auto"
                style={{ backgroundColor: colors.secondary }}
              >
                <Separator className="my-4" />
                <div style={{ color: "#facc15", fontSize: "1.25rem" }}>
                  {"⭐".repeat(item.rating)}
                </div>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};
