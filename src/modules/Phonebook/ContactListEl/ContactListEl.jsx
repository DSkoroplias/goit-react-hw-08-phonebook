import React from 'react';

import PropTypes from 'prop-types';

import styles from './contact-list-el.module.scss';

const ContactListEl = ({ id, name, number, removeContact }) => {
  return (
    <ul>
      <li className={styles.listItem} key={id}>
        {name}: {number}
        <button className={styles.button} onClick={removeContact} type="button">
          Delete
        </button>
      </li>
    </ul>
  );
};

export default ContactListEl;

ContactListEl.propTypes = {
  removeContact: PropTypes.func.isRequired,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
