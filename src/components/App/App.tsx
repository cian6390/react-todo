import "./App.scss";
import React, { useContext } from "react";
import logo from "../../assets/logo.svg";
import { useLocation } from "react-router-dom";
import { Link, RouterView, routes } from "../../router";
import { AuthContext } from "../Auth";
import { firebaseApp } from "../../services/firebase";

function App() {
  usePageViews();

  const { user } = useContext(AuthContext);

  async function logoutHandler(e: React.MouseEvent) {
    e.preventDefault();
    await firebaseApp.auth().signOut();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {user && <div>Hello {user.email}</div>}
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
            {user ? (
              <button onClick={logoutHandler}>Logout</button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </header>
      <hr />
      <main className="app-main">
        <RouterView routes={routes} />
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
