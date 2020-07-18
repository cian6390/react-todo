import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from './components/Login'
import Game from "./components/Game/Game";
import TodoList from "./components/TodoList/TodoList";
import DND from './components/DND/DND'
export { BrowserRouter as Router, Link } from "react-router-dom";

export const routes = [
  {
    path: '/',
    exact: true,
    component: () => <h1>Home</h1>
  },
  {
    path: '/drag-and-drop',
    exact: true,
    component: DND
  },
  {
    path: "/game",
    exact: true,
    component: Game,
  },
  {
    path: "/todo-list",
    exact: true,
    component: TodoList,
  },
  {
    path: '/login',
    exact: true,
    component: Login
  }
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
