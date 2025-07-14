import styles from "./portfolio.module.scss";
import Title from "../Title/Title";
import Image from "next/image";
import Button from "../Button/Button";

function Portfolio() {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <Title title='My work' />
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.image_wrapper}>
              <Image
                className={styles.image}
                src='/images/works/work1.png'
                alt='work'
                width={1000}
                height={500}
              />
            </div>
            <div className={styles.card_container}>
              <div className={styles.card_titles}>
                <h3 className={styles.card_title}>
                  Portfolio for brand specialist
                </h3>
                <p className={styles.card_subtitle}>
                  Built React + React Router DOM and Sass.
                </p>
              </div>
              <p className={styles.card_text}>
                A website showcasing the personal brand of a branding and
                creative specialist tailored for UK audiences.
              </p>
              <div className={styles.card_buttons}>
                <Button
                  link='https://github.com/annalatyeva/anna-katsur-portfolio'
                  text='View source'
                  className={styles.button}
                />
                <Button
                  link='https://annalatyeva.github.io/anna-katsur-portfolio/'
                  text='Try It Live'
                  className={styles.button}
                />
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_container}>
              <div className={styles.card_titles}>
                <h3 className={styles.card_title}>BonFlower Shop</h3>
                <p className={styles.card_subtitle}>
                  Built with React and Vite for optimal performance, the project
                  leverages Swiper for interactive carousels and Sass for
                  maintainable, scalable styling.
                </p>
              </div>
              <p className={styles.card_text}>
                A beautifully designed, fully responsive flower shop web
                application created to deliver a seamless online shopping
                experience for floral products.
              </p>
              <div className={styles.card_buttons}>
                <Button
                  link='hhttps://github.com/Nadia-HPoe/Bon-Bon-Flowershop'
                  text='View source'
                  className={styles.button}
                />
                <Button
                  link='https://bon-flowershop.vercel.app/'
                  text='Try It Live'
                  className={styles.button}
                />
              </div>
            </div>
            <div className={styles.image_wrapper}>
              <Image
                className={styles.image}
                src='/images/works/work2.png'
                alt='work'
                width={1000}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
