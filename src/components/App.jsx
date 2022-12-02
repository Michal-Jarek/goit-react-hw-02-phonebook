import { Component } from 'react';
import Section from './Section/Section';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
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
        <Section title='Phonebook'></Section>

        <Section title='Contacts'></Section>
      </div>
    );
  }
}

export { App };
