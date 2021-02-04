// import PaintingList from './components/PaintingList';
// import ColorPicker from './components/ColorPicker/ColorPicker';
// import Alert from './components/Alert/Alert';
import { Component } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import HomePage from 'views/HomePage';
import Test from 'views/Test';
import Container from './components/Container/Container';
// import Box from './components/Box/Box';
// import paintings from './paintings.json';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  render() {
    return (
      <Container>
        {/* <Box type="small" classNames="big red" styles={{ color: '#fff' }} />
      <Box type="medium" />
      <Box type="large" /> */}
        {/* <Alert text="Шеф все пропало!" type="success" /> */}
        {/* <Alert text="Шеф все пропало!" type="warning" /> */}
        {/* <Alert text="Шеф все пропало!" type="error" /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <PaintingList items={paintings} /> */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
          <li></li>
        </ul>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/test" component={Test} />
          {/* {/* <Route path="/about" component={About} /> */}
          <Redirect to="/" />
        </Switch>
      </Container>
    );
  }
}

export default App;
