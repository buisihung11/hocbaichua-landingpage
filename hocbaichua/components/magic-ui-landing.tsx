'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function MagicUiLanding() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email)
    // Reset the email input
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="w-full p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold">
            Hocbaichua
          </Link>
          <div className="space-x-4">
            <Button variant="ghost" className="text-white hover:text-gray-300">
              Join Waiting List
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <div className="space-y-6 max-w-4xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
            Magic UI is the new way to build landing pages.
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Beautifully designed, animated components and templates built with Tailwind CSS, React, and Framer Motion.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder-gray-400"
            />
            <Button type="submit" className="bg-white text-black hover:bg-gray-200">
              Get Started for free
            </Button>
          </form>
        </div>
      </main>

      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              opacity: Math.random() * 0.5 + 0.5,
            }}
          />
        ))}
      </div>
    </div>
  )
}