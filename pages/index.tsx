import React from "react";
import type { NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import type { FrontMatter } from "@types";
import { getPostBySlug } from "@lib/mdx";
import Meta from "@components/Meta";
import Title from "@components/Title";

type TProps = {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: FrontMatter;
};

const Home: NextPage<TProps> = ({ mdxSource, frontMatter }) => {
  return (
    <React.Fragment>
      <Meta title="Marius Florescu" description={frontMatter.description} />
      <Title>{frontMatter.title}</Title>
      <MDXRemote {...mdxSource} />
    </React.Fragment>
  );
};

export async function getStaticProps() {
  const post = await getPostBySlug("index");

  return {
    props: post,
  };
}

export default Home;
