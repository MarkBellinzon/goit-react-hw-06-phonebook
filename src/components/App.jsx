import { useSelector } from 'react-redux';
import css from './App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';

export const App = () => {
  const users = useSelector(state => state.contacts.items);

  return (
    <Section className={css.form}>
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={css.container}>
        <h2 className={css.title}>Contacts</h2>
        {!users.length ? (
          <h3>Your phonebook is empty. Add your first contact</h3>
        ) : (
          <>
            <h3>Your phonebook has {users.length} contacts</h3>
            <Filter />
            <ContactList />
          </>
        )}
      </div>
    </Section>
  );
};