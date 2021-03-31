import React from 'react';

const AuthContext = React.createContext();

export const AuthContextProvider = AuthContext.Provider;
export const AuthContextConsumer = AuthContext.Consumer;

export const useAuthContext = () => {
  const value = React.useContext(AuthContext);
  return value;
};

export default AuthContext;
