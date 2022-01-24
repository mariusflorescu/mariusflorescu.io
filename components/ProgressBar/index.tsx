import React from "react";

const ProgressBar = () => {
  let maxScrollHeight = 0;
  const progressRef = React.useRef<HTMLDivElement>(null);

  const computeWidth = () => {
    if (!progressRef || !progressRef.current) return;

    const result =
      (window.scrollY * 100) / (maxScrollHeight - window.innerHeight);

    progressRef.current.style.width = `${result}%`;
  };

  const computeWidthAndHeight = () => {
    maxScrollHeight = document.body.scrollHeight;
    computeWidth();
  };

  React.useLayoutEffect(() => {
    if (typeof window === undefined || typeof document === undefined) return;
    maxScrollHeight = document.body.scrollHeight;
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", computeWidth);
    window.addEventListener("resize", computeWidthAndHeight);

    return () => {
      window.removeEventListener("scroll", computeWidth);
      window.removeEventListener("resize", computeWidthAndHeight);
    };
  }, []);

  return (
    <div
      ref={progressRef}
      className="w-0 h-2 bg-gradient-to-r from-yellow-500 via-pink-400 to-purple-400"
    />
  );
};

export default ProgressBar;
