// import { Button } from '@/components/ui/button'
import { Link, Tailwind } from '@react-email/components'

export default function ThankYouEmailTemplate() {
  return (
    <Tailwind>
      <div className="font-sans max-w-2xl mx-auto p-6 bg-white">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Cảm ơn bạn đã đăng ký!
          </h1>
          <p className="text-lg text-gray-600">
            Chúng tôi rất vui được có bạn trong cộng đồng của mình.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <p className="text-gray-800 mb-4">Chào bạn,</p>
          <p className="text-gray-800 mb-4">
            Tụi mình đang cố gắng hết sức để mang sản phẩm tốt nhất cho bạn.
          </p>
          <p className="text-gray-800">
            Nếu bạn có bất kỳ câu hỏi nào trong lúc chờ đợi, vui lòng liên hệ
            với đội ngũ hỗ trợ của chúng mình qua fanpage nhé.
          </p>
        </div>

        <div className="text-center mb-8">
          <p className="text-gray-800 mb-4">
            Giúp tụi mình chia sẻ cho nhiều bạn khác nhé.
          </p>
          <Link href={process.env.NEXT_PUBLIC_FANPAGE_URL} target="_blank">
            Chia sẻ ngay
          </Link>
        </div>

        <div className="text-center text-sm text-gray-600">
          <div className="flex justify-center space-x-4 mb-4">
            <Link
              href={process.env.NEXT_PUBLIC_FANPAGE_URL}
              className="text-blue-600 no-underline"
            >
              Hocbaichua.com
            </Link>
          </div>
        </div>
      </div>
    </Tailwind>
  )
}
