import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "../styles/App.css";
import Main from "./Main";
import Profile from "./Profile";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
