'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useState } from 'react'
import { toast } from 'sonner'
import FacebookLink from './socials/facebook-link'
import { BackgroundBeams } from './ui/background-beams'

export function MagicUiLanding() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true) // Start loading

    try {
      const response = await fetch('/api/joinWaitingList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({ email })
      })

      const result = await response.json()
      setLoading(false)
      if (result.result === 'success') {
        console.log('Email submitted successfully:', result.email)
        setEmail('')
        toast.success('Tham gia thành công 🌼')
      } else {
        console.error('Error submitting email:', result)
        toast.error('Có lỗi khi tham gia, vui lòng thử lại sau')
      }
    } catch (error) {
      console.error('Error submitting email:', error)
      toast.error('Có lỗi khi tham gia, vui lòng thử lại sau')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <BackgroundBeams />
      <div className="max-w-2xl mx-auto p-4 z-10">
        <h1 className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Hocbaichua.com
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-4 text-lg text-center relative z-10">
          Công cụ toàn diện giúp người học có thể tiếp thu kiến thức một cách
          nhanh chóng, hiệu quả nhờ sự hỗ trợ của AI
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-sm mx-auto"
        >
          <Input
            type="email"
            placeholder="Nhập email của bạn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white/10 border-white/20 text-white placeholder-gray-400"
            autoComplete="email"
          />
          <Button
            type="submit"
            className="bg-white text-black hover:bg-gray-200"
            disabled={loading} // Disable button while loading
          >
            {loading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
            Đăng ký
          </Button>
        </form>
      </div>
      <div className="flex flex-col items-center absolute bottom-0 p-4 z-10">
        <p className="text-neutral-500 text-sm">Theo dõi chúng mình tại</p>
        <div className="flex justify-center items-center mt-4">
          <FacebookLink />
        </div>
      </div>
    </div>
  )
}
