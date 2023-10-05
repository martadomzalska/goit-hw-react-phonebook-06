import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import css from './Contact.module.css';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.contactContainer}>
      {contact.name}, number: {contact.phone}
      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};