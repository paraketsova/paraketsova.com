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
];


export default function GalleryPage () {
  // return (
  // <Image
  //   priority
  //   src="/paint-gallery/Barbarian-1.jpg"
  //   width="50"
  //   height="120"
  //   alt={`gallery`}
  // />)
  //   <Layout home>
  //     <section className={utilStyles.headingXl}>
  //       <p>My gallery</p>
  //     </section>
  //     <section className={utilStyles.headingMd}>
  //
  //       <p>There are several of my painted miniatures.</p>
  //     </section>


  return gallery.map((src) => (
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
}

      {/*<section className={utilStyles.padding1px}>*/}
      {/*  <ul className={utilStyles.list}>*/}
      {/*    {allPostsData.map(({ id, date, title }) => (*/}
      {/*      <li className={utilStyles.listItem} key={id}>*/}
      {/*        <Link href={`/posts/${id}`}>{title}</Link>*/}
      {/*        <br />*/}
      {/*        <small className={utilStyles.lightText}>*/}
      {/*          <Date dateString={date} />*/}
      {/*        </small>*/}
      {/*      </li>*/}
      {/*    ))}*/}
      {/*  </ul>*/}
      {/*</section>*/}
//
//       <section>
//         <Link href="/">
//           {/*← Back to home*/}
//           <Image
//             priority
//             src="/images/icons8-home.svg"
//             height={50}
//             width={50}
//             alt="Back to home"
//           />
//         </Link>
//       </section>
//     </Layout>
//   );
// }

