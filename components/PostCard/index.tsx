import React from "react";
import Link from "next/link";

type PostMatter = {
  title: string;
  publishedAt: string;
  description: string;
  slug: string;
};

type TProps = {
  post: PostMatter;
};

const PostCard: React.FC<TProps> = ({ post }) => {
  return (
    <Link href={`/writing/${post.slug}`}>
      <article className="group cursor-pointer w-full flex items-center space-x-2 divide-x divide-neutral-200 dark:divide-neutral-800">
        <div className="mx-4 text-neutral-600 dark:text-neutral-400 font-playfair text-sm transition-opacity duration-150 group-hover:opacity-0 break-normal">
          {post.publishedAt}
        </div>
        <div className="grow px-4 transition-transform duration-600 delay-[0ms] group-hover:delay-150 group-hover:-translate-x-24">
          <h2 className="m-0 underline underline-offset-2 decoration-neutral-800 dark:decoration-neutral-200">
            {post.title}
          </h2>
          <p className="my-2">{post.description}</p>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;
