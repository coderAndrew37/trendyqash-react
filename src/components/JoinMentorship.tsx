import React from "react";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

export const JoinMentorshipBanner: React.FC = () => {
  return (
    <section className="bg-secondary py-16 text-center text-dark px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Still in doubt? We’ve got your back 💬
        </h2>
        <p className="text-lg mb-6">
          Join our exclusive <strong>WhatsApp mentorship group</strong> and get
          guided by real members earning daily!
        </p>
        <Button
          asChild
          size="lg"
          className="bg-primary text-white text-lg hover:bg-opacity-90 transition"
        >
          <a
            href="https://chat.whatsapp.com/your-group-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <MessageCircle size={20} />
            Join WhatsApp Mentorship
          </a>
        </Button>
      </div>
    </section>
  );
};
