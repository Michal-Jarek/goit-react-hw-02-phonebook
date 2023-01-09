import PropTypes from 'prop-types';

const UserList = ({ array, handleDelete, children }) => {


  return (
    <>
      {children}
      <ul>
        {array.map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}
            <button onClick={()=> handleDelete(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

UserList.propTypes = {
  array: PropTypes.array,
  handleDelete: PropTypes.func,
  children: PropTypes.element,
};

export default UserList;
