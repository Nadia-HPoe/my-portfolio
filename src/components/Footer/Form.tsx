import styles from "./footer.module.scss";

function Form() {
  return (
    <form id='contact-form' action='#' className={styles.form}>
      <input
        placeholder='Enter your Name'
        name='name'
        type='text'
        required
        className={styles.input}
      />
      <input
        placeholder='Enter your Email'
        name='email'
        type='email'
        required
        className={styles.input}
      />

      <textarea
        placeholder='Write your message here'
        className={styles.input}
      />
      <input
        className={styles.button}
        id='submit'
        value='Submit'
        type='submit'
      />
    </form>
  );
}

export default Form;
