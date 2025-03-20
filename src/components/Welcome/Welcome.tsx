import Button from "../Button/Button";
import styles from "./welcome.module.scss";

function Welcome() {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          I do code <br />
          with passion <span className={styles.color}>&</span> skills.
        </h1>
        <div className={styles.buttons}>
          <Button link='#projects' text='My Portfolio' />
          <Button link='#contact' text='Contact Me' className={styles.button} />
        </div>
      </div>
    </section>
  );
}

export default Welcome;
