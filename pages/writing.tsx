import React from "react";
import type { NextPage } from "next";
import type { PostMatter } from "@types";
import { getAllFilesFrontMatter } from "@lib/mdx";
import Meta from "@components/Meta";
import PostCard from "@components/PostCard";

type TProps = {
  writings: PostMatter[];
};

const Writings: NextPage<TProps> = ({ writings }) => {
  return (
    <React.Fragment>
      <Meta
        title="Writing"
        description="writing, a collection of thoughts and ideas, elaborated in a clumsy way..."
      />
      <h1>
        writing, a collection of thoughts and ideas, elaborated in a clumsy
        way...
      </h1>
      <div className="flex flex-col space-y-12">
        {writings.map((post: PostMatter) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </React.Fragment>
  );
};

export async function getStaticProps() {
  const writings = getAllFilesFrontMatter("writing");

  return {
    props: {
      writings,
    },
  };
}

export default Writings;
