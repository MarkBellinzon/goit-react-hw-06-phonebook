import React, { useState } from 'react';
import css from './ContactForm.module.css';

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact({
      name,
      number,
    });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.card}>
      <label className={css.ttitle}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          required
          onChange={handleChangeName}
        />
      </label>
      <label className={css.ttitle}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          placeholder="Enter number"
          value={number}
          required
          onChange={handleChangeNumber}
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
