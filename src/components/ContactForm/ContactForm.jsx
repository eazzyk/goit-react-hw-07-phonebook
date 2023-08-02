import { useState } from 'react';
import { useContacts } from '../../hooks/useContacts';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const { contacts, addContact } = useContacts();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      alert("Enter the contact's name and number phone!");
      return;
    }
    const isExist = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

    if (isExist) {
      alert(`${number} is already in contacts.`);
      return;
    }
    addContact({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="name" className={css.label}>
        Name
      </label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        minLength={2}
        onChange={handleChange}
        value={name}
        placeholder="Enter here"
        className={css.input}
      />
      <label htmlFor="number" className={css.label}>
        Number
      </label>

      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
        value={number}
        placeholder="777-777-77"
        className={css.input}
      />
      <button type="submit" className={css.form_button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
