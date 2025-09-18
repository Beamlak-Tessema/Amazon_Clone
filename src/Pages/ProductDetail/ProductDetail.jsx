// // // src/Pages/ProductDetail/ProductDetail.jsx
// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import api from "../../API/endpoints";
// // import Load from "../../Load/Load";


// // const ProductDetail = () => {
// //   const { id } = useParams();
// //   const [product, setProduct] = useState(null);
// //   const [loading, setLoading] = useState(true); 

// //   useEffect(() => {
// //     api
// //       .get(`/products/${id}`)
// //       .then((res) => setProduct(res.data))
// //       .catch((err) => console.error(err));
// //   }, [id]);
// // useEffect(() => {
// //   setLoading(true); // start loading
// //   api
// //     .get(`/products/${id}`)
// //     .then((res) => setProduct(res.data))
// //     .catch((err) => console.error(err))
// //     .finally(() => setLoading(false)); // stop loading
// // }, [id]);

// //   if (!product) return <p>Loading...</p>;
// //   if (loading) return <Load />;
// // <button
// //   style={{
// //     marginTop: "20px",
// //     backgroundColor: "#ffd814",
// //     border: "none",
// //     padding: "12px 24px",
// //     borderRadius: "6px",
// //     fontWeight: "600",
// //     cursor: "pointer",
// //   }}
// //   onClick={() => handleAddToCart(product)}
// // >
// //   Add to Cart
// // </button>;


// //   return (
// //     <div style={{ padding: "30px", display: "flex", gap: "40px" }}>
// //       <div style={{ flex: "1" }}>
// //         <img
// //           src={product.image}
// //           alt={product.title}
// //           style={{ width: "100%", maxWidth: "400px", objectFit: "contain" }}
// //         />
// //       </div>
// //       <div style={{ flex: "2" }}>
// //         <h2>{product.title}</h2>
// //         <p style={{ fontWeight: "bold", fontSize: "20px" }}>${product.price}</p>
// //         <p>{product.description}</p>
// //         <p>
// //           <strong>Category:</strong> {product.category}
// //         </p>
// //         <p>
// //           <strong>Rating:</strong> {product.rating?.rate} ⭐ (
// //           {product.rating?.count} reviews)
// //         </p>
// //       </div>
// //     </div>
// //   );

// // };

// // export default ProductDetail;
// // src/Pages/ProductDetail/ProductDetail.jsx
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import api from "../../API/endpoints";
// import Load from "../../Load/Load";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Fetch product
//   useEffect(() => {
//     setLoading(true);
//     api
//       .get(`/products/${id}`)
//       .then((res) => setProduct(res.data))
//       .catch((err) => console.error(err))
//       .finally(() => setLoading(false));
//   }, [id]);

//   const handleAddToCart = (product) => {
//     console.log("Added to cart:", product);
//     alert(`${product.title} added to cart!`);
//   };

//   if (loading) return <Load />; // show fade spinner

//   return (
//     <div style={{ padding: "30px", display: "flex", gap: "40px", flexWrap: "wrap" }}>
//       <div style={{ flex: "1", minWidth: "300px" }}>
//         <img
//           src={product.image}
//           alt={product.title}
//           style={{ width: "100%", maxWidth: "400px", objectFit: "contain" }}
//         />
//       </div>

//       <div style={{ flex: "2", minWidth: "300px" }}>
//         <h2>{product.title}</h2>
//         <p style={{ fontWeight: "bold", fontSize: "20px" }}>${product.price}</p>
//         <p>{product.description}</p>
//         <p><strong>Category:</strong> {product.category}</p>
//         <p><strong>Rating:</strong> {product.rating?.rate} ⭐ ({product.rating?.count} reviews)</p>

//         {/* ✅ Add to Cart Button */}
//         <button
//           style={{
//             marginTop: "20px",
//             backgroundColor: "#ffd814",
//             border: "none",
//             padding: "12px 24px",
//             borderRadius: "6px",
//             fontWeight: "600",
//             cursor: "pointer",
//           }}
//           onClick={() => handleAddToCart(product)}
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
// src/Pages/ProductDetail/ProductDetail.jsx
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import api from "../../API/endpoints";
// import Load from "../../Load/Load";
// import { useData } from "../../Components/DataProvider/DataProvider";
// import { ADD_TO_BASKET } from "../../Utility/actionType";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { state, dispatch } = useData(); // use context

//   useEffect(() => {
//     setLoading(true);
//     api
//       .get(`/products/${id}`)
//       .then((res) => setProduct(res.data))
//       .catch((err) => console.error(err))
//       .finally(() => setLoading(false));
//   }, [id]);

//   const handleAddToCart = (product) => {
//     dispatch({
//       type: ADD_TO_BASKET,
//       item: product,
//     });
//     // alert(`${product.title} added to cart!`);
//   };

//   if (loading) return <Load />;

//   return (
//     <div style={{ padding: "30px", display: "flex", gap: "40px", flexWrap: "wrap" }}>
//       <div style={{ flex: "1", minWidth: "300px" }}>
//         <img
//           src={product.image}
//           alt={product.title}
//           style={{ width: "100%", maxWidth: "400px", objectFit: "contain" }}
//         />
//       </div>

//       <div style={{ flex: "2", minWidth: "300px" }}>
//         <h2>{product.title}</h2>
//         <p style={{ fontWeight: "bold", fontSize: "20px" }}>${product.price}</p>
//         <p>{product.description}</p>
//         <p><strong>Category:</strong> {product.category}</p>
//         <p><strong>Rating:</strong> {product.rating?.rate} ⭐ ({product.rating?.count} reviews)</p>

//         <button
//           style={{
//             marginTop: "20px",
//             backgroundColor: "#ffd814",
//             border: "none",
//             padding: "12px 24px",
//             borderRadius: "6px",
//             fontWeight: "600",
//             cursor: "pointer",
//           }}
//           onClick={() => handleAddToCart(product)}
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../API/endpoints";
import Load from "../../Load/Load";
import { useData } from "../../Components/DataProvider/DataProvider";
import { ADD_TO_BASKET } from "../../Utility/actionType";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { dispatch } = useData();

  useEffect(() => {
    setLoading(true);
    api
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Load />;
  if (!product) return <p>Product not found</p>;

  return (
    <div
      style={{
        padding: "30px",
        display: "flex",
        gap: "40px",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flex: "1", minWidth: "300px" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "100%", maxWidth: "400px", objectFit: "contain" }}
        />
      </div>

      <div style={{ flex: "2", minWidth: "300px" }}>
        <h2>{product.title}</h2>
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>${product.price}</p>
        <p>{product.description}</p>
        <p>
          <strong>Category:</strong> {product.category}
        </p>
        <p>
          <strong>Rating:</strong> {product.rating?.rate} ⭐ (
          {product.rating?.count} reviews)
        </p>

        <button
          style={{
            marginTop: "20px",
            backgroundColor: "#ffd814",
            border: "none",
            padding: "12px 24px",
            borderRadius: "6px",
            fontWeight: "600",
            cursor: "pointer",
          }}
          onClick={() => dispatch({ type: ADD_TO_BASKET, item: product })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
