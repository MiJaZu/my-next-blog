import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";

import { getSortedPostsData } from "../lib/porfolio";
import TaskProvider from "@/context/taskprovider";

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
    <TaskProvider>
      <Layout id="blog" home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>
            Full stack developer with 3 years of experience. Looking for great
            opportunities to grow professionally in trending technologies like
            React JS, Typescript, Node JS, I also have experience working with
            queries in SQL. I consider myself a developer who will learn the
            necessary technologies to achieve the goals.
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Portfolio</h2>
          <ul className={utilStyles.list}>
            <li className={utilStyles.listItem} key={"todo"}>
              <Link href={`/todo/home`}>To Do</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString="2023-04-17" />
              </small>
            </li>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/portfolios/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Repositories</h2>
          <ul>
            <li>
              <a href="https://github.com/MiJaZu">Github</a>
            </li>
            <li>
              <a href="https://gitlab.com/MiJaZu">Gitlab</a>
            </li>
          </ul>
        </section>
      </Layout>
    </TaskProvider>
  );
}
