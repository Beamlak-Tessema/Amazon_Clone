// // import React from "react";
// // import styles from "./Product.module.css";

// // const ProductCard = ({ title, image, price, rating }) => {
// //   // Generate stars
// //   const stars = [];
// //   for (let i = 1; i <= 5; i++) {
// //     stars.push(
// //       <span
// //         key={i}
// //         style={{ color: i <= Math.round(rating) ? "#f0c14b" : "#ccc" }}
// //       >
// //         ★
// //       </span>
// //     );
// //   }

// //   return (
// //     <div className={styles.card}>
// //       <img src={image} alt={title} className={styles.image} />
// //       <h3 className={styles.title}>{title}</h3>
// //       <div className={styles.rating}>{stars}</div>
// //       <p className={styles.price}>${price}</p>
// //       <button className={styles.button}>Add to Cart</button>
// //     </div>
// //   );
// // };

// // export default ProductCard;
// // src/Components/Product/ProductCard.jsx
// // src/Components/Product/ProductCard.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import styles from "./Product.module.css";

// const ProductCard = ({ id, title, image, price, rating }) => {
//   // Generate stars
//   const stars = [];
//   for (let i = 1; i <= 5; i++) {
//     stars.push(
//       <span
//         key={i}
//         style={{ color: i <= Math.round(rating) ? "#f0c14b" : "#ccc" }}
//       >
//         ★
//       </span>
//     );
//   }

//   return (
//     <div className={styles.card}>
//       {/* ✅ Wrap product content in Link */}
//       <Link
//         to={`/product/${id}`}
//         style={{ textDecoration: "none", color: "inherit" }}
//       >
//         <img src={image} alt={title} className={styles.image} />
//         <h3 className={styles.title}>{title}</h3>
//         <div className={styles.rating}>{stars}</div>
//         <p className={styles.price}>${price}</p>
//       </Link>

//       {/* Keep your Add to Cart button separate */}
//       <button className={styles.button}>Add to Cart</button>
//     </div>
//   );
// };

// export default ProductCard;
// src/components/Product/ProductCard.jsx
// src/components/Product/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../../Components/DataProvider/DataProvider";
import { ADD_TO_BASKET } from "../../Utility/actionType";
import styles from "./Product.module.css";

const ProductCard = ({ id, title, image, price, rating }) => {
  const { dispatch } = useData();

  const handleAddToCart = () => {
    dispatch({
      type: ADD_TO_BASKET,
      item: { id, title, image, price, rating },
    });
    // No alert needed
  };

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} style={{ color: i <= Math.round(rating) ? "#f0c14b" : "#ccc" }}>
        ★
      </span>
    );
  }

  return (
    <div className={styles.card}>
      {/* ✅ Wrap image, title, rating, price in Link to navigate */}
      <Link to={`/product/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img src={image} alt={title} className={styles.image} />
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.rating}>{stars}</div>
        <p className={styles.price}>${price}</p>
      </Link>

      {/* Add to Cart button stays separate */}
      <button className={styles.button} onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

