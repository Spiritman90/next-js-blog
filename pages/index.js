import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../style/utils.module.css";
import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I am Femi. I am an aspiring Frontend Developer from Lagos
          Nigeria. You can contact me on{" "}
          <span>
            <a
              href='https://twitter.com/phemmypete'
              target='_blank'
              rel='noreferrer'
            >
              Twitter
            </a>
          </span>
        </p>
        <p>
          (This is a sample website - I am learning Next.js{" "}
          <a href='https://nextjs.org/learn' rel='noreferrer'>
            using Next.js tutorial
          </a>
          .)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a rel='noreferrer'>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
