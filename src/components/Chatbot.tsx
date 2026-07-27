"use client";

import { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  ArrowRight,
  Phone,
  Mail,
  Bot,
  User,
} from "lucide-react";
import { WhatsappIcon } from "./SocialIcons";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  options?: { label: string; action: string }[];
  cta?: { text: string; href: string; icon?: "whatsapp" | "email" | "contact" };
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "👋 Hi there! Welcome to ZTA Lab. How can we help turn your digital ideas into reality today?",
      options: [
        { label: "🌐 Website & App Services", action: "services" },
        { label: "💼 Our Portfolio Work", action: "portfolio" },
        { label: "📞 Get Direct Contact", action: "contact" },
        { label: "💬 Chat on WhatsApp", action: "whatsapp" },
      ],
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleOptionClick = (action: string, label: string) => {
    // Add user message
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: label,
    };

    let botResponse: Message;

    switch (action) {
      case "services":
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "We specialize in 3 core domains:\n• Website Design & Development (E-commerce, Business Portals, Landing Pages)\n• Mobile & Web App Development (iOS, Android, Custom Web Apps)\n• Digital Marketing (SEO, Google/Meta Ads, Social Media Strategy)",
          options: [
            { label: "💼 View Portfolio", action: "portfolio" },
            { label: "🚀 Start a Project", action: "contact" },
          ],
        };
        break;

      case "portfolio":
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "We have built 10+ custom digital platforms across e-commerce, web applications, and digital marketing systems.",
          cta: {
            text: "Jump to Portfolio Section",
            href: "#portfolio",
            icon: "contact",
          },
          options: [
            { label: "🌐 Explore Services", action: "services" },
            { label: "💬 WhatsApp Team", action: "whatsapp" },
          ],
        };
        break;

      case "contact":
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "You can reach out to us directly:\n• Phone: +8801976540046 / +8801712345678\n• Email: info@ztalab.com\n• Location: Dhaka, Bangladesh",
          cta: {
            text: "Go to Contact Form",
            href: "#contact",
            icon: "contact",
          },
        };
        break;

      case "whatsapp":
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "Click below to start an instant WhatsApp conversation with our founders and technical team!",
          cta: {
            text: "Open WhatsApp Chat",
            href: "https://wa.me/8801976540046",
            icon: "whatsapp",
          },
        };
        break;

      default:
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "Thanks for reaching out! A strategist from ZTA Lab will respond to your inquiry.",
          options: [
            { label: "📞 Direct Contact Info", action: "contact" },
            { label: "💬 WhatsApp Us", action: "whatsapp" },
          ],
        };
        break;
    }

    setMessages((prev) => [...prev, userMsg, botResponse]);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setInput("");

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: userText,
    };

    const lower = userText.toLowerCase();
    let replyText =
      "Thank you for your message! How would you like to proceed?";
    let ctaObj: Message["cta"] | undefined = undefined;

    if (
      lower.includes("price") ||
      lower.includes("cost") ||
      lower.includes("budget") ||
      lower.includes("quote")
    ) {
      replyText =
        "At ZTA Lab, we offer custom tailored solutions based on project requirements. Let's discuss your scope directly!";
      ctaObj = {
        text: "Request a Custom Quote",
        href: "#contact",
        icon: "contact",
      };
    } else if (
      lower.includes("phone") ||
      lower.includes("call") ||
      lower.includes("number")
    ) {
      replyText =
        "You can call us directly at +8801976540046 or +8801712345678!";
    } else if (
      lower.includes("service") ||
      lower.includes("dev") ||
      lower.includes("web") ||
      lower.includes("app")
    ) {
      replyText =
        "We build custom websites, full-stack web platforms, mobile apps, and execute data-driven digital marketing campaigns.";
      ctaObj = {
        text: "View Our Services",
        href: "#services",
        icon: "contact",
      };
    } else {
      replyText =
        "Got it! Our team is available on WhatsApp or through our direct contact form.";
      ctaObj = {
        text: "Chat on WhatsApp",
        href: "https://wa.me/8801976540046",
        icon: "whatsapp",
      };
    }

    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      sender: "bot",
      text: replyText,
      cta: ctaObj,
      options: [
        { label: "🌐 Services", action: "services" },
        { label: "📞 Contact Us", action: "contact" },
      ],
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground p-4 sm:px-5 sm:py-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 border border-primary-foreground/20 animate-bounce-subtle"
          aria-label="Open ZTA Lab Assistant"
        >
          <div className="relative">
            <Bot className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full" />
          </div>
          <span className="hidden sm:inline font-bold text-sm tracking-wide">
            Chat with ZTA Lab
          </span>
        </button>
      )}

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="w-[90vw] max-w-[380px] sm:w-[400px] h-[520px] bg-card border border-border/80 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn backdrop-blur-xl">
          {/* Top Chat Header */}
          <div className="bg-linear-to-r from-secondary via-card to-secondary p-4 border-b border-border/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-md">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-foreground flex items-center gap-2">
                  ZTA Assistant
                  <span className="w-2 h-2 rounded-full bg-primary" />
                </h4>
                <p className="text-[11px] text-muted-foreground font-medium">
                  Creative Technology Agency
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs scrollbar-thin">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-primary text-primary-foreground font-medium rounded-tr-none"
                      : "bg-secondary/90 text-foreground border border-border/60 rounded-tl-none"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>

                {/* Optional CTA Button */}
                {msg.cta && (
                  <a
                    href={msg.cta.href}
                    onClick={() => {
                      if (msg.cta?.href.startsWith("#")) {
                        setIsOpen(false);
                      }
                    }}
                    target={
                      msg.cta.href.startsWith("http") ? "_blank" : "_self"
                    }
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs shadow-md hover:opacity-90 transition-opacity"
                  >
                    {msg.cta.icon === "whatsapp" && (
                      <WhatsappIcon className="w-3.5 h-3.5" />
                    )}
                    <span>{msg.cta.text}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}

                {/* Option Chips */}
                {msg.options && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {msg.options.map((opt) => (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => handleOptionClick(opt.action, opt.label)}
                        className="px-3 py-1.5 rounded-full bg-background hover:bg-primary/20 hover:border-primary/40 border border-border text-[11px] font-semibold text-gray-200 transition-all"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer Form */}
          <form
            onSubmit={handleSend}
            className="p-3 bg-secondary/60 border-t border-border/60 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask ZTA Lab a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-full bg-background border border-border text-foreground text-xs placeholder-gray-500 focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
