import PropTypes from 'prop-types';

const SignForm = ({ number, name, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label>
      Name
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
        value={name}
        required
      />
    </label>
    <label>
      Number
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handleChange}
        value={number}
        required
      />
    </label>
    <button type="submit">Add contact</button>
  </form>
);

SignForm.propTypes = {};

export default SignForm;
