import React, { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
// import ROUTES from "./Routes";
import './App.scss'

const App = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default App;
