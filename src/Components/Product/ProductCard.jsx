import React from "react";
import styles from "./Product.module.css";

const ProductCard = ({ title, image, price, rating }) => {
  // Generate stars
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        style={{ color: i <= Math.round(rating) ? "#f0c14b" : "#ccc" }}
      >
        ★
      </span>
    );
  }

  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.rating}>{stars}</div>
      <p className={styles.price}>${price}</p>
      <button className={styles.button}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
