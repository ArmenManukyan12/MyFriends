import React, { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./Routes";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path={ROUTES}>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
