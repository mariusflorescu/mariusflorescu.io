import React from "react";
import type { NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import type { FrontMatter } from "@types";
import { getPosts, getPostBySlug } from "@lib/mdx";
import Meta from "@components/Meta";
import Title from "@components/Title";
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

const WritingPost: NextPage<TProps> = ({ mdxSource, frontMatter }) => {
  return (
    <React.Fragment>
      <Meta title={frontMatter.title} description={frontMatter.description} />
      <Title style={{ textDecoration: "none" }}>{frontMatter.title}</Title>
      <PostDetails
        publishedAt={frontMatter.publishedAt}
        readingTime={frontMatter.readingTime.text}
      />
      <MDXRemote {...mdxSource} />
    </React.Fragment>
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

export default WritingPost;
