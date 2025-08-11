import styles from "./advantages.module.scss";
import Title from "../Title/Title";

function Advantages() {
  return (
    <section className={styles.advantages}>
      <Title title='Why work with me?' />
      <div className={styles.container}>
        <div className={styles.wrapper1}>
          <p className={styles.subtitle}>International Teamwork:</p>
          <p className={styles.paragraph}>
            Experienced in leading and collaborating with multicultural teams.
          </p>
        </div>
        <div className={styles.wrapper2}>
          <p className={styles.subtitle}>Client-Focused Approach:</p>
          <p className={styles.paragraph}>
            I prioritize clear communication and strive to exceed client
            expectations.
          </p>
        </div>

        <div className={styles.wrapper3}>
          <p className={styles.subtitle}>Reliable & Detail-Oriented:</p>
          <p className={styles.paragraph}>
            My work is neat, timely, and tailored to your business needs.
          </p>
        </div>
        <div className={styles.wrapper4}>
          <p className={styles.subtitle}>Continuous Growth: </p>
          <p className={styles.paragraph}>
            I am always learning new technologies and design trends to offer the
            best solutions.
          </p>
        </div>
        {/* <div className={styles.wrapper4}>
          <p className={styles.subtitle}>Open to Global Projects:</p>
          <p className={styles.paragraph}>
            Ready to take on challenges with international clients and deliver
            results that make an impact.
          </p>
        </div> */}
      </div>
      <p className={styles.paragraph2}>
        Let’s work together to bring your vision to life!
      </p>
    </section>
  );
}

export default Advantages;
