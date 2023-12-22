import { useSelector } from 'react-redux';
import css from './App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';

export const App = () => {
  const users = useSelector(state => state.contacts.items);

  return (
    <div className={css.form}>
       <h1 className={css.title}>Phonebook</h1>
    <Section >
      
       
        <ContactForm />
      
     
        <h2 className={css.title}>Contacts</h2>
        {!users.length ? (
          <h3 className={css.text}>Your phonebook is empty. Add your first contact</h3>
        ) : (
          <>
            <h3 className={css.text}>Your phonebook has {users.length} contacts</h3>
            <Filter />
            <div className={css.scrollbar}> 
            <ContactList />
            </div>
          </>
            
        )}
      
    </Section>
</div>

  );
};