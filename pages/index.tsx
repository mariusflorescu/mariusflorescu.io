import React from "react";
import type { NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import type { FrontMatter } from "@types";
import { getPostBySlug } from "@lib/mdx";
import Meta from "@components/Meta";
import DemoBox from "@components/DemoBox";

type TProps = {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: FrontMatter;
};

const Home: NextPage<TProps> = ({ mdxSource, frontMatter }) => {
  return (
    <React.Fragment>
      <Meta title="Marius Florescu" description={frontMatter.description} />
      <h1>{frontMatter.title}</h1>
      <DemoBox>
        <div className="w-32 h-32 bg-sky-400"></div>
      </DemoBox>
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
