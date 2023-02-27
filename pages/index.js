import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          My name is Mariia. I live in Stockholm and I am a Fullstack Web Developer with Frontend focus
        </p>
        <p>
          I have graduated from <a href="https://nackademin.se/">Nackademin YHR</a> (Full Stack Web Development)
          and finished my 7-month internship as a software developer in <a href="https://www.scania.com/group/en/home.html">Scania</a>.
        </p>
        <p>
          Also, before switching to web development, I got an Engineer’s degree in Chemical Technology, and I have a few years of experience in project management (but it was not IT), which has helped me develop good analytical and problem solving skills. Now I’m looking for a permanent job position
        </p>
        <p>
          Please let me know when we can discuss my profile in more detail.
        </p>

      </section>
    </Layout>
  );
}

