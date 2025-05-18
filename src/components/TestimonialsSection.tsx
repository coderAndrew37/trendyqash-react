import { Card } from "./card";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

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
    <section id="testimonials" className="bg-white py-20">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-dark">What Our Users Say</h2>

        <ScrollArea className="w-full whitespace-nowrap mt-8 overflow-x-auto pb-2">
          <div className="flex gap-6">
            {data.map((item, idx) => (
              <Card
                key={idx}
                title={`— ${item.name}`}
                description={item.feedback}
                className="bg-gray-100 text-center shadow-lg p-6 min-w-[300px] max-w-sm mx-auto"
              >
                <Separator className="my-4" />
                <div className="text-yellow-500 text-xl">
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
