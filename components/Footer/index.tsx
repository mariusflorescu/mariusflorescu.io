import React from "react";
import { GithubIcon, TwitterIcon, LinkedinIcon } from "../../icons";

const Footer = () => {
  return (
    <React.Fragment>
      <hr className="text-neutral-800 my-4" />
      <div className="w-full flex justify-between items-center">
        <span className="text-neutral-400 font-merri text-sm">
          find your inner peace.
        </span>
        <div className="flex space-x-4">
          <a href="https://github.com/mariusflorescu" target="_blank">
            <GithubIcon className="cursor-pointer w-5 h-5 text-neutral-600 transition-colors duration-200 hover:text-neutral-400" />
          </a>
          <a href="https://twitter.com/_mariusflorescu" target="_blank">
            <TwitterIcon className="cursor-pointer w-5 h-5 text-neutral-600 transition-colors duration-200 hover:text-neutral-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/marius-adrian-florescu-141aaa209/"
            target="_blank"
          >
            <LinkedinIcon className="cursor-pointer w-5 h-5 text-neutral-600 transition-colors duration-200 hover:text-neutral-400" />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
