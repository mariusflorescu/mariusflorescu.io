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
      <div className="group py-4 cursor-pointer w-full rounded-md flex items-center space-x-2 divide-x divide-gray-200 dark:divide-gray-800 transition-colors duration-200 hover:bg-gray-200 hover:dark:bg-gray-800 hover:divide-gray-400 hover:dark:divide-gray-700">
        <em className="mx-4 text-gray-600 dark:text-gray-400 text-sm">
          {post.publishedAt}
        </em>
        <div className="grow px-4">
          <h2 className="m-0 underline underline-offset-2 decoration-gray-800 dark:decoration-gray-200">
            {post.title}
          </h2>
          <p className="my-2 text-sm">{post.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
