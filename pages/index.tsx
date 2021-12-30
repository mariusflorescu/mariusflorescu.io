import type { NextPage } from "next";
import { useTheme } from "next-themes";
import Layout from "../layout/Main";
import Link from "../components/Link";

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Layout>
      Current theme is {theme}!<br />
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
      <div className="prose prose-neutral prose-lg dark:prose-invert">
        <h1>This is a h1</h1>
        <h2>This is a h2</h2>
        <h3>This is a h3</h3>
        <h4>This is a h4</h4>
        <h5>This is a h5</h5>
        <h6>This is a h6</h6>
        <p>This is a paragraph</p>
        <small>This is small</small>
        <br />
        <Link href="/blog" passHref>
          Test link
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
