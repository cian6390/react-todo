import { RouteProps } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import DND from "../components/DND/DND";
import Game from "../components/Game/Game";
import TodoList from "../components/TodoList/TodoList";

export const routes: RouteProps[] = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/drag-and-drop",
    exact: true,
    component: DND,
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
    path: "/login",
    exact: true,
    component: Login,
  },
];

export default routes;
