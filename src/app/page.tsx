import Header from "@/components/Header/Header";
import styles from "./page.module.scss";
import Welcome from "@/components/Welcome/Welcome";
import Bio from "@/components/Bio/Bio";
import Portfolio from "@/components/Portfolio/Portfolio";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <Welcome />
      <Bio />
      <Portfolio />
      <Footer />
    </div>
  );
}
