import type { NextPage } from "next";
import Layout from "../layout/Main";
import GradientText from "../components/GradientText";
import Link from "../components/Link";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="prose prose-neutral dark:prose-invert">
        <GradientText as="h1" className="font-merri py-12">
          versatile fullstack developer, building performant web applications
        </GradientText>

        <b>hi there, I'm Marius,</b>
        <p>
          a fullstack developer and student who <em>loves</em> building and
          experimenting modern solutions using cutting-edge technologies.
        </p>
        <p>
          My development journey as a fullstack developer started at the end of
          2019, when I was in the first year of university and discovered React.
          I can certainly say that I have instantly fallen in love with it.
          <br />
          Shortly after, I wanted my projects to be more interactive so I went
          ahead and decided to learn more about backend, started by picking up
          Node with Mongo/Firebase and then learned the basics of SQL.
        </p>
        <p>
          After a year of building my ideas where everything felt perfect, I
          wanted to step out of my comfort zone (February-March 2021) and
          applied to several outsourcing companies. This landed my first
          intership, which turned in an amazing full time job (where I'm still
          working) at{" "}
          <Link href="/" passHref>
            Victory Square Partners
          </Link>
          .
        </p>
        <p>
          I'm <em>learning by building</em>, always having a positive mindset
          accompanied by a <em>can-do</em> attitude.
        </p>
        <p>
          Mainly building web applications with Go, Node, React and Next.js.{" "}
          <br />
          Interested in <em>learning</em> Rust and Swift.
        </p>
      </div>
    </Layout>
  );
};

export default Home;
