import { useSelector } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';

import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';

import styles from './phonebook.module.scss';

const Phonebook = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  const isContacts = Boolean(filteredContacts.length);

  return (
    <div className={styles.wrapper}>
      <div className={styles.block_phonebook}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={styles.block}>
        <h1>Contacts</h1>
        <ContactFilter />
        {isContacts && <ContactList />}
        {!isContacts && <p>No contacts</p>}
      </div>
    </div>
  );
};

export default Phonebook;
