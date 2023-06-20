import Image from 'next/image';
import Layout, from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const gallery = [
  "alch-bench-1.jpg",
  "alch-bench-2.jpg",
  "Barbarian-1.jpg",
  "Barbarian-2.jpg",
  "Barbarian-3.jpg",
  "elf-1.jpg",
  "bookshelf-1.jpg",
  "bookshelf-2.jpg",
  "Iriya-1.jpg",
  "fireplace-1.jpg",
  "fireplace-2.jpg",
  "dwarf-1.jpg",
  "dwarf-2.jpg",
  "dwarf-3.jpg",
  "Abomination-1.jpg",
  "Abomination-2.jpg",
  "Abomination-3.jpg",
  "Abomination-4.jpg",
  "weapon-rack.jpg",
];

const imageGallery = gallery.map((src) => (
  <Image
    className={utilStyles.imageGallery}
    priority
    key={"/paint-gallery/" + src}
    src={"/paint-gallery/" + src}
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
        <p>My painted miniatures (28mm).</p>
      </section>

      {imageGallery}

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

