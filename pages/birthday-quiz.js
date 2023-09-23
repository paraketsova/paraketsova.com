import Layout, from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function BirthdayQuiz () {
  return (
    <Layout birthdayQuiz>
      <section className={utilStyles.headingXl}>
        <p>My new project - Birthday Quiz game</p>
      </section>
      <section className={utilStyles.headingMd}>
        <p>
          Here is my new project - Birthday Quiz. The game is a chain of mathematical riddles that will lead the child to the location of his birthday present. Now it's underway.
        </p>
        <p>
          Currently it only works with my son's data, but I plan to make it more universal.
        </p>
        <p>
          It will be accessible to children of different ages and will be available in English, Russian and Swedish and will, depending on the age of the kids, offer them the appropriate level of challenges.
          It is expected that parents will first place the gift in a certain place, according to my instructions on the site (for example, under the child’s pillow) and then give the child a link to this resource.
          The program will check whether the specified birthday coincides with the current date and offer mathematical questions according to the child’s age.
          The answer to the last question of the quiz will coincide with the age of the child and after solving it successfully, the program will show a congratulation and indicate the location of the gift.
        </p>
      </section>

      <Link href="https://paraketsova.github.io/birthday-quiz/">
        <Image
          priority
          src="/images/demo-image-quiz.png"
          height={491}
          width={1013}
          alt="/demo-image-quiz"
        />
      </Link>

      {/* === LINKS  === */}
      <section className={utilStyles.icons}>
        <Link href="https://paraketsova.github.io/birthday-quiz/">
          <Image
            priority
            src="/images/icons8-birthday-64.png"
            height={64}
            width={64}
            alt="birthday-quiz-icon"
          />
        </Link>
        <Link href="https://github.com/paraketsova/birthday-quiz">
          <Image
            priority
            src="/images/icons8-github.svg"
            height={64}
            width={64}
            alt="github-icon"
          />
        </Link>
      </section>

    </Layout>
  );
}


