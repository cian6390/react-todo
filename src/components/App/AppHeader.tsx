import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import { ThemeContext } from "../../theme/context";
import { Button, CircularProgress } from "@material-ui/core";
import { Link } from "../../router";
import { useSelector, useDispatch } from "react-redux";
import { logout, firebaseApp } from "../../services/firebase";
import { RootState, unsetUser, setUser } from "../../store";

export default function AppHeader() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const auth = useSelector((state: RootState) => state.auth);
  const themeContext = useContext(ThemeContext);
  function toggleTheme() {
    const mode = themeContext.mode;
    const nextMode = mode === "light" ? "dark" : "light";
    themeContext.setTheme(nextMode);
  }

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

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => dispatch(setUser(user)));
  }, [dispatch]);

  return (
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
  );
}
