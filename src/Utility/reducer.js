// import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "./actionType";

// export const initialState = {
//   basket: [],
// };

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case ADD_TO_BASKET:
//       // check if item exists
//       const existingItemIndex = state.basket.findIndex(
//         (item) => item.id === action.item.id
//       );

//       if (existingItemIndex >= 0) {
//         // Increase quantity
//         const newBasket = [...state.basket];
//         newBasket[existingItemIndex].quantity += 1;
//         return {
//           ...state,
//           basket: newBasket,
//         };
//       } else {
//         // Add new item
//         return {
//           ...state,
//           basket: [...state.basket, { ...action.item, quantity: 1 }],
//         };
//       }

//     case REMOVE_FROM_BASKET:
//       const index = state.basket.findIndex((item) => item.id === action.id);
//       if (index >= 0) {
//         const newBasket = [...state.basket];
//         if (newBasket[index].quantity > 1) {
//           newBasket[index].quantity -= 1;
//         } else {
//           newBasket.splice(index, 1);
//         }
//         return { ...state, basket: newBasket };
//       }
//       return state;

//     default:
//       return state;
//   }
// };
// src/Utility/reducer.js
// src/Utility/reducer.js

// import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "./actionType";

// export const initialState = {
//   basket: [],
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case ADD_TO_BASKET:
//       const existingItemIndex = state.basket.findIndex(
//         (item) => item.id === action.item.id
//       );

//       if (existingItemIndex >= 0) {
//         const newBasket = [...state.basket];
//         newBasket[existingItemIndex].quantity += 1;
//         return { ...state, basket: newBasket };
//       } else {
//         return {
//           ...state,
//           basket: [...state.basket, { ...action.item, quantity: 1 }],
//         };
//       }

//     case REMOVE_FROM_BASKET:
//       const index = state.basket.findIndex((item) => item.id === action.id);
//       if (index >= 0) {
//         const newBasket = [...state.basket];
//         if (newBasket[index].quantity > 1) {
//           newBasket[index].quantity -= 1;
//         } else {
//           newBasket.splice(index, 1);
//         }
//         return { ...state, basket: newBasket };
//       }
//       return state;

//     default:
//       return state;
//   }
// };

// export default reducer;
import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "./actionType";

export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_BASKET: {
      // Check if item already exists
      const existingIndex = state.basket.findIndex(
        (item) => item.id === action.item.id
      );

      if (existingIndex >= 0) {
        // Increment quantity safely
        const newBasket = state.basket.map((item, idx) =>
          idx === existingIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { ...state, basket: newBasket };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, quantity: 1 }],
        };
      }
    }

    case REMOVE_FROM_BASKET: {
      const index = state.basket.findIndex((item) => item.id === action.id);
      if (index >= 0) {
        const newBasket = state.basket
          .map((item, idx) =>
            idx === index ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0); // remove if quantity 0
        return { ...state, basket: newBasket };
      }
      return state;
    }

    default:
      return state;
  }
};

export default reducer;
