import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Wand2 } from "lucide-react";
import { useState } from "react";

export interface Faq {
  question: string;
  answer: string;
}

export const FAQSection = ({ faqs }: { faqs: Faq[] }) => {
  const [query, setQuery] = useState("");
  const filtered = faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(query.toLowerCase()) ||
      f.answer.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto" id="faqs">
      <h2 className="text-3xl font-bold text-center text-dark mb-10">
        Frequently Asked Questions
      </h2>

      <Input
        type="text"
        placeholder="Search for a question..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-6 w-full"
      />

      {filtered.length > 0 ? (
        <Accordion type="single" collapsible className="w-full">
          {filtered.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-textSecondary">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Can’t find what you’re looking for?
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="inline-flex gap-2 text-white bg-primary">
                <Wand2 size={18} /> Ask Trendy AI Assistant
              </Button>
            </DialogTrigger>
            <DialogContent className="text-left max-w-3xl h-[500px]">
              <DialogTitle>TrendyQash AI Assistant</DialogTitle>
              <iframe
                src="https://chat.openai.com" // replace with your AI endpoint or embed
                className="w-full h-full rounded-md border"
              />
            </DialogContent>
          </Dialog>
        </div>
      )}
    </section>
  );
};
