import { User as FirebaseUser } from "firebase";
import React, { useState, useEffect } from "react";
import { firebaseApp } from "../base";

export type User = null | FirebaseUser;

export interface RootStore {
  user: User;
}

export const AuthContext = React.createContext({ user: null } as RootStore);

// @ts-ignore
export const AuthProvider = function ({ children }) {
  const [user, setUser] = useState(null as User);

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(setUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
