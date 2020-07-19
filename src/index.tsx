import pkg from "../package.json";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { Router } from "./router";
import { ThemeProvider } from "./components/ThemeContext";
import { AuthProvider } from './components/AuthContext'

console.log(`app version ${pkg.version}`);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <App />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
