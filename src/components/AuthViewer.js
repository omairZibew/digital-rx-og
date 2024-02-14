import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAuthState } from "../lib/reducers/authSlice";

const AuthViewerUpdater = () => {
  const authState = useSelector((state) => state.auth.authState);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setAuthState(true));
  };

  const handleLogout = () => {
    dispatch(setAuthState(false));
  };

  return (
    <div className="flex gap border border-1 border-black p-20">
      You are now {authState ? "Logged In" : "Logged Out"}
      <div>
        <button onClick={handleLogin}>Log in</button>
        <button onClick={handleLogout}>Log out</button>
      </div>
    </div>
  );
};

export default AuthViewerUpdater;
