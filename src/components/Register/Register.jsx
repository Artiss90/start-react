import { Component } from 'react';

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
};

export default class SignUpForm extends Component {
  state = { ...INITIAL_STATE };

  /*
   * Отвечает за обновление состояния
   */
  handleChange = ({ target }) => {
    const { name, value } = target;
    console.log(target.value);
    this.setState({ [name]: value });
  };

  /*
   * Вызывается при отправке формы
   */
  handleSubmit = evt => {
    evt.preventDefault();

    const { login, email, password } = this.state;

    console.log(`
      Login: ${login}
      Email: ${email}
      Password: ${password}
    `);

    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter login"
            name="login"
            value={login}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Sign up as {login}</button>
      </form>
    );
  }
}
