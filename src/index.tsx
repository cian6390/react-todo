import pkg from "../package.json";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { Router } from "./router";
import { AuthProvider } from "./components/Auth";

console.log(`app version ${pkg.version}`);

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
