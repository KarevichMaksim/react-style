import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Login} from "./pages/Login";

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/login" component={Login}/>
        </Switch>
      </Router>
  );
}

export default App;
