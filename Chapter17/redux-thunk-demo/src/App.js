import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact component={Product}/>
          <Route path="/carts" exact component={Cart}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
