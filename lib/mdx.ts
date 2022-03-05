import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import rehypePrettyCode from "rehype-pretty-code";
import readingTime from "reading-time";
import type { PostMatter } from "types";

type PostMatterWithoutSlug = Omit<PostMatter, "slug">;

const root = process.cwd();

const options = {
  theme: JSON.parse(
    fs.readFileSync(require.resolve("../styles/code.json"), "utf-8")
  ),
  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node: any) {
    node.properties.className = ["word"];
  },
};

const getFilesFrontMatter = (type: string, files: string[]) => {
  return files
    .reduce((allPosts: PostMatter[], postSlug: string): PostMatter[] => {
      const source = fs.readFileSync(
        path.join(root, "posts", type, postSlug),
        "utf8"
      );

      const { data } = matter(source);

      return [
        {
          ...(data as PostMatterWithoutSlug),
          slug: postSlug.replace(".mdx", ""),
        },
        ...allPosts,
      ];
    }, [])
    .filter(
      (fileFrontMatter: PostMatter) => fileFrontMatter.status !== "private"
    );
};

const getPosts = (type: string) => {
  const files = fs.readdirSync(path.join(root, "posts", type));
  const filesFrontMatter = getFilesFrontMatter(type, files);

  return files.filter((filename: string) =>
    filesFrontMatter.some((fileFrontMatter: PostMatter) =>
      filename.startsWith(fileFrontMatter.slug)
    )
  );
};

const getListOfFilesFrontMatter = (type: string) => {
  const files = getPosts(type);

  const allFilesFrontMatter = getFilesFrontMatter(type, files);

  return allFilesFrontMatter
    .filter(
      (fileFrontMatter: PostMatter) => fileFrontMatter.status === "public"
    )
    .sort((a: PostMatter, b: PostMatter) =>
      b.publishedAt.localeCompare(a.publishedAt)
    );
};

const getPostBySlug = async (type: string, slug?: string) => {
  const source = slug
    ? fs.readFileSync(path.join(root, "posts", type, `${slug}.mdx`), "utf8")
    : fs.readFileSync(path.join(root, "posts", `${type}.mdx`), "utf8");

  const { data, content } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [[rehypePrettyCode, options]],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
};

export { getPosts, getListOfFilesFrontMatter, getPostBySlug };
