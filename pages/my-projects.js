import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Image from 'next/image';
import styles from '../components/layout.module.css';

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
        <title>My projects</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          This is my previous projects.
        </p>
        <p>
          Most of them were made while studying at Nackademin YH and are individual or group projects created in JavaScript, Node.js, PHP, Angular, TypeScript, C#.
        </p>
      </section>

      <section className={utilStyles.projects}>

        {/* === DEGREE PROJECT === */}
        <div className={utilStyles.projectItem}>
          <Link className={utilStyles.projectLink} href="https://docs.google.com/document/d/e/2PACX-1vRNNVipVs9_Uv2qFufNKixW7sy0eX23U3B2j1SEa0wXd3pPDjdttWfvrIKVAxbkJqHx-TZndSuaKFUF/pub">
            <Image
              className={utilStyles.projectIcon}
              priority
              src="/images/icons8-diploma-64.png"
              height={32}
              width={32}
              alt="quiz-icon"
            />
            <p className={utilStyles.titleProject}>My degree project</p>
          </Link>
          <p className={utilStyles.projectDescription}>The degree project for <b>Web Developers fullstack
            open source at Nackademin</b>, which was implemented in collaboration with <b>Scania IZF HR</b></p>
        </div>



        {/* === STAR-WARS-APP === */}
        <div className={utilStyles.projectItem}>
          <Link className={utilStyles.projectLink} href="https://paraketsova.github.io/star-wars-app">
            <Image
              className={utilStyles.projectIcon}
              priority
              src="/images/icons8-yoda-64.png"
              height={32}
              width={32}
              alt="quiz-icon"
            />
            <p className={utilStyles.titleProject}>Star Wars App</p>
          </Link>
          <p className={utilStyles.projectDescription}><b>React</b></p>
          <p className={utilStyles.projectDescription}>Individual assignment</p>
          <Link href="https://github.com/paraketsova/star-wars-app">
            <Image
              priority
              src="/images/icons8-github.svg"
              height={32}
              width={32}
              alt="github-icon"
            />
          </Link>
        </div>

        {/* === JAVASCRIPT QUIZ === */}
        <div className={utilStyles.projectItem}>
          <Link className={utilStyles.projectLink} href="https://paraketsova.github.io/QUIZ">
            <Image
              className={utilStyles.projectIcon}
              priority
              src="/images/icons8-quiz-64.png"
              height={32}
              width={32}
              alt="quiz-icon"
            />
            <p className={utilStyles.titleProject}>Quiz Game</p>
          </Link>
          <p className={utilStyles.projectDescription}><b>JavaScript</b></p>
          <p className={utilStyles.projectDescription}>Individual assignment</p>
          <Link href="https://github.com/paraketsova/QUIZ">
            <Image
              priority
              src="/images/icons8-github.svg"
              height={32}
              width={32}
              alt="github-icon"
            />
          </Link>
        </div>

        {/* === LITTLE SHIP ANIMATION === */}
        <div className={utilStyles.projectItem}>
          <Link className={utilStyles.projectLink} href="https://paraketsova.github.io/ship_animation">
            <Image
              className={utilStyles.projectIcon}
              priority
              src="/images/icons8-boat-64.png"
              height={32}
              width={32}
              alt="quiz-icon"
            />
            <p className={utilStyles.titleProject}>Animation</p>
          </Link>
          <p className={utilStyles.projectDescription}><b>CSS HTML</b></p>
          <p className={utilStyles.projectDescription}>Individual assignment</p>
          <Link href="https://github.com/paraketsova/ship_animation">
            <Image
              priority
              src="/images/icons8-github.svg"
              height={32}
              width={32}
              alt="github-icon"
            />
          </Link>
        </div>

      </section>

      <section className={utilStyles.backToHome}>
        <Link href="/">
          {/*← Back to home*/}
          <Image
            priority
            src="/images/icons8-home.svg"
            height={50}
            width={50}
            alt="Back to home"
          />
        </Link>
      </section>
    </Layout>
  );
}


