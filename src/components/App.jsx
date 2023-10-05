import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { ContactList } from './ContactsList/Contacts';
import { Filter } from './Filter/Filter';
import { ContactForm } from './Form/Form';

export const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <Filter></Filter>
      {isLoading && items.length === 0 && (
        <div className="loading">
          <p>Loading contacts...</p>
        </div>
      )}
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
      {items.length > 0 && <ContactList></ContactList>}
    </div>
  );
};
