import React from "react";
import Image from "next/image";
import { NextPageWithLayout } from "@types";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import type { FrontMatter } from "@types";
import { getPosts, getPostBySlug } from "@lib/mdx";

type TProps = {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: FrontMatter;
};

type TParams = {
  params: {
    slug: string;
  };
};

const OgPost: NextPageWithLayout<TProps> = ({ frontMatter }) => {
  return (
    <div className="w-full h-full px-24  bg-gray-1000 text-gray-100 bg-grid-dark font-inter flex flex-col justify-center items-center">
      <Image src="/logoM.png" width={256} height={256} />
      <h1 className="text-7xl font-bold pb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-red-300 to-yellow-200">
        {frontMatter.title}
      </h1>
      <h4 className="text-2xl pb-4">{frontMatter.description}</h4>
      <h6 className="text-xl font-mono text-gray-400">mariusflorescu.io</h6>
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
