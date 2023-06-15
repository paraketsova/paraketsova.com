import Image from 'next/image';
import styles from '../components/layout.module.css';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className={styles.container}>
      <h1>Look like you're lost</h1>
      <p>the page you are looking for is not available!</p>
      <Image
        priority
        src="/images/error-img.gif"
        alt="error-404"
        height={700}
        width={900}
      />
      <div className={styles.backToHome}>
        <Link href="/">← Back to home</Link>
      </div>
    </div>
  )
}

//source of the gif - https://codepen.io/affectionatelettuce