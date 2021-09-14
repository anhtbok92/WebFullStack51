import logo from './logo.svg';
import './App.css';
import CounterWithReducer from "./components/1-counter-with-reducer";
import AddMemberWithReducer from "./components/2-add-member-with-reducer";


function App() {
  return (
    <div className="App">
      {/*<CounterWithReducer />*/}
      <AddMemberWithReducer />
    </div>
  );
}

export default App;
