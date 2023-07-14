import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Product from "./components/productcard";


export const getServerSideProps = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const products = await res.json();
  const data = products.products;
  return {
    props: {
      data,
    },
  };
};

const Products = ({ data }) => {
  return (
    <div className="container my-5">
      <div className="row text-center mb-5">
        <div className="col-12 fw-bolder fs-2">Products List</div>
      </div>
      <div className="row">
        {data.slice(0,8).map((product) => (
          <Product key={product.id} id={product.id} image={product.thumbnail} titl={product.title} category={product.category} price={product.price} />
        ))}
      </div>
    </div>
  );
};

export default Products;
