import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <Layout id="blog" home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Full stack developer with 3 years of experience. Looking for great opportunities to grow professionally in trending technologies
like React JS, Typescript, Node JS, I also have experience working with queries in SQL. I consider myself a developer who will
learn the necessary technologies to achieve the goals.
</p>
      </section>
      <section>
        <h2>
          Portfolio
        </h2>
        <ul>
          <li><a href='#blog' >Personal Blog</a> </li>
          <li><a href='#blog' >Weather app</a> </li>
        </ul>
      </section>
      <section>
        <h2>
          Repositories
        </h2>
        <ul>
          <li><a href="https://github.com/MiJaZu" >Github</a></li>
          <li><a href="https://gitlab.com/MiJaZu" >Gitlab</a></li>          
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}