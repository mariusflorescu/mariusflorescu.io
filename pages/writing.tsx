import React from "react";
import { getAllFilesFrontMatter } from "../lib/mdx";
import Meta from "../components/Meta";
import Layout from "../layout/Main";
import Title from "../components/Title";
import PostCard from "../components/PostCard";

type PostMatter = {
  title: string;
  publishedAt: string;
  description: string;
  slug: string;
};

type TProps = {
  writings: PostMatter[];
};

const Writings: React.FC<TProps> = ({ writings }) => {
  return (
    <React.Fragment>
      <Meta
        title="writings"
        description='writings, a collection of "things" that I find
          interesting...'
      />
      <Layout>
        <Title>
          writings, a collection of &quot;things&quot; that I find
          interesting...
        </Title>
        <div className="flex flex-col space-y-12">
          {writings.map((post: PostMatter) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </Layout>
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
