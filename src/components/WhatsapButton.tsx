import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MessageCircle } from "lucide-react";

const FloatingWhatsAppButton = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href="https://wa.me/254759747580?text=Hello%20%20Prixess,%20I%20want%20to%20know%20more%20about%20your%20affiliate%20opportunities!"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-50 animate-shake"
          >
            <Button
              className="bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 animate-fade-in"
              size="icon"
            >
              <MessageCircle className="h-5 w-5" />
            </Button>
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>Chat with us on WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default FloatingWhatsAppButton;
