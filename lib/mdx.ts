import fs from "fs";
import path from "path";
import matter from "gray-matter";

type PostMatter = {
  title: string;
  publishedAt: string;
  description: string;
  slug: string;
};

type PostMatterWithoutSlug = Omit<PostMatter, "slug">;

const root = process.cwd()

const getPosts = (type: string) => fs.readdirSync(path.join(root, "posts", type));

const getAllFilesFrontMatter = (type: string) => {
    const files = getPosts(type);

    const allFilesFrontMatter = files.reduce((allPosts: PostMatter[], postSlug: string) : PostMatter[] => {
        const source = fs.readFileSync(
            path.join(root, "posts", type, postSlug),
            "utf8"
        );

        const {data} = matter(source);

        return [
            {
                ...(data as PostMatterWithoutSlug),
                slug: postSlug.replace(".mdx","")
            },
            ...allPosts
        ];
    },[])

    return allFilesFrontMatter.sort((a:PostMatter, b:PostMatter) => b.publishedAt.localeCompare(a.publishedAt))
}

export {getPosts, getAllFilesFrontMatter}