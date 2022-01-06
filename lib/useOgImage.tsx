import { useRouter } from "next/router";
import { getAbsoluteURL } from "@lib/getAbsoluteURL";

export default function useOpenGraphImage() {
  const router = useRouter();
  const searchParams = new URLSearchParams();

  searchParams.set(
    "path",
    router.asPath.replace("/writing/", "/writing/og/")
  );

  const fullImageURL = getAbsoluteURL(`/api/og-image?${searchParams}`);
  
  return { imageURL: fullImageURL };
}
