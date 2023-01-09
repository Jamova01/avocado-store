// React
import { useEffect, useState } from "react";

// Next
import { useRouter } from "next/router";

// Icons
import { MdAddShoppingCart } from "react-icons/md";

// Components
import ProductDetailCard from "@components/ProducDetailCard/ProductDetailCard";
import AttributeTable from "@components/AttributeTable/AttributeTable";

// Styles
import styles from "./styles.module.scss";

const ProductDetail = () => {
  const [product, setProduct] = useState<TProduct>();

  const {
    query: { id },
  } = useRouter();

  const getProduct = async (id: TProductId | string[]) => {
    try {
      const res = await fetch(`/api/avo/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    id && getProduct(id);
  }, [id]);

  return (
    <div>
      <ProductDetailCard
        id={product?.id}
        name={product?.name}
        image={product?.image}
        price={product?.price}
        sku={product?.sku}
        attributes={product?.attributes}
      />
      <div className={styles["add-to-card"]}>
        <input
          type="number"
          name=""
          id=""
          value={0}
          min="1"
          step="1"
          placeholder="Quantity"
          className={styles["add-to-card__quantity-input"]}
        />
        <button className={styles["add-to-card__add-btn"]}>
          <MdAddShoppingCart /> Add to Cart
        </button>
      </div>
      <AttributeTable
        shape={product?.attributes.shape}
        hardiness={product?.attributes.hardiness}
        taste={product?.attributes.taste}
        description={product?.attributes.taste}
      />
    </div>
  );
};

export default ProductDetail;
