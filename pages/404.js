import Image from 'next/image';
import styles from '../components/layout.module.css';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className={styles.container}>
      <h1>Look like you're lost</h1>
      <p>the page you are looking for not available!</p>
      <Image
        priority
        src="/images/error-img.gif"
        alt="error-404"
        height={600}
        width={1200}
      />
      <div className={styles.backToHome}>
        <Link href="/">← Back to home</Link>
      </div>
    </div>
  )
}