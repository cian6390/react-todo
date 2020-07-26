import "./App.scss";
import React from "react";
import { useLocation, Switch, Route } from "react-router-dom";
import { routes } from "../../router";
import { Paper } from "@material-ui/core";
import AppHeader from './AppHeader'

function App() {
  usePageViews();

  return (
    <Paper>
      <div className="App">
        <AppHeader />
        <hr />
        <main className="app-main">
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </main>
      </div>
    </Paper>
  );
}

function usePageViews() {
  const location = useLocation();

  React.useEffect(() => {
    console.log(["pageview", location.pathname]);
  }, [location]);
}

export default App;
