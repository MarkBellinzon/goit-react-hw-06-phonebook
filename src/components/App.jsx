import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import css from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [];
  });

  const [filter, setFilter] = useState('');

  const addContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };

    contacts.some(({ name }) => name === data.name)
      ? alert(`${data.name} is already in contacts`)
      : setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = userId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== userId)
    );
  };

  const handleChangeFilter = e => setFilter(e.currentTarget.value);

  const filterContacts = () => {
    const oneCase = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(oneCase));
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.form}>
      <h1 className={css.title}>Phonebook</h1>
      <Section>
        <ContactForm addContact={addContact} />
      </Section>

      <h1 className={css.title}>Contacts</h1>

      <Section>
        <Filter value={filter} handleChangeFilter={handleChangeFilter} />
        <div className={css.scrollbar}>
          <ContactList
            contacts={filterContacts()}
            deleteContact={deleteContact}
          />
        </div>
      </Section>
    </div>
  );
};



