import { Facebook } from 'lucide-react'

const FacebookLink = () => {
  return (
    <a
      href={process.env.NEXT_PUBLIC_FANPAGE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="mr-4"
    >
      <Facebook className="w-6 h-6 text-blue-500" />
    </a>
  )
}

export default FacebookLink
