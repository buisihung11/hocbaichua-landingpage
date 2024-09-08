"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useState } from "react";
import { LampContainer } from "./ui/lamp";
import ShinyButton from "./magicui/shiny-button";

const words = `Công cụ toàn diện giúp người học có thể tiếp thu kiến thức một
              cách nhanh chóng, hiệu quả nhờ sự hỗ trợ của AI`
  .split(" ")
  .map((word) => ({
    text: word,
    // className: "text-white",
  }));

export function MagicUiLanding() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <LampContainer isDarkMode={true} onToggleMode={() => {}}>
        <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="space-y-6 max-w-4xl"
          >
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Hocbaichua.com
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Công cụ toàn diện giúp người học có thể tiếp thu kiến thức một
              cách nhanh chóng, hiệu quả nhờ sự hỗ trợ của AI
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder-gray-400"
              />
              {/* <Button
                type="submit"
                className="bg-white text-black hover:bg-gray-200"
              >
                Join Waiting List
              </Button> */}
              <ShinyButton text="Join Waiting List" />
            </form>
          </motion.div>
        </main>
      </LampContainer>
    </div>
  );
}
