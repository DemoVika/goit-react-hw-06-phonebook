import PropTypes from 'prop-types';
import css from './contactForm.module.css';
import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setNumber } from 'redux/contactFormReducer';
import { addContact } from 'redux/appReducer';

export const ContactForm = () => {
  const name = useSelector(state => state.contactForm.name); // подписались на данные из стора
  const number = useSelector(state => state.contactForm.number);
  const dispath = useDispatch();

  const handleInput = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      dispath(setName(value)); // отправили инструкцию на изменение стейта
      // dispath({ type: 'contactForm/setName', payload: value });
    } else if (name === 'number') {
      dispath(setNumber(value));
    }
  };

  const nameId = event => {
    event.preventDefault();
    const contact = {
      name, //: name
      number, //: number
      id: shortid.generate(),
    };
    dispath(addContact(contact));
    dispath(setName(''));
    dispath(setNumber(''));
  };

  return (
    <form className={css.container} onSubmit={nameId}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInput}
        />
      </label>{' '}
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleInput}
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.protoTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
