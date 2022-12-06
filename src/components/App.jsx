import { Component } from 'react';
import Section from './Section/Section';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  // ********************* Methods **************

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(`Signed up as: ${this.state.name}`);
    this.reset();
  };

  reset = () => {
    const contactCopy = [...this.state.contacts];
    contactCopy.push(this.state.name);
    console.log(contactCopy);
    this.setState({
      contacts: contactCopy,
      name: '',
    });
    console.log(this.state.name);
  };

  render() {
    const { name } = this.state;

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
          <form onSubmit={this.handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handleChange}
                value={name}
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </Section>

        <Section title="Contacts"></Section>
      </div>
    );
  }
}

export { App };
