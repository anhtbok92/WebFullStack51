import logo from './logo.svg';
import './App.css';

import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';

const clothes = [
    {
      'name': 'Quan kaki',
      'price': '200000',
      'color': '',
      'size': ''
    }
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <FunctionalComponent
            name={'Nguyen Tuan Anh'}
            age={'20'}
            university={'Dai Hoc Bach Khoa'}
            family={['vo', 'con1', 'con2', 'con3']}
        />
        <ClassComponent
          name={'Hoang Thuy Linh'}
          age={'18'}
        />
      </header>
    </div>
  );
}

export default App;
