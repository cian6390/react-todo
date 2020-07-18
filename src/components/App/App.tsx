import "./App.scss";
import React from "react";
import logo from "../../logo.svg";
import { useLocation } from "react-router-dom";
import { Link, RouterView, routes } from "../../router";

function usePageViews() {
  let location = useLocation();
  React.useEffect(() => {
    console.log(["pageview", location.pathname]);
  }, [location]);
}

function App() {
  usePageViews();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="spacer"></div>
        <ul className="links">
          <li className="links__item">
            <Link to="/">Game</Link>
          </li>
          <li className="links__item">
            <Link to="/todo-list">TodoList</Link>
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

export default App;
