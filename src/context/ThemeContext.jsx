import React, { Component, createContext } from 'react';

const Context = createContext();
export default class ThemeContext extends Component {
  static Consumer = Context.Consumer;

  LightTheme = () => {
    this.setState({ theme: 'light' });
  };
  DarkTheme = () => {
    this.setState({ theme: 'dark' });
  };

  state = {
    theme: 'light',
    onLightTheme: this.LightTheme,
    onDarkTheme: this.DarkTheme,
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
