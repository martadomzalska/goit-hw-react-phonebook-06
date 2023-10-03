import { ContactList } from './ContactsList/Contacts';
import { Filter } from './Filter/Filter';
import { ContactForm } from './Form/Form';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <Filter></Filter>
      <ContactList></ContactList>
    </div>
  );
};
