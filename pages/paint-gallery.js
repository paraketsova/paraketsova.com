import Image from 'next/image';
import Layout, from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';

const gallery = [
  "/paint-gallery/Barbarian-1.jpg",
  "/paint-gallery/Barbarian-2.jpg",
  "/paint-gallery/Barbarian-3.jpg",
  "/paint-gallery/Iriya-1.jpg",
  "/paint-gallery/Abomination-1.jpg",
  "/paint-gallery/Abomination-2.jpg",
  "/paint-gallery/Abomination-3.jpg",
  "/paint-gallery/Abomination-4.jpg"
];

const imageGallery = gallery.map((src) => (
  <Image
    className={utilStyles.imageGallery}
    priority
    key={src}
    src={src}
    width="500"
    height="500"
    alt={`gallery`}
  />
));


export default function GalleryPage () {
  return (

    <Layout home>
      <section className={utilStyles.headingXl}>
        <p>My gallery</p>
      </section>
      <section className={utilStyles.headingMd}>

        <p>There are several of my painted miniatures.</p>
      </section>

      <div>
        {imageGallery}
      </div>

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

