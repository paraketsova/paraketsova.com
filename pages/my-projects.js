import Head from 'next/head';
import Layout, from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Image from 'next/image';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Projects () {
  return (
    <Layout home>
      <section className={utilStyles.headingXl}>
        <p>My previous projects</p>
      </section>
      <section className={utilStyles.headingMd}>
        <p>
          Most of them were made while studying at Nackademin YH and are individual or group projects created in JavaScript, Node.js, PHP, Angular, TypeScript, C#.
        </p>
        <p>Projects have links to online pages, projects' descriptions and repositories on GitHub.</p>
      </section>

      {/* === PROJECTS FOR DEMONSTRATION === */}
      <section className={utilStyles.projectsCards}>
        {/* === DEGREE PROJECT === */}
        <div className={utilStyles.projectItem}>
          <Link className={utilStyles.projectLink} href="https://docs.google.com/document/d/e/2PACX-1vRNNVipVs9_Uv2qFufNKixW7sy0eX23U3B2j1SEa0wXd3pPDjdttWfvrIKVAxbkJqHx-TZndSuaKFUF/pub">
            <Image
              priority
              src="/images/icons8-diploma-64.png"
              height={32}
              width={32}
              alt="quiz-icon"
            />
            <p className={utilStyles.titleProject}>My degree project</p>
          </Link>
          <p className={utilStyles.projectDescription}>for <b>Nackademin</b> + <b>Scania</b></p>
          <p className={utilStyles.projectDescription}><b>Angular TypeScript C# NodeJS MySQL SDDS SCSS</b></p>
        </div>

        {/* === FREEFEED === */}
        <div className={utilStyles.projectItem}>
          <Link className={utilStyles.projectLink} href="https://gamma.freefeed.net/">
            <Image
              priority
              src="/images/icon-ff.png"
              height={32}
              width={32}
              alt="quiz-icon"
            />
            <p className={utilStyles.titleProject}>FreeFeed</p>
          </Link>
          <p className={utilStyles.projectDescription}><b>NextJs TypeScript</b></p>
          <p className={utilStyles.projectDescription}>client for social network</p>
          <Link href="https://github.com/clbn/freefeed-delta">
            <Image
              priority
              src="/images/icons8-github.svg"
              height={32}
              width={32}
              alt="github-icon"
            />
          </Link>
        </div>

        {/* === STAR-WARS-APP === */}
        <div className={utilStyles.projectItem}>
          <Link className={utilStyles.projectLink} href="https://paraketsova.github.io/star-wars-app">
            <Image
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

        <div className={utilStyles.projectItem}>
          <Link className={utilStyles.projectLink} href="https://paraketsova.github.io/">
            <Image
              priority
              src="/favicon.ico"
              height={32}
              width={32}
              alt="pony-icon"
            />
            <p className={utilStyles.titleProject}>Old personal page</p>
          </Link>
          <p className={utilStyles.projectDescription}><b>CSS HTML</b></p>
          <p className={utilStyles.projectDescription}>Individual assignment</p>
          <Link href="https://github.com/paraketsova/paraketsova.github.io">
            <Image
              priority
              src="/images/icons8-github.svg"
              height={32}
              width={32}
              alt="github-icon"
            />
          </Link>
        </div>

        {/* === SLACK CLONE === */}
        <div className={utilStyles.projectItem}>
          <Link className={utilStyles.projectLink} href="https://github.com/paraketsova/slack-clone-node-mongodb">
            <p className={utilStyles.titleProject}>Slack clone</p>
            <p className={utilStyles.projectDescription}><b>Node.js+MongoDB</b></p>
            <p className={utilStyles.projectDescription}>Individual assignment</p>
            <Image
              priority
              src="/images/icons8-github.svg"
              height={32}
              width={32}
              alt="github-icon"
            />
          </Link>
        </div>

        {/* === cats and doge webshop === */}
        <div className={utilStyles.projectItem}>
          <Link className={utilStyles.projectLink} href="https://github.com/paraketsova/mern-catsanddogs">
            <p className={utilStyles.titleProject}>Cats and Dogs</p>
            <p className={utilStyles.projectDescription}><b>MERN Full-Stack Webshop</b></p>
            <p className={utilStyles.projectDescription}>Group assignment</p>
            <Image
              priority
              src="/images/icons8-github.svg"
              height={32}
              width={32}
              alt="github-icon"
            />
          </Link>
        </div>

        {/* === giant-squid-bingo === */}
        <div className={utilStyles.projectItem}>
          <Link className={utilStyles.projectLink} href="https://github.com/paraketsova/giant-squid-bingo">
            <p className={utilStyles.titleProject}>Squid-bingo</p>
            <p className={utilStyles.projectDescription}><b>JavaScript</b></p>
            <p className={utilStyles.projectDescription}>Programming test</p>
            <Image
              priority
              src="/images/icons8-github.svg"
              height={32}
              width={32}
              alt="github-icon"
            />
          </Link>
        </div>

        {/* === Angular todoApp === */}
        <div className={utilStyles.projectItem}>
          <Link className={utilStyles.projectLink} href="https://github.com/paraketsova/angular-todo-app">
            <p className={utilStyles.titleProject}>Angular TodoApp</p>
            <p className={utilStyles.projectDescription}><b>Angular CLI version 13.0.2.</b></p>
            <p className={utilStyles.projectDescription}>Group assignment</p>
            <Image
              priority
              src="/images/icons8-github.svg"
              height={32}
              width={32}
              alt="github-icon"
            />
          </Link>
        </div>

        {/* === fakestore PHP === */}
        <div className={utilStyles.projectItem}>
          <Link className={utilStyles.projectLink} href="/documents/WEBB20-Backend-2-PHP-MARIIA-PARAKETSOVA-Uppgift-03.pdf">
            <p className={utilStyles.titleProject}>Fakestore PHP</p>
            <p className={utilStyles.projectDescription}><b>PHP mySQL Bootstrap CSS</b></p>
            <p className={utilStyles.projectDescription}>Group assignment</p>
          </Link>
          <Link className={utilStyles.projectLink} href="https://github.com/paraketsova/fakestore_php">
            <Image
              priority
              src="/images/icons8-github.svg"
              height={32}
              width={32}
              alt="github-icon"
            />
          </Link>
        </div>

        {/* === RESTful API PHP === */}
        <div className={utilStyles.projectItem}>
          <Link className={utilStyles.projectLink} href="/documents/WEBB20-Backend-Uppgift-02-MARIIA-PARAKETSOVA.pdf">
            <p className={utilStyles.titleProject}>RESTful API for FakeStore</p>
            <p className={utilStyles.projectDescription}><b>PHP</b></p>
            <p className={utilStyles.projectDescription}>Individual assignment</p>
          </Link>
          <Link className={utilStyles.projectLink} href="https://github.com/paraketsova/RESTful_API_php">
            <Image
              priority
              src="/images/icons8-github.svg"
              height={32}
              width={32}
              alt="github-icon"
            />
          </Link>
        </div>

        {/* === $tockmarket === */}
        <div className={utilStyles.projectItem}>
          <Link className={utilStyles.projectLink} href="https://github.com/paraketsova/market">
            <p className={utilStyles.titleProject}>Market app</p>
            <p className={utilStyles.projectDescription}><b>React</b></p>
            <p className={utilStyles.projectDescription}>Group assignment</p>
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

      <section>
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


