import ThankYouEmailTemplate from '@/components/email-templates/thank-you'
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || typeof email !== 'string') {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  console.log('email', email)

  const { data, error } = await resend.emails.send({
    from: 'Hocbaichua.com <team@hocbaichua.com>',
    to: [email],
    subject: 'Đăng ký thành công - Hocbaichua.com',
    react: ThankYouEmailTemplate()
  })

  console.log(data, error)

  const response = await fetch(process.env.GOOGLE_SCRIPT_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({ email })
  })

  const result = await response.json()

  if (result.result === 'success') {
    return NextResponse.json({ result: 'success', email }, { status: 200 })
  } else {
    return NextResponse.json({ result: 'error', email }, { status: 400 })
  }
}
