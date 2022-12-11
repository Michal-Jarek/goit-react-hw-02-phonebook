import PropTypes from 'prop-types';

const Filter = ({ filter, array, handleChange }) => (
  <label>
    Find contacts by name
    <input
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      onChange={handleChange}
      value={filter}
      required
    />
  </label>
);

Filter.propTypes = {};

export default Filter;
