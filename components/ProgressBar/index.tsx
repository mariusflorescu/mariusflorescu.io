import React from "react";
import { useRouter } from "next/router";

const ProgressBar = () => {
  const router = useRouter();
  const progressRef = React.useRef<HTMLDivElement>(null);
  let maxScrollHeight = 0;

  const checkInvalidRoute = () => {
    if (!progressRef || !progressRef.current) return;

    if (router.pathname !== "/writing/[slug]") {
      progressRef.current.style.width = "0px";
      return true;
    }

    return false;
  };

  const computeWidth = () => {
    if (!progressRef || !progressRef.current) return;

    const result = (window.scrollY * 100) / maxScrollHeight;
    progressRef.current.style.width = `${result}%`;
  };

  const computeWidthAndHeight = () => {
    maxScrollHeight = document.body.scrollHeight - window.innerHeight;
    computeWidth();
  };

  React.useEffect(() => {
    if (checkInvalidRoute()) return;

    computeWidthAndHeight();

    window.addEventListener("scroll", computeWidth);
    window.addEventListener("resize", computeWidthAndHeight);

    return () => {
      window.removeEventListener("scroll", computeWidth);
      window.removeEventListener("resize", computeWidthAndHeight);
    };
  }, [router.asPath]);

  return (
    <div
      ref={progressRef}
      className="w-0 h-2 bg-gradient-to-r from-yellow-500 via-pink-400 to-purple-400"
    />
  );
};

export default ProgressBar;
