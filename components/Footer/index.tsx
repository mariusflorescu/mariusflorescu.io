import { GithubIcon, TwitterIcon, LinkedinIcon } from "@icons";

const Footer = () => {
  return (
    <div className="py-6">
      <hr className="border-t border-neutral-200 dark:border-neutral-700 my-4" />
      <div className="w-full flex justify-between items-center prose prose-neutral dark:prose-invert">
        <em className="text-neutral-500 dark:text-neutral-400 text-sm">
          find your inner peace.
        </em>
        <div className="flex space-x-4">
          <a
            href="https://github.com/mariusflorescu"
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
          >
            <GithubIcon className="cursor-pointer w-5 h-5 text-neutral-600 transition-colors duration-200 hover:text-neutral-400" />
          </a>
          <a
            href="https://twitter.com/_mariusflorescu"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <TwitterIcon className="cursor-pointer w-5 h-5 text-neutral-600 transition-colors duration-200 hover:text-neutral-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/marius-florescu-141aaa209/"
            target="_blank"
            rel="noreferrer"
            aria-label="Linkedin"
          >
            <LinkedinIcon className="cursor-pointer w-5 h-5 text-neutral-600 transition-colors duration-200 hover:text-neutral-400" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
