import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { getPosts, getPostBySlug } from "@lib/mdx";
import MarkdownLayout from "@layout/Markdown";
import Meta from "@components/Meta";
import Title from "@components/Title";

type ReadingTime = {
  minutes: number;
  text: string;
  time: number;
  words: number;
};

type PostMatter = {
  title: string;
  publishedAt: string;
  description: string;
  slug: string;
};

type TProps = {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: PostMatter & {
    readingTime: ReadingTime;
  };
};

type TParams = {
  params: {
    slug: string;
  };
};

const WritingPost: React.FC<TProps> = ({ mdxSource, frontMatter }) => {
  return (
    <React.Fragment>
      <Meta title={frontMatter.title} description={frontMatter.description} />
      <MarkdownLayout>
        <Title style={{ textDecoration: "none" }}>{frontMatter.title}</Title>
        <MDXRemote {...mdxSource} />
      </MarkdownLayout>
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
