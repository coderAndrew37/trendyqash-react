import React from "react";
import { Card } from "./Card";
import { colors } from "../colors/colors";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-10" style={{ color: colors.dark }}>
          What Our Users Say
        </h2>

        <div className="relative">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="gap-4">
              {data.map((item, idx) => (
                <CarouselItem
                  key={idx}
                  className="basis-full sm:basis-1/2 md:basis-1/3"
                >
                  <Card
                    title={`— ${item.name}`}
                    description={item.feedback}
                    className="text-center p-6 min-w-[280px]"
                    style={{ backgroundColor: colors.overlay }}
                  >
                    <div className="mt-4 flex items-center gap-1 text-yellow">
                      {[...Array(item.rating)].map((_, i) => (
                        <span key={i} className="text-lg">
                          ⭐
                        </span>
                      ))}
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-10 top-1/2 -translate-y-1/2 bg-primary text-white font-bold px-4 py-2 rounded-full shadow hover:bg-primary transition">
              ◀ Prev
            </CarouselPrevious>
            <CarouselNext className="absolute -right-10 top-1/2 -translate-y-1/2 bg-primary text-white font-bold px-4 py-2 rounded-full shadow hover:bg-primary transition">
              Next ▶
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
