import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Home () {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi! My name is Mariia. I live in Stockholm and I am a <b>Fullstack Web Developer</b> with Frontend focus. Now I’m looking for a permanent job position.
        </p>
        <p>
          I work as a volunteer web developer on <a href='https://midlibrary.io/'>Midlibrary</a> a non-profit educational initiative run by a group of dedicated Midjourney enthusiasts and volunteers.
          I also participate in a small-scale <a href="https://github.com/clbn/freefeed-delta">open-source </a> social network <a href="https://gamma.freefeed.net/">FreeFeed.net.</a>
        </p>
        <p>
          I have <a href="/documents/Examensbevis-mariia-paraketsova-webbutvecklare-fullstack-open-source.pdf">graduated </a>
          from <a href="https://nackademin.se/utbildningar/webbutvecklare-fullstack-open-source/">Nackademin YH</a> (Full Stack Web Development)
          and finished my 6-month internship as a software developer in <a href="https://docs.google.com/document/d/e/2PACX-1vRNNVipVs9_Uv2qFufNKixW7sy0eX23U3B2j1SEa0wXd3pPDjdttWfvrIKVAxbkJqHx-TZndSuaKFUF/pub">Scania</a>.
        </p>
        <p>
          Also, before switching to web development, I got an Engineer’s degree in Chemical Technology, and I have a few years
          of experience in <a href="https://gammaswiss.com/industrial-solutions/">project management (but it was not IT)</a>, which has
          helped me develop good analytical and problem solving skills.
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
        <Link href="mailto:paraketsova@gmail.com">
          <Image
            priority
            src="/images/icons8-mail.svg"
            height={64}
            width={64}
            alt="github-icon"
          />
        </Link>
      </section>

      <section className={`${utilStyles.padding1px}`}>
        <Link href={`/my-projects`} className={utilStyles.headingLg}>
          <h2 className={utilStyles.headingLg}>My previous projects</h2>
          <Image
            priority
            src="/images/icons8-coding-64.png"
            height={64}
            width={64}
            alt="github-icon"
          />
        </Link>

        <Link href={`/midlibrary`} className={utilStyles.headingLg}>
          <h2 className={utilStyles.headingLg}>Midlibrary</h2>
          <Image
            priority
            src="/images/midlib.svg"
            height={50}
            width={50}
            alt="midlibrary+icon"
          />
        </Link>

        <Link href={`/birthday-quiz`} className={utilStyles.headingLg}>
          <h2 className={utilStyles.headingLg}>Birthday Quiz game</h2>
          <Image
            priority
            src="/images/icons8-birthday-64.png"
            height={64}
            width={64}
            alt="birthday-quiz-icon"
          />
        </Link>

        <Link href={`/my-hobby`} className={utilStyles.headingLg}>
          <h2 className={utilStyles.headingLg}>My hobby - Miniature painting</h2>
          <Image
            priority
            src="/images/icons8-brush-64.png"
            height={64}
            width={64}
            alt="brush-icon"
          />
        </Link>
      </section>

      <p className={utilStyles.icons8Link}>icons by <a target="_blank" href="https://icons8.com">Icons8</a></p>

    </Layout>
  );
}


