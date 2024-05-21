//import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/Navbar';
import {TextArea, AdditionalTextSummary} from './components/Textform';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return <div>
    <NavbarComponent title = "Text Utils"/>
    <TextArea title="Enter the text you want to convert."/>
    <AdditionalTextSummary />

    <div className='container my-1'>
      <button type="button" class="btn btn-primary">Enable dark mode</button>
    </div>
  </div>
}

export default App;
