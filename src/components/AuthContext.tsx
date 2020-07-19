import React, { useEffect } from "react";
import useAuth, { FirebaseUser } from "./useAuth";

export interface AuthContextSchema {
  user: null | FirebaseUser;
}

export const authContext = React.createContext({} as ReturnType<typeof useAuth>);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const auth = useAuth();
  useEffect(() => auth.check(), []);

  return (
    <authContext.Provider value={auth}>{children}</authContext.Provider>
  );
}
