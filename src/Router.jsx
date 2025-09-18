// src/Router.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Landing from "./Pages/Landing/Landing";
import Signup from "./Pages/Auth/Signup";
import Cart from "./Pages/Cart/Cart";
import Orders from "./Pages/Orders/Orders";
import Payment from "./Pages/Payment/Payment";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Result from "./Pages/Result/Result";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Landing />
          </Layout>
        }
      />
      <Route
        path="/signup"
        element={
          <Layout>
            <Signup />
          </Layout>
        }
      />
      <Route
        path="/cart"
        element={
          <Layout>
            <Cart />
          </Layout>
        }
      />
      <Route
        path="/orders"
        element={
          <Layout>
            <Orders />
          </Layout>
        }
      />
      <Route
        path="/payment"
        element={
          <Layout>
            <Payment />
          </Layout>
        }
      />
      <Route
        path="/product/:id"
        element={
          <Layout>
            <ProductDetail />
          </Layout>
        }
      />
      <Route
        path="/result"
        element={
          <Layout>
            <Result />
          </Layout>
        }
      />
    </Routes>
  );
};

export default Router;
