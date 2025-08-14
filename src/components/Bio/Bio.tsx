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
          <h3 className={styles.subtitle}>Hello there! I&apos;m Nadia, </h3>
          <Image
            className={styles.card_photo}
            src='/images/bio.jpg'
            width={450}
            height={450}
            alt='my photo'
          />
          <p className={styles.paragraph}>
            a frontend developer with 3 years of experience in creating clean,
            effective landing pages and business card websites for specialists
            and companies. I take pride in my attention to detail and my
            commitment to delivering high-quality work. My clients often mention
            that it&apos;s both easy and enjoyable to collaborate with me.
          </p>{" "}
          <p className={styles.paragraph}>
            During my internship at an international company, I had the
            opportunity to lead a diverse team. This experience taught me the
            importance of open communication, adaptability, and respecting
            cultural differences. I thrive in team environments and am always
            eager to contribute to a positive and productive group dynamic.
          </p>
          <p className={styles.paragraph}>
            Based in Hungary, I am open to working with clients and companies
            from around the world. I understand the nuances of cross-cultural
            collaboration and am comfortable managing projects across different
            time zones.
          </p>
          <p className={styles.paragraph}>
            In my free time, I study Hungarian and explore game design, which
            helps me stay creative and continuously expand my skill set.
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
              className={styles.skill_icon}
            />
          </div>
          <div className={styles.skill}>
            <Image
              src='./images/skills/sass.svg'
              alt='js'
              width={80}
              height={80}
              className={styles.skill_icon}
            />
          </div>
          <div className={styles.skill}>
            <Image
              src='./images/skills/html5.svg'
              alt='js'
              width={80}
              height={80}
              className={styles.skill_icon}
            />
          </div>
          <div className={styles.skill}>
            <Image
              src='./images/skills/css.svg'
              alt='js'
              width={80}
              height={80}
              className={styles.skill_icon}
            />
          </div>
          <div className={styles.skill}>
            <Image
              src='./images/skills/git.svg'
              alt='js'
              width={80}
              height={80}
              className={styles.skill_icon}
            />
          </div>
          <div className={styles.skill}>
            <Image
              src='./images/skills/react.svg'
              alt='js'
              width={80}
              height={80}
              className={styles.skill_icon}
            />
          </div>
          <div className={styles.skill}>
            <Image
              src='./images/skills/typescript.svg'
              alt='js'
              width={80}
              height={80}
              className={styles.skill_icon}
            />
          </div>
          <div className={styles.skill}>
            <Image
              src='./images/skills/figma.svg'
              alt='js'
              width={80}
              height={80}
              className={styles.skill_icon}
            />
          </div>
          <div className={styles.skill}>
            <Image
              src='./images/skills/next-js.svg'
              alt='js'
              width={80}
              height={80}
              className={styles.skill_icon}
            />
          </div>
        </div>
        <Button className={styles.button} link='#contact' text='Contact Me' />
      </div>
    </section>
  );
}

export default Bio;
