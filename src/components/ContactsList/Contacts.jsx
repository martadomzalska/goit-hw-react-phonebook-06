import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(contacts);

  return (
    <>
      {filteredContacts.length > 0 ? (
        <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts found</p>
      )}
    </>
  );
};
