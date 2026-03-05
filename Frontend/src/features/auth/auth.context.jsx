import { Children, createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ Children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(false);

  return (
    <AuthContext.Provider value={{ user, setuser, loading, setloading }}>
      {Children}
    </AuthContext.Provider>
  );
};
