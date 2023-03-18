import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  fetchAllContacts,
  fetchAddContacts,
} from '../../../redux/contacts/contacts-operations';

import styles from './contact-form.module.scss';

const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleAddContact({ name, number });
    setState({
      name: '',
      number: '',
    });
  };

  const handleAddContact = ({ name, number }) => {
    dispatch(fetchAddContacts({ name, number }));
  };

  const { name, number } = state;

  return (
    <div className={styles.block}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Name</label>
          <input
            onChange={handleChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Number</label>
          <input
            onChange={handleChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
