import React from "react";
import type { NextPageWithLayout } from "@types";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import type { FrontMatter } from "@types";
import { getPostBySlug } from "@lib/mdx";
import Meta from "@components/Meta";
import Layout from "@layout/Main";

type TProps = {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: FrontMatter;
};

const Home: NextPageWithLayout<TProps> = ({ mdxSource, frontMatter }) => {
  return (
    <React.Fragment>
      <Meta title="Marius Florescu" description={frontMatter.description} />
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...mdxSource} />
    </React.Fragment>
  );
};

Home.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  const post = await getPostBySlug("index");

  return {
    props: post,
  };
}

export default Home;
