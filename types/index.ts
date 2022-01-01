type PostStatus = "public" | "not listed" | "private"

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
  status: PostStatus;
  slug: string;
};

type FrontMatter = PostMatter & {
    readingTime: ReadingTime
}

export type {PostMatter, FrontMatter};