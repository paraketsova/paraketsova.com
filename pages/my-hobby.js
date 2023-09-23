import Layout, from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Image from 'next/image';

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

export default function MyHobby () {
  return (
    <Layout myHobby>
      <section className={utilStyles.headingXl}>
        <p>My hobby - Miniature painting</p>
      </section>
      <section className={utilStyles.headingMd}>
        <p>
          I fell in love with miniature painting when my husband convinced me to try <a href="https://en.wikipedia.org/wiki/HeroQuest/">HeroQuest</a>
        </p>
        <p>
          Then I tried to paint one-color mini-figures from a board game. That was it. I was hooked.
        </p>
        <p>
          I am passionate about painting miniature figures and game items, mostly in 28mm format. Sometimes I "speed paint", sometimes I spend more time and with more technical painting methods on my "minis".
          Maybe now I'm just a beginner artist, but I'm trying to achieve a professional level of my work.
        </p>
      </section>


      <div>
        Here is my Instagram:
        <Link href="https://www.instagram.com/ponyminis/">
          <Image
            priority
            src="/images/icons8-instagram.svg"
            height={64}
            width={64}
            alt="instagram-icon"
          />
        </Link>
      </div>

      <div>
        Here is a gallery of several of my painted miniatures (28mm):
      </div>
      {/* === PAINTING GALLERY  === */}
      {imageGallery}



    </Layout>
  );
}


