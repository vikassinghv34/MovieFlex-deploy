import React, { useEffect, useState } from "react";

const data = () => {
  const [data, setdata] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setdata(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <div>data</div>
      {data.slice(0, 5).map((product) => (
        <div>
          <h2>{product.title}</h2>
        </div>
      ))}
    </>
  );
};

export default data;
