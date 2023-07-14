import React, { useEffect } from "react";

const Dec = (props) => {
  console.log("dec1");

  useEffect(() => {
    console.log("dec inside use effect");

    //   return () => {
    //     second
    //   }
  }, []);

  return (
    <>
      {console.log("Inside dec Render")}
          <div>ID = {props.data}</div>
          {console.log(props.data)}
    </>
  );
};

export default Dec;
