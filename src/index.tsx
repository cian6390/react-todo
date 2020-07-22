import pkg from "../package.json";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { Router } from "./router";
import store from "./store";
import { ThemeProvider } from "./components/ThemeContext";
import { Provider } from "react-redux";

console.log(`app version ${pkg.version}`);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
