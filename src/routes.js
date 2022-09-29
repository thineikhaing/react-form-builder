import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { GlobalProvider } from "./context/GlobalState";
import { Home, Add, Edit } from "./pages";
const Routes = () => {
  return (
    <GlobalProvider>
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/add">
            <Add />
          </Route>
          <Route exact path="/edit/:id">
            <Edit />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
};
export default Routes;
