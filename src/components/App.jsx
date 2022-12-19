import { Component } from 'react';
import { nanoid } from 'nanoid';

import Section from './Section/Section';
import SignForm from './SignForm/SignForm';
import UserList from './UserList/UserList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  // ********************* Methods **************

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(`Signed up as: ${this.state.name}`);
    this.reset();
  };

  handleFilter = (filter, array) => {
    if (filter.length == 0) return this.state.contacts;
    else {
      const arrayCopy = [];
      for (let a = 0; a < array.length; a++)
        if (array[a].name.toLowerCase().indexOf(filter.toLowerCase()) != -1)
          arrayCopy.push(array[a]);

      return arrayCopy;
    }
  };
  // *** For clear input and add element to array
  reset = () => {
    const contactCopy = [...this.state.contacts];
    contactCopy.push({
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    });

    this.setState({
      contacts: contactCopy,
      name: '',
      number: '',
      filter: '',
    });
  };

  render() {
    const { name, number, filter, contacts } = this.state;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          fontSize: 40,
          color: '#010101',
          marginLeft: 20,
        }}
      >
        <Section title="Phonebook">
          <SignForm
            name={name}
            number={number}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        </Section>

        <Section title="Contacts">
          <UserList array={this.handleFilter(filter, contacts)}>
            <Filter filter={filter} handleChange={this.handleChange} />
          </UserList>
        </Section>
      </div>
    );
  }
}

export { App };
