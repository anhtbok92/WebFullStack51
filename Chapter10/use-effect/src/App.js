import logo from './logo.svg';
import './App.css';
import UseEffectBasics from "./components/1-useEffect-basics";
import UseEffectCleanup from "./components/2-useEffect-cleanup";
import UseEffectCallApi from "./components/3-useEffect-call-api";

function App() {
  return (
    <div className="App">
      {/*<UseEffectBasics />*/}
      {/*<UseEffectCleanup />*/}
      <UseEffectCallApi />
    </div>
  );
}

export default App;
