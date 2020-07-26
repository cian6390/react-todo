import "./App.scss";
import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import { useLocation, Switch, Route } from "react-router-dom";
import { Link, routes } from "../../router";
import { Button, CircularProgress, Paper } from "@material-ui/core";

import { logout, firebaseApp } from "../../services/firebase";
import { RootState, unsetUser, setUser } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { ThemeContext } from '../../theme/context'

function App() {
  usePageViews();
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);
  const themeContext = useContext(ThemeContext);

  function toggleTheme() {
    const mode = themeContext.mode
    const nextMode = mode === 'light' ? 'dark' : 'light'
    themeContext.setTheme(nextMode)
  }

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => dispatch(setUser(user)));
  }, [dispatch]);

  const [loading, setLoading] = useState(false);
  async function logoutHandler() {
    try {
      setLoading(true);
      await logout();
      dispatch(unsetUser());
    } catch (err) {
      console.error(err);
      alert("Error! Please check console.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Paper>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="spacer"></div>
          <ul className="links">
            <Button onClick={toggleTheme}>theme</Button>
            <li className="links__item">
              <Link to="/">Home</Link>
            </li>
            <li className="links__item">
              <Link to="/pokemon">Pokemon</Link>
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
              {auth.user ? (
                <Button
                  color="secondary"
                  variant="outlined"
                  disabled={loading}
                  onClick={logoutHandler}
                >
                  {loading ? <CircularProgress size="18px" /> : "Logout"}
                </Button>
              ) : (
                <Button color="secondary" variant="outlined" href="/login">
                  Login
                </Button>
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
