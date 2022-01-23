import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import type { NextPageWithLayout, FrontMatter } from "@types";
import { getPosts, getPostBySlug } from "@lib/mdx";
import Layout from "@layout/Main";
import { withProviders } from "@components/Providers/withProviders";
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

const WritingPost: NextPageWithLayout<TProps> = ({
  mdxSource,
  frontMatter,
}) => {

  return (
    <React.Fragment>
      <Meta
        title={frontMatter.title}
        description={frontMatter.description}
      />
      <h1>{frontMatter.title}</h1>
      <PostDetails
        publishedAt={frontMatter.publishedAt}
        readingTime={frontMatter.readingTime.text}
      />
      <MDXRemote {...mdxSource} />
    </React.Fragment>
  );
};

WritingPost.getLayout = withProviders((page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
});

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
