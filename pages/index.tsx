import React from "react";
import type { NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import type { FrontMatter } from "@types";
import { getPostBySlug } from "@lib/mdx";
import Meta from "@components/Meta";
import Window from "@components/Window";

type TProps = {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: FrontMatter;
};

const Home: NextPage<TProps> = ({ mdxSource, frontMatter }) => {
  return (
    <React.Fragment>
      <Meta title="Marius Florescu" description={frontMatter.description} />
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...mdxSource} />
      <Window title="Test">
        <div className="w-32 h-32 bg-pink-400 rounded" />
      </Window>
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
