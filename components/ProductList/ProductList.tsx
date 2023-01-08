import ProductCard from "@components/ProductCard/ProductCard";
import styles from "./ProductList.module.scss";

const ProductList = (props) => {
  const { products } = props;
  return (
    <section className={styles.productList}>
      {products.map((product) => (
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
      ))}
    </section>
  );
};
export default ProductList;
