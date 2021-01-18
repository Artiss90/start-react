import { Component } from 'react';

/*
 * Используем Enumerable чтобы не болеть антипаттерном "магические числа"
 */
const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  agreed: false,
  gender: null,
};

export default class SignUpForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  /*... */

  render() {
    const { login, email, password, agreed, gender } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        {/* ... */}

        <section>
          <h2>Choose your gender</h2>
          <label>
            Male
            <input
              type="radio"
              checked={gender === Gender.MALE}
              name="gender"
              value={Gender.MALE}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              checked={gender === Gender.FEMALE}
              name="gender"
              value={Gender.FEMALE}
              onChange={this.handleChange}
            />
          </label>
        </section>

        <button type="submit" disabled={!agreed}>
          Sign up as {login}
        </button>
      </form>
    );
  }
}
