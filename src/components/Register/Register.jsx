import { Component } from 'react';

export default class SignUpForm extends Component {
  state = {
    login: '',
  };

  /*
   * Отвечает за обновление состояния
   */
  handleChange = e => {
    this.setState({ login: e.target.value });
  };

  /*
   * Вызывается при отправке формы
   */
  handleSubmit = evt => {
    evt.preventDefault();
    console.log(`Signed up as: ${this.state.login}`);

    // Проп который передается форме для вызова при сабмите
    this.props.onSubmit(this.state.login);
  };

  render() {
    const { login } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter login"
            value={login}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Sign up as {login}</button>
      </form>
    );
  }
}
