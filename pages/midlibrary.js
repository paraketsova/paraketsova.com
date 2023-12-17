import Layout, from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Midlibrary () {
  return (
    <Layout birthdayQuiz>
      <section className={utilStyles.headingXl}>
        <p>Midlibrary</p>
      </section>
      <section className={utilStyles.headingMd}>
        <p>
          I'm thrilled to share a new chapter in my professional journey, one that has led me to become a Web Developer at <a href='https://midlibrary.io/'>Midlibrary</a> - a carefully curated collection of hand-picked
          Midjourney Styles and a Midjourney Guide.

        </p>
        <p>
          Let me take a moment to introduce you to the captivating world of Midlibrary — a non-profit educational initiative run by a group of dedicated Midjourney enthusiasts and volunteers.
        </p>
        <p>
          Joining Midlibrary as a Web Developer has been an incredible experience.
          Midlibrary stands out for its commitment to quality, curation, and community. Every Midjourney Style and entry in the Midjourney Guide is meticulously selected,
          ensuring that users receive the most valuable and relevant content.
          The sense of community within Midlibrary is palpable, with enthusiasts and volunteers alike coming together to create something truly exceptional.
        </p>
        <p>
          As I continue to navigate my role as a Web Developer at Midlibrary, I'm eager to share my experiences, insights,
          and the exciting developments happening within this unique project. From the technical aspects of web development to the
          fascinating world of Midjourney Styles and Guides, there's so much more to explore.
        </p>
        <p>
         Keep an eye on this space for more updates, and let's embark on this <a href='https://midlibrary.io/'>Midlibrary</a> together!
        </p>
      </section>

      <Link href="https://midlibrary.io/">
        <Image
          priority
          src="/images/demo-img-midlibrary.png"
          height={715}
          width={750}
          alt="/demo-image-midlibrary"
        />
      </Link>

    </Layout>
  );
}


