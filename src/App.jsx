// // src/App.jsx
// import React from "react";
// import Router from "./Router";

// function App() {
//   return <Router />;
// }

// export default App;
// src/App.jsx
import React from "react";
import Router from "./Router";
import DataProvider from "../src/Components/DataProvider/DataProvider"
import reducer, { initialState } from "./Utility/reducer";

function App() {
  return (
    <DataProvider reducer={reducer} initialState={initialState}>
      <Router />
    </DataProvider>
  );
}

export default App;
