import React from "react";
import { Switch, Route } from "react-router-dom";
import TodoList from "./components/TodoList/TodoList";
import Home from "./components/Home";
export { BrowserRouter as Router, Link } from "react-router-dom";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/todo-list",
    component: TodoList,
  },
];

// Copy from https://reactrouter.com/web/example/route-config
// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
export function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export function RouterView(props: { routes: any }) {
  return (
    <Switch>
      {props.routes.map((route: any, i: number) => (
        <RouteWithSubRoutes key={"route-index-" + i} {...route} />
      ))}
    </Switch>
  );
}
