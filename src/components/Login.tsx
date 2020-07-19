import React, { useState } from "react";
import { withRouter } from "react-router";
import RefList from "./RefList";

import { login } from '../services/firebase'
import { setUser } from '../store'
import { useDispatch } from 'react-redux'

const refs = [
  {
    text:
      "Firebase React Authentication Tutorial For Beginners - Private Route With Hooks",
    url: "https://www.youtube.com/watch?v=unr4s3jd9qA",
  },
];

export const Login = withRouter(({ history }) => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(email, password)
      dispatch(setUser(response.user))
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <RefList items={refs} />
    </>
  );
});

export default Login;
