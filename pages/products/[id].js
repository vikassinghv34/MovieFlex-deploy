import Image from "next/image";
import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  const products = data.products;
  // console.log(products.id);
  const paths = products.map((pro) => {
    return {
      params: {
        id: pro.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
   const Id = context.params.id;
  const res = await fetch(`https://dummyjson.com/products/${Id}`);
  const data =await res.json();
  console.log(data.title);
  return {
    props: {
      data,
    },
  };
};




const Product = ({data}) => {
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 fs-3">Category/<Link className="text-decoration-none text-danger fw-bold" href={`/category/${data.category}`}>{data.category}</Link></div>
        <div className="col-12 col-md-6">
          <Image className="img-fluid" src={data.thumbnail} alt="produxt_image" height={600} width={400}/>
        </div>
        <div className="col-12 col-md-6 align-self-start my-auto ml-0">
          <div className="col-12 fw-bold fs-4">{data.title}</div>
          <div className="col-12 fw-bold fs-5">${data.price}</div>
          <div className="col-12 fw-light">{data.description}</div>
          <div className="col-12 fw-normal fst-italic">Rating:- {data.rating}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
