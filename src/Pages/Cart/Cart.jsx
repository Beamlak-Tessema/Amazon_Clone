// // src/Pages/Cart/Cart.jsx
// import React from "react";
// import { useData } from "../../Components/DataProvider/DataProvider"
// import styles from "./Cart.module.css";
// import { ADD_TO_BASKET } from "../../Utility/actionType";

// const Cart = () => {
//   const { state, dispatch } = useData();
//   const { basket } = state;

//   // Calculate total price
//   const totalPrice = basket.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   const increaseQuantity = (item) => {
//     dispatch({ type: ADD_TO_BASKET, item });
//   };

//   const decreaseQuantity = (item) => {
//     dispatch({ type: "REMOVE_FROM_BASKET", item });
//   };

//   if (!basket.length)
//     return <p className={styles.empty}>Your Shopping Basket is empty.</p>;

//   return (
//     <div className={styles.container}>
//       <h2>Your Shopping Basket</h2>
//       <div className={styles.basketGrid}>
//         {basket.map((item) => (
//           <div key={item.id} className={styles.basketItem}>
//             <img src={item.image} alt={item.title} className={styles.image} />
//             <div className={styles.details}>
//               <h3>{item.title}</h3>
//               <p>${item.price}</p>
//               <div className={styles.quantity}>
//                 <button onClick={() => decreaseQuantity(item)}>-</button>
//                 <span>{item.quantity}</span>
//                 <button onClick={() => increaseQuantity(item)}>+</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className={styles.total}>
//         <h3>Total: ${totalPrice.toFixed(2)}</h3>
//         <button className={styles.checkout}>Proceed to Checkout</button>
//       </div>
//     </div>
//   );
// };

// export default Cart;

// src/Pages/Cart/Cart.jsx
import React from "react";
import { useData } from "../../Components/DataProvider/DataProvider";
import styles from "./Cart.module.css";
import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../../Utility/actionType";

const Cart = () => {
  const { state, dispatch } = useData();
  const { basket } = state;

  // Calculate total price
  const totalPrice = basket.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const increaseQuantity = (item) => {
    dispatch({ type: ADD_TO_BASKET, item });
  };

  const decreaseQuantity = (item) => {
    dispatch({ type: REMOVE_FROM_BASKET, id: item.id });
  };

  if (!basket.length)
    return <p className={styles.empty}>Your Shopping Basket is empty.</p>;

  return (
    <div className={styles.container}>
      <h2>Your Shopping Basket</h2>
      <div className={styles.basketGrid}>
        {basket.map((item) => (
          <div key={item.id} className={styles.basketItem}>
            <img src={item.image} alt={item.title} className={styles.image} />
            <div className={styles.details}>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <div className={styles.quantity}>
                <button onClick={() => decreaseQuantity(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.total}>
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button className={styles.checkout}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
