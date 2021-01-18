import { Component } from 'react';
// Можно использовать любой пакет для генерации уникальных строк
import shortid from 'shortid';

export default class Form extends Component {
  loginInputId = shortid.generate();

  render() {
    return (
      <form>
        <label htmlFor={this.loginInputId}>Login</label>
        <input type="text" name="login" id={this.loginInputId} />
      </form>
    );
  }
}
