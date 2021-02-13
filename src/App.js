// import MyComponent from 'Components/MyComponent/MyComponent';
import Toggler from 'path/RenderProp/Toggler';
import { createContext } from 'react';

const ThemeContext = createContext();
ThemeContext.displayName = 'ThemeContext';

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

const App = () => (
  <ThemeContext.Provider value="light">
    <div className="App">
      <Toolbar />
    </div>
  </ThemeContext.Provider>
);

const Toolbar = () => (
  <div className="Toolbar">
    <Button label="Log In" />
    <Button label="Log Out" />
  </div>
);

const Button = ({ label }) => (
  <ThemeContext.Consumer>
    {theme => (
      <button
        className={theme === 'light' ? 'btn-light' : 'btn-dark'}
        type="button"
      >
        {label}
      </button>
    )}
  </ThemeContext.Consumer>
);

export default App;
