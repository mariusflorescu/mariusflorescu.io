import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'

const OgImage: NextPage = () => {
  const router = useRouter()
  const { title, description } = router.query

  return (
    <div className="w-full h-full px-24  bg-gray-1000 text-gray-100 bg-grid-meta font-inter flex flex-col justify-center items-center">
      <Image src="/logoM.png" width={256} height={256} />
      <h1 className="text-7xl font-bold pb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-red-300 to-yellow-200">
        {title}
      </h1>
      <h4 className="text-2xl pb-4">{description}</h4>
      <h6 className="text-xl font-ibm text-gray-400">mariusflorescu.io</h6>
    </div>
  )
}

export default OgImage
