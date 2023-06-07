import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Image from 'next/image';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home ({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          My name is Mariia. I live in Stockholm and I am a Fullstack Web Developer with Frontend focus.
        </p>
        <p>
          I have graduated from <a href="https://nackademin.se/">Nackademin YHR</a> (Full Stack Web Development)
          and finished my 6-month internship as a software developer in <a href="https://www.scania.com/group/en/home.html">Scania</a>.
        </p>
        <p>
          Now I work as a volunteer web developer on a a small-scale open-source social network <a href="https://github.com/clbn/freefeed-delta">FreeFeed.net.</a>
        </p>
        <p>
          Also, before switching to web development, I got an Engineer’s degree in Chemical Technology, and I have a few years of experience in <a href="https://gammaswiss.com/industrial-solutions/">project management (but it was not IT)</a>, which has helped me develop good analytical and problem solving skills. Now I’m looking for a permanent job position
        </p>
        <p>
          Please let me know when we can discuss my profile in more detail.
        </p>
      </section>

      <section className={utilStyles.icons}>
        <Link href="https://www.linkedin.com/in/mariia-paraketsova-2a3513154/">
          <Image
            priority
            src="/images/icons8-linkedin.svg"
            height={64}
            width={64}
            alt="linkedin-icon"
          />
        </Link>
        <Link href="https://github.com/paraketsova">
          <Image
            priority
            src="/images/icons8-github.svg"
            height={64}
            width={64}
            alt="github-icon"
          />
        </Link>
      </section>

    {/*  <section className={pagesLinks}>

      </section>
*/}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>About me</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
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


