import Product from "@/pages/components/productcard";

export const getStaticPaths = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const products = await res.json();
  const data = products.products;
  const path = data.map((data) => {
    return {
      params: {
        cat: data.category.toString(),
      },
    };
  });

  return {
    paths: path,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const category = context.params.cat;
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}`
  );
  const products = await res.json();
  const data = products.products;

  return {
    props: {
      data,
    },
  };
};

const Category = ({ data }) => {
  console.log(data);
  return (
    <div className="container my-5">
      <div className="row mb-2">
        <div className="col-12 fw-bolder fs-2 text-center">{data[0].category}</div>
      </div>
      <div className="row">
          {data?.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              image={product.thumbnail}
              title={product.title}
              category={product.category}
              price={product.price}
            />
          ))}
        </div>
      </div>
  );
};

export default Category;
