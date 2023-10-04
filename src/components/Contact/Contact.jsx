import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';
import PropTypes from 'prop-types';
import css from './Contact.module.css';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.contactContainer}>
      {contact.name}, number: {contact.number}
      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
};
