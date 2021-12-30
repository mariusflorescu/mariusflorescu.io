import type { NextPage } from "next";
import { useTheme } from "next-themes";
import Layout from "../layout/Main";

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Layout>
      Current theme is {theme}!<br />
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </Layout>
  );
};

export default Home;
