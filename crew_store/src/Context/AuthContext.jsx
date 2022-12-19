import React, { useState } from "react";

export const AuthContext = React.createContext();
function AuthContextProvider({ children }) {
  const [state, setState] = useState({
    isAuth: false,
    token: null,
    userName: null,
  });
  const loginUser = (token,userName) => {
    setState({
      ...state,
      isAuth: true,
      token,
      userName:userName
    });
  };
  const logoutUser = () => {
    setState({
      ...state,
      isAuth: false,
      token: null,
    });
  };
  return (
    <AuthContext.Provider value={{ state, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;