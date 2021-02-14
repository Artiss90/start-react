// import MyComponent from 'Components/MyComponent/MyComponent';
// import Toggler from 'path/RenderProp/Toggler';
import UserMenu from 'Components/UserMenu/UserMenu';
import AuthContext from 'context/Auth';
import ThemeContext from 'context/ThemeContext';
import { Component } from 'react';

// function App() {
//   return (
//     <>
//       <div>
//         <Toggler>
//           {({ isOpen, onToggle }) => (
//             <>
//               <button type="button" onClick={onToggle}>
//                 {isOpen ? 'Hide' : 'Show'}
//               </button>
//               {isOpen && <p>Vestibulum suscipit nulla quis orci.</p>}
//             </>
//           )}
//         </Toggler>

//         <Toggler>
//           {({ isOpen, onToggle }) => (
//             <>
//               <label>
//                 <input type="checkbox" checked={isOpen} onChange={onToggle} />
//                 {isOpen ? 'Hide' : 'Show'}
//               </label>
//               {isOpen && <p>Etiam feugiat lorem non metus.</p>}
//             </>
//           )}
//         </Toggler>
//       </div>
//     </>
//   );
// }

class App extends Component {
  render() {
    return (
      <>
        <AuthContext>
          <UserMenu />
          <ThemeContext>
            <div className="App">
              <Toolbar />
            </div>
          </ThemeContext>
        </AuthContext>
      </>
    );
  }
}

const Toolbar = () => (
  <div className="Toolbar">
    <Button label="Log In" />
    <Button label="Log Out" />
  </div>
);

const Button = ({ label }) => (
  <ThemeContext.Consumer>
    {ctx => (
      <button
        className={ctx === 'light' ? 'btn-light' : 'btn-dark'}
        type="button"
      >
        {label}
      </button>
    )}
  </ThemeContext.Consumer>
);

export default App;
