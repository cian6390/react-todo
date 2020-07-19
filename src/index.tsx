import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { Router } from "./router";
import { AuthProvider } from './components/Auth'

function AppRoot(renderChildren: () => JSX.Element) {
  if (process.env.NODE_ENV === 'production') {
    return renderChildren()
  } else {
    return (
      <React.StrictMode>
        {renderChildren()}
      </React.StrictMode>
    )
  }
}

ReactDOM.render(AppRoot(() => (
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  )),
  document.getElementById("root")
);
