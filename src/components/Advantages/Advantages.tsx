import styles from "./advantages.module.scss";
import Title from "../Title/Title";

function Advantages() {
  return (
    <section className={styles.advantages}>
      <Title title='Why Work With Me?' />
      <div className={styles.container}>
        <p className={styles.paragraph}>
          <span>International Teamwork: </span>
          <br />
          Experienced in leading and collaborating with multicultural teams.
        </p>
        <p className={styles.paragraph}>
          <span>Client-Focused Approach: </span>
          <br />I prioritize clear communication and strive to exceed client
          expectations.
        </p>
        <p className={styles.paragraph}>
          <span>Reliable & Detail-Oriented: </span> <br />
          My work is neat, timely, and tailored to your business needs.
        </p>
        <p className={styles.paragraph}>
          <span>Continuous Growth: </span>
          <br />I am always learning new technologies and design trends to offer
          the best solutions.
        </p>
        <p className={styles.paragraph}>
          <span>Open to Global Projects: </span> <br />
          Ready to take on challenges with international clients and deliver
          results that make an impact.
        </p>
        <p className={styles.subtitle}>
          Let’s work together to bring your vision to life!
        </p>
      </div>
    </section>
  );
}

export default Advantages;
