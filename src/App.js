import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import "styled-components/macro";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import {
  Customers,
  Demos,
  DemoScripts,
  Products,
  SalesTeam,
} from "./components/Sections";
import Settings from "./components/Settings";

function App() {
  return (
    <BrowserRouter>
      <Home>
        <Switch>
          <Route exact path="/">
            <Redirect to="/settings" />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/demo-scripts">
            <DemoScripts />
          </Route>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/sales-team">
            <SalesTeam />
          </Route>
          <Route path="/demos">
            <Demos />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </Home>
    </BrowserRouter>
  );
}

export default App;
