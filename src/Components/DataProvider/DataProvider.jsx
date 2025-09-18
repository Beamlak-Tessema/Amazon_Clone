// // src/DataProvider/DataProvider.jsx
// import React, { createContext, useReducer, useContext } from "react";

// export const DataContext = createContext();

// const DataProvider = ({ reducer, initialState, children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <DataContext.Provider value={{ state, dispatch }}>
//       {children}
//     </DataContext.Provider>
//   );
// };

// // Custom hook for easier access
// export const useData = () => useContext(DataContext);

// export default DataProvider;
// src/DataProvider/DataProvider.jsx
import React, { createContext, useReducer, useContext } from "react";

export const DataContext = createContext();

const DataProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook for easier access
export const useData = () => useContext(DataContext);

export default DataProvider;
