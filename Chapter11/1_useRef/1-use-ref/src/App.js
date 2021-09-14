import logo from './logo.svg';
import './App.css';
import UseRefBasics from "./components/1-useRef-basics";
import UseRefNoRender from "./components/2-useRef-no-render";
import UseForwardRef from "./components/3-useRef-forwardRef";

function App() {
  return (
    <div className="App">
      {/*<UseRefBasics />*/}
      {/*<UseRefNoRender />*/}
      <UseForwardRef />
    </div>
  );
}

export default App;
