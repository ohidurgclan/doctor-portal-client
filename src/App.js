import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Appoinment from "./Pages/Appoinment/Appoinment/Appoinment";
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/appoinment">
            <Appoinment></Appoinment>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
