import React from "react";
import { Switch, Route, RouteProps } from "react-router-dom";

export { routes } from "./routes";
export { BrowserRouter as Router, Link } from "react-router-dom";

// Copy from https://reactrouter.com/web/example/route-config
// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
export function RouteWithSubRoutes(route: RouteProps) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        // @ts-ignore
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export function RouterView(props: { routes: RouteProps[] }) {
  return (
    <Switch>
      {props.routes.map((route, i: number) => (
        <RouteWithSubRoutes key={"route-index-" + i} {...route} />
      ))}
    </Switch>
  );
}
