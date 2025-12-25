import { useState, useEffect } from "react";
import { Star, Check } from "lucide-react";
import { WhatsAppAudioPlayer } from "./WhatsAppAudioPlayer";

interface Message {
  sender: "consultant" | "client";
  text?: string;
  audioUrl?: string;
  audioDuration?: string;
  time: string;
}

interface WhatsAppTestimonialProps {
  clientName: string;
  clientCity: string;
  clientAvatar: string;
  consultantName: string;
  consultantAvatar: string;
  messages: Message[];
  rating: number;
}

export const WhatsAppTestimonial = ({
  clientName,
  clientCity,
  clientAvatar,
  consultantName,
  consultantAvatar,
  messages,
  rating,
}: WhatsAppTestimonialProps) => {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < messages.length) {
        setShowTyping(true);
        setTimeout(() => {
          setShowTyping(false);
          setVisibleMessages((prev) => prev + 1);
          currentIndex++;
        }, 800);
      } else {
        clearInterval(interval);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="bg-[#E7ECE6] rounded-2xl p-4 min-w-[320px] max-w-[400px] shadow-lg">
      {/* WhatsApp Header */}
      <div className="bg-[#075E54] rounded-t-lg -mx-4 -mt-4 px-4 py-3 mb-4 flex items-center gap-3">
        <img
          src={clientAvatar}
          alt={clientName}
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <div className="flex-1">
          <h3 className="text-white font-semibold text-sm">{clientName}</h3>
          <p className="text-white/80 text-xs">online</p>
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-3 min-h-[300px]">
        {messages.slice(0, visibleMessages).map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "consultant" ? "justify-end" : "justify-start"
            } animate-fade-in`}
          >
            <div className="flex items-end gap-2 max-w-[85%]">
              {message.sender === "client" && (
                <img
                  src={clientAvatar}
                  alt={clientName}
                  className="w-8 h-8 rounded-full flex-shrink-0"
                />
              )}
              
              <div
                className={`relative rounded-lg px-3 py-2 ${
                  message.sender === "consultant"
                    ? "bg-[#DCF8C6] rounded-br-none"
                    : "bg-white rounded-bl-none"
                }`}
              >
                {message.sender === "client" && (
                  <p className="text-xs font-semibold text-[#075E54] mb-1">
                    {clientName}
                  </p>
                )}
                
                {message.text && (
                  <p className="text-sm text-gray-800 leading-relaxed">
                    {message.text}
                  </p>
                )}
                
                {message.audioUrl && (
                  <WhatsAppAudioPlayer
                    audioUrl={message.audioUrl}
                    duration={message.audioDuration}
                  />
                )}
                
                <div className="flex items-center justify-end gap-1 mt-1">
                  <span className="text-[10px] text-gray-500">
                    {message.time}
                  </span>
                  {message.sender === "consultant" && (
                    <Check className="w-3 h-3 text-[#4FC3F7]" />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {showTyping && visibleMessages < messages.length && (
          <div className="flex justify-start animate-fade-in">
            <div className="flex items-end gap-2">
              <img
                src={clientAvatar}
                alt={clientName}
                className="w-8 h-8 rounded-full flex-shrink-0"
              />
              <div className="bg-white rounded-lg rounded-bl-none px-4 py-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Rating and location */}
      <div className="mt-4 pt-4 border-t border-gray-300">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex gap-0.5 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-gray-600">
              {clientName} • {clientCity}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
