import "./App.scss";
import React, { useContext } from "react";
import logo from "../../assets/logo.svg";
import { useLocation, Switch, Route } from "react-router-dom";
import { Link, routes } from "../../router";
import { themeContext } from "../ThemeContext";
import { authContext } from "../AuthContext";

function App() {
  usePageViews();
  const auth = useContext(authContext);
  const theme = useContext(themeContext);

  return (
    <div className={`App ${theme.mode}`}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="spacer"></div>
        <ul className="links">
          <li className="links__item">
            <Link to="/">Home</Link>
          </li>
          <li className="links__item">
            <Link to="/game">Game</Link>
          </li>
          <li className="links__item">
            <Link to="/todo-list">TodoList</Link>
          </li>
          <li className="links__item">
            <Link to="/drag-and-drop">DnD</Link>
          </li>
          <li className="links__item">
            {auth.state.user ? (
              <button onClick={() => auth.logout()}>Logout</button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </header>
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
  );
}

function usePageViews() {
  const location = useLocation();

  React.useEffect(() => {
    console.log(["pageview", location.pathname]);
  }, [location]);
}

export default App;
