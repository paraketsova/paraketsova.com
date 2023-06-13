import utilStyles from '../styles/utils.module.css';
import styles from '../components/layout.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Square() {
  return <button className="square">X</button>;
}

export default function Sudoku () {
  return (
    <>
      <section>
        <h1>My sudoku</h1>
        <div className="board-row">
          <button className="square">1</button>
          <button className="square">2</button>
          <button className="square">3</button>
        </div>
        <div className="board-row">
          <button className="square">4</button>
          <button className="square">5</button>
          <button className="square">6</button>
        </div>
        <div className="board-row">
          <button className="square">7</button>
          <button className="square">8</button>
          <button className="square">9</button>
        </div>
      </section>

      <section className={styles.backToHome}>
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
    </>
  )
}