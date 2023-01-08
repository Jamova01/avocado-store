import ProductCard from "@components/ProductCard/ProductCard";
import ProductList from "@components/ProductList/ProductList";
import { useEffect, useState } from "react";

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  const getProducts = async () => {
    const res = await fetch("/api/avo");
    const data = await res.json();
    setProductList(data.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <ProductList products={productList} />
      {/* {productList.map((product) => (
        <ProductCard
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          sku={""}
          attributes={{
            description: "",
            shape: "",
            hardiness: "",
            taste: "",
          }}
        />
      ))} */}
    </div>
  );
};

export default Home;
