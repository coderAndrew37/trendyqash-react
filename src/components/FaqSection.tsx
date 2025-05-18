import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface Faq {
  question: string;
  answer: string;
}

export const FAQSection = ({ faqs }: { faqs: Faq[] }) => {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto" id="faqs">
      <h2 className="text-3xl font-bold text-center text-dark mb-10">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
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
    </section>
  );
};
