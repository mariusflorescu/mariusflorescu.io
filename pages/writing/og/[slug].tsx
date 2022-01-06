import React from "react";
import type { NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import type { FrontMatter } from "@types";
import { getPosts, getPostBySlug } from "@lib/mdx";
import Meta from "@components/Meta";
import PostDetails from "@components/PostDetails";

type TProps = {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: FrontMatter;
};

type TParams = {
  params: {
    slug: string;
  };
};

const OgPost: NextPage<TProps> = ({ frontMatter }) => {
  return (
    <div className="w-full h-full">
      <h1 className="text-5xl text-bold">{frontMatter.title} asdas</h1>
    </div>
  );
};

export async function getStaticPaths() {
  const posts = getPosts("writing");

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: TParams) {
  const post = await getPostBySlug("writing", params.slug);

  return {
    props: post,
  };
}

export default OgPost;
