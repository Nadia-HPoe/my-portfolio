function Form() {
  return (
    <form id='contact-form' action='#'>
      <input placeholder='Name' name='name' type='text' required />
      <input placeholder='Email' name='email' type='email' required />
      <textarea placeholder='Message' />
      <input className='button' id='submit' value='Submit' type='submit' />
    </form>
  );
}

export default Form;
