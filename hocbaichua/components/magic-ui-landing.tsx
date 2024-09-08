'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { LampContainer } from './ui/lamp'
import ShinyButton from './magicui/shiny-button'
import { useTheme } from 'next-themes'
import { BackgroundBeams } from './ui/background-beams'

const words = `Công cụ toàn diện giúp người học có thể tiếp thu kiến thức một
              cách nhanh chóng, hiệu quả nhờ sự hỗ trợ của AI`
  .split(' ')
  .map((word) => ({
    text: word
    // className: "text-white",
  }))

export function MagicUiLanding() {
  const [email, setEmail] = useState('')
  const { setTheme, theme } = useTheme()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <div className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 z-10">
        <h1 className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Hocbaichua.com
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-4 text-sm text-center relative z-10">
          Công cụ toàn diện giúp người học có thể tiếp thu kiến thức một cách
          nhanh chóng, hiệu quả nhờ sự hỗ trợ của AI
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
          <Button
            type="submit"
            className="bg-white text-black hover:bg-gray-200"
          >
            Join Waitlist
          </Button>
        </form>
      </div>
      <BackgroundBeams />
    </div>
  )
}
