import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MessageCircle } from "lucide-react";
import { WHATSAP_LINK } from "@/constants";

const FloatingWhatsAppButton = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={WHATSAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-50 animate-infinite-shake"
          >
            <Button
              className="bg-green-500 text-white rounded-full p-6 shadow-lg hover:bg-green-600"
              size="icon"
            >
              <MessageCircle className="h-6 w-6" />
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
