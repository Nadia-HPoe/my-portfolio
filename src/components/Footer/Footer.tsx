import Title from "../Title/Title";
import styles from "./footer.module.scss";
import Image from "next/image";
import Form from "./Form";

function Footer() {
  return (
    <footer className={styles.footer} id='contact'>
      <div className={styles.container}>
        <Title title='Contacts' />
        <div className={styles.contacts}>
          <div className={styles.contact_item}>
            <Image
              src='/images/contacts/mail.svg'
              alt='contact'
              width={80}
              height={80}
            />
            <p>E-Mail</p>
            <a href='mailto:heatherpoe.bn@gmail.com'>heatherpoe.bn@gmail.com</a>
          </div>
          <div className={styles.contact_item}>
            <Image
              src='/images/contacts/telegram.svg'
              alt='contact'
              width={80}
              height={80}
            />
            <p>Telegram</p>
            <a href='https://t.me/Nadia_HPoe'>@Nadia_HPoe</a>
          </div>
          <div className={styles.contact_item}>
            <Image
              src='/images/contacts/whatsapp.svg'
              alt='contact'
              width={80}
              height={80}
            />
            <p>Phone</p>
            <a href='phone:+36 303 369 596'>+36 303 369 596</a>
          </div>
          <div className={styles.contact_item}>
            <Image
              src='/images/contacts/linkedin.svg'
              alt='contact'
              width={80}
              height={80}
            />
            <p>Linkedin</p>
            <a href='https://www.linkedin.com/in/nadezhda-szabo/'>
              www.linkedin.com/nadezhda-szabo
            </a>
          </div>
        </div>
        <Form />
      </div>
    </footer>
  );
}

export default Footer;
