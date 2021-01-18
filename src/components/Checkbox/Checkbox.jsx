import { Component } from 'react';

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  agreed: false,
};

export default class SignUpForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    console.log({ name, value, type, checked });
    // Если тип элемента checkbox, берем значение checked,
    // в противном случае value
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { login, email, password, agreed } = this.state;

    console.log(`
      Login: ${login}
      Email: ${email}
      Password: ${password}
      Agreed: ${agreed}
    `);

    /* ... */
  };

  render() {
    const { login, email, password, agreed } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        {/* ... */}
        <label>
          Agree to terms
          <input
            type="checkbox"
            checked={agreed}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit" disabled={!agreed}>
          Sign up as {login}
        </button>
      </form>
    );
  }
}
