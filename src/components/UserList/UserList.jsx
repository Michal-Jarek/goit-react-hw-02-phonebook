import PropTypes from 'prop-types';

const UserList = ({ array, children }) => (
  <>
    {children}
    <ul>
      {array.map(({ name, number, id }) => (
        <li key={id}>
          {name}: {number}
        </li>
      ))}
    </ul>
  </>
);

UserList.propTypes = {};

export default UserList;
