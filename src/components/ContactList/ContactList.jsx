import { useContacts } from 'hooks/useContacts';
import css from './ContactList.module.css';

const ContactList = () => {
  const { filteredContacts, removeContact } = useContacts();

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <li className={css.contactItem} key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button
            className={css.contactDeleteBtn}
            type="button"
            onClick={() => removeContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
