import React, { useEffect, useState } from "react";
import Link from "next/link";
import Dec from "./dec";

const Inc = () => {
  const [state, setState] = useState(0);

  console.log("Outside");
  var ProData = "";

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    const Products = data.products[1].title;
    

    ProData = Products;
    console.log(ProData);

  };

  useEffect(() => {
    console.log("inside use effect");
    fetchData();
  }, [state]);

  return (
    <div>
      {console.log("Inside Render")}
      <div style={{ border: "1px solid black", padding: "10px" }}></div>
      <br />
      <Dec data={ProData} />
      Hello this is functional component
      <button onClick={() => setState((prev) => prev + 2)}>Click me</button>
      <h1>{state}</h1>
    </div>
  );
};

export default Inc;
