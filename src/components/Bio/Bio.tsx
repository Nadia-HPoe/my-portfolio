import styles from "./bio.module.scss";
import Button from "../Button/Button";
import Title from "../Title/Title";
import Image from "next/image";

function Bio() {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <Title title='About Me' />
        <div className={styles.card}>
          <h3 className={styles.subtitle}>Hello there👋, I'm Nadia</h3>
          <p className={styles.paragraph}>
            I am a frontend developer with a passion for creating interactive
            and user-friendly web applications.
          </p>
          <p className={styles.paragraph}>
            I enjoy collaborating with cross-functional teams to deliver
            high-quality solutions that meet client requirements. I am always
            learning and exploring new technologies to enhance my skills and
            stay up-to-date with the latest industry trends.
          </p>
          <p className={styles.paragraph}>
            In my free time, I experiment with new coding concepts, participate
            in hackathons and learn Hungarian language.
          </p>
        </div>
        <Title title='My skills' />
        <div className={styles.skills}>
          <div className={styles.skill}>
            <Image
              src='./images/skills/js.svg'
              alt='js'
              width={80}
              height={80}
            />
          </div>
          <div className={styles.skill}>
            <Image
              src='./images/skills/sass.svg'
              alt='js'
              width={80}
              height={80}
            />
          </div>
          <div className={styles.skill}>
            <Image
              src='./images/skills/html5.svg'
              alt='js'
              width={80}
              height={80}
            />
          </div>
          <div className={styles.skill}>
            <Image
              src='./images/skills/css.svg'
              alt='js'
              width={80}
              height={80}
            />
          </div>
          <div className={styles.skill}>
            <Image
              src='./images/skills/git.svg'
              alt='js'
              width={80}
              height={80}
            />
          </div>
          <div className={styles.skill}>
            <Image
              src='./images/skills/react.svg'
              alt='js'
              width={80}
              height={80}
            />
          </div>
          <div className={styles.skill}>
            <Image
              src='./images/skills/typescript.svg'
              alt='js'
              width={80}
              height={80}
            />
          </div>
          <div className={styles.skill}>
            <Image
              src='./images/skills/figma.svg'
              alt='js'
              width={80}
              height={80}
            />
          </div>
          <div className={styles.skill}>
            <Image
              src='./images/skills/next-js.svg'
              alt='js'
              width={80}
              height={80}
            />
          </div>
        </div>
        <Button className={styles.button} link='#contact' text='Contact Me' />
      </div>
    </section>
  );
}

export default Bio;
