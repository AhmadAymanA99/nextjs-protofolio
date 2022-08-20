import Head from "next/head";

import Layout from "../../components/layout";
import Date from "../../components/date";
import { getAllExperienceIds, getExperienceData } from "../../lib/experience";

import utilStyles from "../../styles/utils.module.css";

export default function Experience({ data }) {
  return (
    <Layout>
      <Head>
        <title>{data.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{data.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={data.date} /> {`- `}
          {data.till === "now" ? <p>now</p> : <Date dateString={data.till} />}
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllExperienceIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await getExperienceData(params.id);
  return {
    props: {
      data,
    },
  };
}
