import { getAbsoluteURL } from '@lib/getAbsoluteURL'

export default function useOpenGraphImage(title: string, description: string) {
  const searchParams = new URLSearchParams()

  searchParams.set('title', title)
  searchParams.set('description', description)

  const fullImageURL = getAbsoluteURL(`/api/og-image?${searchParams}`)

  console.log(fullImageURL)

  return { imageURL: fullImageURL }
}
