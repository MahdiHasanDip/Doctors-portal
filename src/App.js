import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Appointment from "./Pages/Appointment/Appointment/Appointment.js";
import Home from "./Pages/Home/Home/Home";



function App() {
  return (
    <div className="App">
                  <Router>
                  <Switch>
                          <Route path="/appointment">
                            <Appointment></Appointment>
                          </Route>
                          <Route path="/Home">
                            <Home/>
                          </Route>
                          <Route path="/">
                            <Home />
                          </Route>
                        </Switch>
                        
                  </Router>

    </div>
  );
}

export default App;
