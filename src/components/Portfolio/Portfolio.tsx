import styles from "./portfolio.module.scss";
import Title from "../Title/Title";
function Portfolio() {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <Title title='My work' />
      </div>
    </section>
  );
}

export default Portfolio;
