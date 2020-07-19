import React, { useState, useContext } from "react";
import { withRouter } from "react-router";
import RefList from "./RefList";
import { authContext } from "./AuthContext";

const refs = [
  {
    text:
      "Firebase React Authentication Tutorial For Beginners - Private Route With Hooks",
    url: "https://www.youtube.com/watch?v=unr4s3jd9qA",
  },
];

export const Login = withRouter(({ history }) => {
  const auth = useContext(authContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await auth.login(email, password);
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
